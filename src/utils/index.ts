import axios from 'axios'

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
    setPosting: any, {formErrors, setFormErrors}: any,e: any) => {
       if(!validateForm({formData, formErrors, setFormErrors})) {
        return
       }
  e.preventDefault()
    setPosting(true)
  axios.post('http://localhost:4000/feedbacks', formData)
  .then(() => {
      setPosting(false)
      setToastOpen(true)
      setSubmitSuccess(true)
  })
  .catch((err) => {
      setPosting(false)
      setToastOpen(true)
      setSubmitSuccess(false)
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

    console.log(formData,formErrors, newErrors)
    if (newErrors && Object.values(newErrors)?.length) {
        setFormErrors(newErrors)
        return false
    }

    setFormErrors({})
    return true;
}