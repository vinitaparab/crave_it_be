const Router = require("express");
const router=Router();

router.get("",async(req,res)=>{
    res.status(200).send({message:"Welcome to Online Food Ordering Website !"});
})

module.exports=router;