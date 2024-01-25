let express = require("express")
let app = express()
let cors = require("cors")
let bodyParser = require("body-parser")
const mongoose = require("mongoose")
const { Schema } = require("mongoose")
app.use(cors())
app.use(bodyParser.json())
require('dotenv').config()
let port = process.env.PORT
app.use(express.json())

// Schemas
const MealsSchema = new Schema({
    name: String,
    price: Number,
    description: String,  
});
const Meals = mongoose.model("Meals",MealsSchema)

app.get("/api/meals",async(req,res)=>{
    let meals = await Meals.find()
    if(Meals.length>0){
        res.send(meals)
    }else{
        res.send("Data not found")
    }
})

app.get("/api/meals/:id",async(req,res)=>{
    let { id } = req.params
    let findedMeal = await Meals.findById(id)
    if(findedMeal){
        res.send(findedMeal)
    }else{
        res.send("Data not found")
    }
  })
  app.delete("/api/meals/:id",async(req,res)=>{
    let { id } = req.params
    let deletedMeal = await Meals.findByIdAndDelete(id)
    if(deletedMeal){
        res.send(deletedMeal)
    }else{
        res.send("Data not found")
    }
  })
  app.post("/api/meals",async(req,res)=>{
    let { name, price, description } = req.body
    let newData={}
    if(name){
        newData.name=name
    }
    if(price){
        newData.price=price
    }
    if(description){
        newData.description=description
    }
    let newMeal = new Meals(newData)
 
    let savedMeal = await newMeal.save()
    res.send(savedMeal)
 
  })
 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

mongoose.connect(process.env.DB_CONNECTION_KEY.replace("Aa1234",process.env.DB_PASSWORD))
.then(() => console.log('Connected!'));