const express=require('express');
const app=express();
const bodyParser=require('body-parser');
// const mongoose=require('mongoose');
const path=require('path');
// const session=require('express-session');

const port=process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use('/static',express.static(path.join(__dirname,'public')));
app.use('/assets',express.static(path.join(__dirname,'public/assets')));

//home route
app.get('/',(req,res)=>{
    res.render('base',{title:"Login System"});
}
);

app.listen(port,()=>{
    console.log(`listening on server on http://localhost:${port}`);
});


