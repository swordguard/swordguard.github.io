import {useState, useEffect} from 'react';
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { FEEDBACK_ENDPOINT } from '../../constants/constants'

function ListComponent() {
  const [feedbackList, setFeedbackList] = useState([])
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [toBeDeleted, setToBeDeleted] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const fetchList = () => {
    setIsLoading(true)
    axios.get(`${FEEDBACK_ENDPOINT}s`)
    .then(response => {
        if (response.statusText === 'OK') {
            const records = response.data
            if (records.length > 0) {
                setFeedbackList(records)
            }
        }
        setIsLoading(false)
    })
    .catch(() => {
        setIsLoading(false)
    })
  }
  useEffect(() => {
    fetchList()
  }, [])

  const deleteRecordById = (id:any) => {
    setIsDeleting(true)
    id && axios.delete(`${FEEDBACK_ENDPOINT}/${id}`).then(() => {
        fetchList()
        setOpenConfirmation(false)
        setIsDeleting(false)
    })
  }

  const handleConfirmation = (e:any, id: string) => {
    setOpenConfirmation(true);
    setToBeDeleted(id)
  };

  const handleClose = () => {
    setOpenConfirmation(false);
    setToBeDeleted('')
  };

  if (isLoading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center'}}>
      <CircularProgress />
    </Box>
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date time</TableCell>
            <TableCell align="right">Full Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Comments</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
          <TableBody>
            {feedbackList.map((row: any) => (
            <TableRow
              key={row.backupId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                {new Date(Number(row.backupId.substring(0, row.backupId.indexOf('-')))).toUTCString()}
              </TableCell>
              <TableCell component="th" scope="row">
                {`${row.firstName} ${row.lastName}`}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.comments}</TableCell>
              <TableCell align="right"><DeleteIcon onClick={(e) => handleConfirmation(e, row.backupId)}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog
        open={openConfirmation}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete confirmation"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure to delete it?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} disabled={isDeleting}>No</Button>
          <Button onClick={() => deleteRecordById(toBeDeleted)} autoFocus value='Y' disabled={isDeleting}>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </TableContainer>
  );
}

export default ListComponent