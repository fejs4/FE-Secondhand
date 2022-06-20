export const loginValidation = (values,setError) =>{
    const error = []
    const patternEmail = /^[a-zA-Z0-9_\.]+@+[a-zA-Z]+\./g
    error.email = patternEmail.test(values.email) ? '' : 'email invalid'
    error.password = values.password.length > 8 ? '' : 'password must be at least 8 character'
    setError({...error})
}

export const registerValidation = (values,setError) =>{
    const error = []
    const patternEmail = /^[a-zA-Z0-9_\.]+@+[a-zA-Z]+\./g
    error.name = values.name.length !== 0 ? '' : 'name cannot be null'
    error.email = patternEmail.test(values.email) ? '' : 'email invalid'
    error.password = values.password.length > 8 ? '' : 'password must be at least 8 character'
    setError({...error})
} 