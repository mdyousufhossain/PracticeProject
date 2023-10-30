const ScemaUserMemberdb = require("../../Model/memberModel");



const memberHandleLogout = async (req, res) => {
    // client deleteing the access token
  
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204);
    // if no cookies why bother deleting ?
    const refreshToken = cookies.jwt;
  
    const LoggedUser = await ScemaUserMemberdb.findOne({ refreshToken });
  
    if (!LoggedUser) {
      res.clearCookie("jwt", {
        httpOnly: true,
        sameSite: "Lax", // none when using https
        //secure: true uncomments this when ussing https
      });
      // if database refresh token expire it will also delete the cookies access token
      return res.sendStatus(204);
    }
  
    // deleteing the rt from the database
    LoggedUser.refreshToken = "";
  
    const result = await LoggedUser.save();
  
    console.log(result);
  
    // and confirming the removal of acces token
    res.clearCookie("jwt", {
      httpOnly: true,
      sameSite: "Lax",
      //secure:true use it when in
    });
    //succes stauts
    res.sendStatus(204);
  };
  

  module.exports = memberHandleLogout