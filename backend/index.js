import e from "express";
import { collectionName, connection } from "./dbconfig.js";
import cors from 'cors'
import { ObjectId } from "mongodb";

const app = e();

app.use(e.json())
app.use(cors())

app.post("/add-task", async (req, res) =>{
    const db = await connection()
    const collection = db.collection(collectionName)
    const result = await collection.insertOne(req.body)
    if(result){
        res.send({message: "new task added", success: true, result})
    }else{
        res.send({message: "new task not added", success: false})
    }
})

app.get("/get-tasks", async (req, res) =>{
    const db = await connection()
    const collection = db.collection(collectionName)
    let result = await collection.find().toArray()
    if(result){
        res.send({message: "task list fetched", success: true, result})
    }else{
        res.send({message: "error are occure try again", success: false,})
    }
   
})

 app.delete("/delete/:id", async (req, res) =>{
    const id = req.params.id
    const db = await connection()
    const collection = db.collection(collectionName)
    let result = await collection.deleteOne({_id:  new ObjectId(id)})
    if(result){
        res.send({message: "item is deleted", success: true, result})
    }else{
        res.send({message: "item is not deleted"})
    }

 })












app.listen(3200);
  