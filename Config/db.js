import mongoose from "mongoose";

let cached=global.mongoose

if (!cached){
    cached=global.mongoose = { conn: null, Promise: null }
}
async function connoctDB() {

    if (cached.conn){
        return cached.conn
}
if (!cached.Promise){
     const opts={
        bufferCommands:fulse
     }
     cached.Promise = mongoose.connect(`${process.env.MONGODB_URI}/quickcart`,opts).then (mongoose=>{return mongoose})
  }
  cached.cann=await cached.Promise
  return cached.conn

} 
    export default connoctDB
