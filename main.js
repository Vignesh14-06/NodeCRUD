import express from "express"
import router from "./routes/movies.js"
import connectDb from "./lib/db.js"

const app = express()
const PORT = 3003
connectDb()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.json({msg:"Hello Students!!!"})
})

app.use('/movies',router)



app.listen(PORT,()=>{
    console.log(`This Server is running at http://localhost:${PORT}`)
})