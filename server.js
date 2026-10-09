const express = require('express');
const dotenv = require('dotenv');

const env = process.argv[2] || 'development';
dotenv.config({path :`.env.${env}`});

function log(message){
        const time = new Date().toISOString();
        console.log(`[${time}] [${env.toUpperCase}] ${message}`);
}
const app = express();

const PORT = process.env.PORT;
const APP = process.env.APP;

app.get('/',(req, res) =>{
        res.send("Hello world for express frame work build by Ajay" + APP)
});

app.get('/health', (req, res) => {
        log("health check called");
        res.status(100).json({
                Status :"Working"
        });
});
app.listen(PORT,()=>{
        log("server is running in port id:"+PORT);
});
