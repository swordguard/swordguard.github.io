import {useState} from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AddCommentIcon from '@mui/icons-material/AddComment';
import {
    onFirstNameChange, 
    onFirstNameBlur,
    onLastNameChange,onEmailChange,onCommentsChange, handleSubmit} from '../../utils'
import Toast from '../Toast'

export default function MSForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [comments, setComments] = useState('')
  const [posting, setPosting] = useState(false)
  const [openToast, setOpenToast] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState()
  const [validationMsg, setValidationMsg] = useState()
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: ''
  })

const formData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    comments: comments
}

  return (
      <Container component="main" maxWidth="xs">
        <Toast openToast={openToast} setOpenToast={setOpenToast} success={submitSuccess} message={validationMsg}/>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AddCommentIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            We&apos;d like to hear from you.
          </Typography>
          <TextField
          required
              margin="normal"
              fullWidth
              id="firstName"
              label="Frist Name"
              name="firstName"
              onChange={(e) => onFirstNameChange(e, setFirstName)}
              onBlur={() => onFirstNameBlur(formData,formErrors, setFormErrors)}
              value={firstName}
              error={Boolean(formErrors.firstName)}
              helperText={formErrors.firstName}
            />
            <TextField
            required
              margin="normal"
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              value={lastName}
              onChange={(e) => onLastNameChange(e, setLastName)}
              onBlur={() => onFirstNameBlur(formData,formErrors, setFormErrors)}
              error={Boolean(formErrors.lastName)}
              helperText={formErrors.lastName}
            />
            <TextField
            required
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => onEmailChange(e, setEmail)}
              onBlur={() => onFirstNameBlur(formData,formErrors, setFormErrors)}
              error={Boolean(formErrors.email)}
              helperText={formErrors.email}
            />
            <TextField
            required
                margin="normal"
                id="comments"
                name="comments"
                label="Comments"
                fullWidth
                multiline
                maxRows={6}
                value={comments}
                onChange={(e) => onCommentsChange(e, setComments)}
                onBlur={() => onFirstNameBlur(formData,formErrors, setFormErrors)}
                error={Boolean(formErrors.comments)}
                helperText={formErrors.comments}
                />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={posting}
              onClick={(e) => handleSubmit(formData, setOpenToast, setSubmitSuccess, setPosting, {formErrors, setFormErrors}, setValidationMsg,e)}
            >
              Submit
            </Button>
          </Box>
      </Container>
  );
}