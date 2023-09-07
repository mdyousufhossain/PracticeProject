const auth = async (req:any ,res:any , user:String) => {
    req.user.name = 'name'
    req.user.pwd = 'password'
    req.user.role = 'user'
}