import Express from 'express'
import bodyParser from 'body-parser'

const app = new Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',function(req,res){
    console.log('hello');
});

app.listen(3000,() => {
    console.log('listen on port 80');
})