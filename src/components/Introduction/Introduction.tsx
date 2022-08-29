import Typography from '@mui/material/Typography';
import intro from '../../constants/introduction/introduction'

interface Props {
  lan: string
}

const Introduction = ({lan}: Props) => {
    return <Typography gutterBottom variant="h5" component="h2" align='center' className='mx-5'>
    <section>{intro[lan as keyof typeof intro]}</section>
  </Typography>
}

export default Introduction