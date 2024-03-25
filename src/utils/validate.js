export const checkValidate =(email,password)=>{
    const isemailvalidate =/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/.test(email)
    const ispasswordvalidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!isemailvalidate) return 'email id is not valid'
    if(!ispasswordvalidate) return 'password is not valid'


    return null

}