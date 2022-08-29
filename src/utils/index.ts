import axios from 'axios'
import { FEEDBACK_ENDPOINT } from '../constants/constants'
import validationFormCopy from '../constants/form/validation'

export const onFirstNameChange = (e: any, setFirstName: any) => {
    setFirstName(e.target.value)
}

export const onFirstNameBlur = (formData: any, formErrors: any, setFormErrors: any) => {
    validateForm({formData, formErrors, setFormErrors})
}

export const onLastNameChange = (e: any, setFirstName: any) => {
    setFirstName(e.target.value)
}

export const onEmailChange = (e: any, setFirstName: any) => {
    setFirstName(e.target.value)
}

const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

export const onCommentsChange = (e: any, setFirstName: any) => {
    setFirstName(e.target.value)
}

export const handleSubmit = (formData: any, setToastOpen: any, setSubmitSuccess: any, 
    setPosting: any, {formErrors, setFormErrors, lan}: any,
    setValidationMsg:any, e: any) => {
       if(!validateForm({formData, formErrors, setFormErrors, lan})) {
        return
       }
  e.preventDefault()
    setPosting(true)
  axios.post(FEEDBACK_ENDPOINT, formData)
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

interface TypeProps {
    key: string
}

export const validateForm = ({formData, formErrors, setFormErrors, lan}: any): boolean => {
    const newErrors = Object.keys(formData).reduce((accu, curr) => {
        let newError
        const value = formData[curr]
        if (value.trim().length === 0) {
            newError = {
                // @ts-ignore
                [curr]: validationFormCopy[curr][lan as any]
            }
        } else {
            delete formErrors[curr]
        }
        
        if (curr === 'email') {
            if (!validateEmail(value.trim())) {
                newError = {
                    // @ts-ignore
                    [curr]: validationFormCopy[curr][lan]
                }
                
            }
        }

        return {
            ...accu,
            ...newError
        }
    }, {})

    if (newErrors && Object.values(newErrors)?.length) {
        setFormErrors(newErrors)
        return false
    }

    setFormErrors({})
    return true;
}