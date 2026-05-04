import e from "express";
import { collectionName, connection } from "./dbconfig.js";
import cors from 'cors'
import { ObjectId } from "mongodb";

const app = e();

app.use(e.json())
app.use(cors())

// add task
// data ko add krna database mein 
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

// get all tasks
// jo data add hai databse mein usko get krna / nikalna
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

// single delete
// item ko delete karna
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

//  get single item (edit ke liye)
// Edit feature edit bale item ko fetch karna
app.get("/get-item/:id", async (req, res) =>{
    const id = req.params.id
    const db = await connection()
    const collection = db.collection(collectionName)
    let result = await collection.findOne({_id: new ObjectId(id)})
    if(result){
        res.send({message: "item is fetched", success: true, result})
    } else{
        res.send({message: "item is not fetchd"})
    }
})

// update item
app.put("/edit-item/:id", async  (req, res) =>{
    const id = req.params.id
    let data = req.body
     delete data._id;
    const db = await connection()
    const collection = db.collection(collectionName)
    let result = await collection.updateOne({_id: new ObjectId(id)},   { $set: data })
    if(result){
        res.send({message: "item is updated", success: true, result})
    }else{
        res.send({message: "item is not update", success: false})
    }

})

// multiple delete
app.delete("/multiple-items", async (req, res) =>{
    const db = await connection()
    const ids = req.body
    const objectIds = ids.map((item) => new ObjectId(item))

    const collection = db.collection(collectionName)
    const result = await collection.deleteMany({_id: {$in:objectIds}})
    if(result){
        res.send({message: "task deleted", success:true, result})
    }else{
        res.send({message: "try again", success: false})
    }
}
)

app.listen(3200);
  