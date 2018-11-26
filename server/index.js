import Express from 'express'
import bodyParser from 'body-parser'
import Config from './config'
import './config/database'
import Tag from './models/tags'

const app = new Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',function(req,res){
    //console.log('hello');
    //const tag = new Tag({tag: 'react'});
    //await tag.save();
    res.json({a:'hello'});
});

app.listen(Config.port,() => {
    console.log('listen on port 3000');
})