require('dotenv').config();

const express =require('express');
const http = require('http');
const helmet = require('helmet');
const compression =require('compression');
const {v4: uuidv4} = require('uuid');

const PORT =process.env.HTTP_PORT;
const IP =process.env.IP;

const cors = require('cors');
const app = express();
app.use(cors());
//app.use(helmet());

/*app.use(
    helmet({
        contentSecurityPolicy: {
            directives: {
                defaultSrc: ["'self'"],
                scriptSrc: ["'self'", "https://maps.googleapis.com", "https://www.google.com", "https://www.gstatic.com"],
                connectSrc: ["'self'", "https://some-domain.com", "https://some.other.domain.com"],
                styleSrc: ["'self'", "fonts.googleapis.com", "'unsafe-inline'"],
                fontSrc: ["'self'", "fonts.gstatic.com"],
                imgSrc: ["'self'", "https://maps.gstatic.com", "https://maps.googleapis.com", "data:", "https://another-domain.com"],
                frameSrc: ["'self'", "https://www.google.com"]
            }
        },
    })
);*/












app.use(compression());
app.use(express.static("public"));


const serverhttp = http.createServer(app);

serverhttp.listen(PORT,IP,()=>{
    console.log(`server iniciado en el puerto ${PORT}`);
});

app.get('/',(req,res)=>{
    res.status(200).send(`Hola Mundo en el puerto ${PORT}`);
})


app.get('/api/getuuid',(req,res)=>{
    res.send(uuidv4());
})

app.get('*',(req,res)=>{
    res.status(404).send('Error 404- recurso no encontrado');
})


