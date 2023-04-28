const express=require('express')
const hbs=require('hbs')
const path=require('path')
const app=express();

const weatherData=require('../utils/weatherData');

const port=process.env.PORT ||3000

const publicStaticPath=path.join(__dirname,'../public')

const viewPath=path.join(__dirname,'../templates/views')

const partialsPath=path.join(__dirname,'../templates/partials')

app.set('view engine','hbs');
app.set('views',viewPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicStaticPath));

app.get('',(req,res)=>{
    res.send("Hii this is weather app")
})
//localhost:3000/weather?address=kanpur
app.get('/weather',(req,res)=>{
    //res.send("This is weather end point..")
    const address=req.query.address

    weatherData(address,(result)=>{
        console.log(result);
    })
})

app.get('*',(req,res)=>{
    res.send("Page not find..")
})

app.listen(port,()=>{
    console.log("Server is up and running on port",port)
})