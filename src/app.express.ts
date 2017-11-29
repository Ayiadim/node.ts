import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as expressValidator from  'express-validator'
import { config } from "./services/config.service"
const app = express();

// Routes - You can put this in it's own file if it gets too large
const routes = (router) => [
    { url : '',       route : 'index/index.route' }
]
.reduce((router,route) => router.use(route.url, require("./routes/" + route.route).router), router)


app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/node_modules', express.static(__dirname + '/node_modules/'));

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Headers", config.http.headers.allow);
    res.header("Access-Control-Expose-Headers", config.http.headers.expose);
    res.header("Access-Control-Allow-Origin", config.http.headers.origin);
    res.header('Access-Control-Allow-Methods',  config.http.headers.methods);    
    'OPTIONS' == req.method ? res.send(200) : next()
});




app.use(routes(express.Router()))

export { app };
