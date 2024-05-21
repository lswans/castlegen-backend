import express from 'express';
import axios from 'axios';
const PORT = process.env.PORT || 3001;


const app = express();

let requestParams = [];

app.post("/api/:race/:gender/:total", (req, res) =>  {
    console.log("entering app.post")
    requestParams.push(req.params.race);
    requestParams.push(req.params.gender);
    requestParams.push(req.params.total);
    
    apiRequest(res);

     
});
async function apiRequest(res) {
    console.log(requestParams);
    await axios.get('https://names.ironarachne.com/race/'
    +requestParams[0]+'/'+requestParams[1]+'/'+requestParams[2])
    .then(response => {
        
        res.json({message: response.data.names})
        })
        
        
    } 

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
