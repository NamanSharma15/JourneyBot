import connecttomongo from "@/db/db"
import { Dest } from "../../db/Dest"
export default async function handler(req, res) {
  await connecttomongo()
  const {method} = req
  if(method=="POST"){
    try {
      const cords = new Dest(req.body)
      const save = await cords.save()
      res.status(201).json({success:"True" ,data:save})
    } catch (error) {
       res.status(400).json({success:"False"})
    }
  }
  else if(method=='GET'){
    try{
      const data = await Dest.find()
      console.log(data.slice(-1)[0])
      res.json({data:data.slice(-1)[0]})
    }
    catch(err){
      res.json({error:err})
    }
  }
}
