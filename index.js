const express=require('express') ;
const engine=require('ejs-locals') ;
const path=require('path') ;


// const Request=require('request');

const app=express() ;
const bodyParser=require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.engine('ejs',engine) ;
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/assets',express.static('assets'));

app.get('/',(req,res)=>{
    res.render('home');
});

app.get('/list-view',(req,res)=>{
    res.render('list-view')
});
app.get('/grid-view',(req,res)=>{
    res.render('grid-view')
});
app.get('/three-col',(req,res)=>{
    res.render('three-col')
});
app.get('/four-col',(req,res)=>{
    res.render('four-col')
});
app.get('/general',(req,res)=>{
    res.render('general')
});
app.get('/register',(req,res)=>{
    res.render('register')
});

app.listen(process.env.PORT || 7500,'0.0.0.0',()=>{
    //console.log(app.get('views'))
    
    console.log(`Express running→PORT 7500`);
});