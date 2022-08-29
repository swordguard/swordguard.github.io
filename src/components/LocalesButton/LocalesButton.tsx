import Button from '@mui/material/Button';

const LocalesButton = ({onLocaleClick, lan}: any) => {
    return (
        <Button variant="text" color="inherit" size="large" onClick={onLocaleClick}>{lan === 'en' ? '中文' : 'English'}</Button>
    )
}

export default LocalesButton