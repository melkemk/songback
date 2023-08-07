const {Router}=require('express')
const Song=require('../model/song')
const router=Router()

router.get('/',async(req,res)=>{
    const song = await Song.find()
    res.status(200).json(song)
})
router.post('/',async(req,res)=>{
    
    const {name}=req.body;
    if(!name)
    return(res.json({error:"no name"}))
   const succ= await Song.create({name:name,change:false})
   if(succ){ res.status(200).json({success:true})}
   else{
    res.status(500).json({success:false})
   }
})
router.put('/',async(req,res)=>{
console.log(req.body)
    const data = await Song.findByIdAndUpdate(req.body.id, {name:req.body.name});   
    if(data){ res.status(200).json({success:true})}
    else{
     res.status(500).json({success:false})
    }})

router.delete('/',async(req,res)=>{
    const data = await Song.findByIdAndDelete(req.body.id);   
    if(data){ res.status(200).json({success:true})}
    else{
     res.status(500).json({success:false})
    }})


module.exports=router;
