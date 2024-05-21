const express = require('express');
const PORT = process.env.PORT || 3001;
const functions = require('firebase-functions');
//
const app = express();
//const response = await apiRequest();
//app.use(require('body-parser').urlencoded({ extended: false }));
let requestParams = [];

app.post("/api/:race/:gender/:total", (req, res) =>  {
    console.log("entering app.post")
    requestParams.push(req.params.race);
    requestParams.push(req.params.gender);
    requestParams.push(req.params.total);
    //const names = fetch("https://names.ironarachne.com/race/elf/female/10")
    apiRequest(res);

     //console.log(response);
    
     //console.log(result);
     //apiRequest();
});
async function apiRequest(res) {
    console.log(requestParams);
    await axios.get('https://names.ironarachne.com/race/'
    +requestParams[0]+'/'+requestParams[1]+'/'+requestParams[2])
    .then(response => {
        //console.log(response.data.names)
        //console.log(response.data.names);
        res.json({message: response.data.names})
        })
        //console.log(data);
        //console.log(result);
        
    } 
//exports.app = functions.https.onRequest(app);
export const api = functions.https.onRequest(app);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
