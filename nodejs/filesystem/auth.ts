const auth = async (req:any ,res:any , user:String) => {
    req.user.name = database.findAll('name') ;


}