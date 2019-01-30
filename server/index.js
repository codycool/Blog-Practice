import Express from 'express'
import bodyParser from 'body-parser'
import Config from './config'
//import './config/database'
//import Tag from './models/tags'
import expressJwt from 'express-jwt'
import rootRouter from './router';

const app = new Express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(expressJwt({
  secret: Config.jwt.jwtSecret,
}).unless({
  path: [
    "/v1/auth/signin", 
    "/v1/auth/signup",
    "/v1/articles/getArticles",
    "/v1/articles/getArticleDetail",
    ]
}));

app.use('/v1',rootRouter);
/*
app.use('/v1/signin',function(req,res){
    //const { userName, password } = res.body;
    console.log(req.body.userName);
    console.log(req.body.password);
    //const tag = new Tag({tag: 'react'});
    //await tag.save();
    const response = {
        auth: {
            token: 'aaaa',
        },
        message: 'Signin error',
        title: 'error',
        type: 1,
    }

    res.status(200).json(response);
});
*/
app.listen(Config.port,() => {
    console.log('listen on port 3001');
})