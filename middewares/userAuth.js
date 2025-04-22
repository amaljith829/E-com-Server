const jwt=require('jsonwebtoken');

const authenticateToken=(req,res,next)=>{

    const authHeader=req.headers.authorization;
    const token=authHeader && authHeader.split(' ')[1];

    if(!token){
        return res.status(401).json({message:'Token not found'});
    } 
    try{
        const verfiedUser=jwt.verify(token,process.env.SECRET_KEY);
        req.user=verfiedUser;
        next();
    }catch(error){
        res.status(403).json({message:'Token is not valid'});
    }
} 

module.exports=authenticateToken;
