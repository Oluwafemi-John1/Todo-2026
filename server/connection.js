const mongoose = require('mongoose')
const URI = process.env.mongo_uri;

mongoose.connect(URI, {dbName: 'todo2026'})
.then(()=>{
    console.log('db connected');
})
.catch((err)=>{
    console.log(`error connecting to DB, ${err}`);
    
})