
import dotenv from "dotenv"
dotenv.config()
import { MongoClient } from "mongodb"

// const url = "mongodb+srv://soyabmohd:soyabmohd%40123@cluster0.imsh0lw.mongodb.net/?retryWrites=true&w=majority";
const url = process.env.MONGO_URI
const dbName = "node-projectnew"
export const collectionName = "todonew"
const client = new MongoClient (url)

export const connection = async () =>{
   const connect = await client.connect()
   const db = client.db(dbName)
   return db 
}