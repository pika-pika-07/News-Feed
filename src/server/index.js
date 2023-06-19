const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require("body-parser");
const cors = require("cors");
//const fetch = require("node-fetch");

const apiKey = process.env.API_KEY
console.log("AAAAAPIIII<",apiKey)
const app = express()

app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


console.log(__dirname)

app.get('/', function (req, res) {
   res.sendFile('dist/index.html')
   //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.post('/submit1', postAPIData)

async function postAPIData(request,response) {

    const formdata = new FormData();
    formdata.append("key", apiKey);
    formdata.append("txt", "YOUR TEXT HERE");
    formdata.append("lang", "auto");
    
    
    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };
    
    const formData = request.body.formText

    let url = `https://api.meaningcloud.com/sentiment-2.1`;
    const api_data = await fetch(url,requestOptions);
  
    try {
      const api_data_json = await api_data.json();
     
      response.send(api_data_json)
      
    } catch (error) {
     console.log("There has been an error, try again!", error);
    }
  }
  
