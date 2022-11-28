const exp =require('express')
const routes =exp.Router()

const details=require('./Schema')


routes.get('/',async(req,res)=>{
  const data = await details.find()
    res.send(data)
})
// routes.get('/abc',(req,res)=>{
//     res.send("i have a  good boy")
// })

routes.post('/',async(req,res)=>{
  const data = await details.create(req.body)  
           console.log("Hello")
           
        res.send(data)
})

routes.put('/:name',async(req,res)=>{
    
    const data  =await details.findOneAndUpdate({task:req.params.name},{done:req.body.done})                                                                  //res.params.name
                                                                        //res.query
                                                                    // let val=data.filterPath
    res.send(data)
})

routes.delete('/:name',async(req,res)=>{
    const data =await details.findOneAndDelete({task:req.params.name})
    data=val
    res.send(data)
})
module.exports=routes;