const http = require("http")
const url = require("url")
const fs = require("fs")

const port = 3000;

const server = http.createServer(function(req, res){
    const parsedURL = url.parse(req.url, true);
    console.log(parsedURL);
    res.setHeader("Content-Type","text/html");
    switch(parsedURL.pathname){
        case "/index.html":{
            const data = fs.readFileSync("./index.html",{encoding: "utf8"});
            res.write(data)
        }
        break;
        case "/style.css":{
            res.setHeader("content-type", "text/css")
            const data = fs.readFileSync("./style.css" , {encoding :"utf8"})
            res.write(data)
        }
        case "/reg.html":{
            const data = fs.readFileSync("./reg.html",{encoding: "utf8"});
            res.write(data)
        }
        break;
        case "/reg.css":{
            res.setHeader("content-type", "text/css")
            const data = fs.readFileSync("./reg.css" , {encoding :"utf8"})
            res.write(data)
        }


    }
    res.end();
});


server.listen(port, error => {
if(error){
    return console.log(error);
    
}
console.log(`Server is started on port ${port}`);
});
