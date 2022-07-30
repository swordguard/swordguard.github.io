import axios from 'axios'
import { FEEDBACK_ENDPOINT } from '../constants/constants'

export const onFirstNameChange = (e: any, setFirstName: any) => {
    setFirstName(e.target.value)
}

export const onLastNameChange = (e: any, setFirstName: any) => {
    setFirstName(e.target.value)
}

export const onEmailChange = (e: any, setFirstName: any) => {
    setFirstName(e.target.value)
}

export const onCommentsChange = (e: any, setFirstName: any) => {
    setFirstName(e.target.value)
}

export const handleSubmit = (formData: any, setToastOpen: any, setSubmitSuccess: any, 
    setPosting: any, {formErrors, setFormErrors}: any,
    setValidationMsg:any, e: any) => {
       if(!validateForm({formData, formErrors, setFormErrors})) {
        return
       }
  e.preventDefault()
    setPosting(true)
  axios.post(FEEDBACK_ENDPOINT, formData)
//   axios.post('https://ms-website-api.herokuapp.com/feedback', formData)
  .then(() => {
      setPosting(false)
      setToastOpen(true)
      setSubmitSuccess(true)
  })
  .catch((err) => {
      setPosting(false)
      setToastOpen(true)
      setSubmitSuccess(false)
      setValidationMsg(err.response.data)
  })
}

export const validateForm = ({formData, formErrors, setFormErrors}: any): boolean => {
    const newErrors = Object.entries(formData).reduce((accu, [key, value]: any) => {
        let newError
        if (value.trim().length === 0) {
            newError = {
                ...accu,
                [key]: 'required'
            }
        }
        return newError
    }, {...formErrors})

    if (newErrors && Object.values(newErrors)?.length) {
        setFormErrors(newErrors)
        return false
    }

    setFormErrors({})
    return true;
}