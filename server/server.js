const express=require('express')
const mongoose=require('mongoose')
const cookieParser=require('cookie-parser')
const cors=require('cors')

const authRouter=require("./routes/auth/auth-route")
mongoose.connect('mongodb+srv://sumanrout824:<password>@cluster0.hcdidj4.mongodb.net/'

).then(()=>console.log("Mongodb connected")).catch((error)=>console.log(error))

const app=express()
const PORT=process.env.PORT ||5000
app.use(
    cors({
        origin:'http://localhost:5173/',
        method:['GET','POST','DELETE','PUT'],
        allowedHeaders:[
            "Content-Type",
            'Authorization',
            'Cache-Control',
            'Expires',
            'pragma'
        ],
        credentials:true
    })
)
app.use(cookieParser());
app.use(express.json());
app.use('/api/auth',authRouter)
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))
