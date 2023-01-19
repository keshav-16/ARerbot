var serverPort = process.env.PORT || 3000,
    express = require('express'),
    multer = require('multer'),
    upload = null,
    storage = null,
    app = express();

//overwrite the storage variable
storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'static/');
    },
    filename: (req, file, cb) => {
        //call the callback, passing it the original file name
        cb(null, 'hi.glb');
    }
});

//overwrite the upload variable
upload = multer({storage});

//set the static folder
app.use(express.static('static'));
app.get("../model/index.html", (req, res) => {
   
    res.sendFile(path.join(__dirname, "model/index.html/"));
});
app.get("ar.html", (req, res) => {
   
    res.sendFile(path.join(__dirname, "ar.html/"));
});
//add a handler for the POST / route
app.post('/', upload.single('img'), (req, res) => {
    //for demonstration purposes only:
    console.log(req.file);

    //send a response to the client
    res.sendFile('./static/app.html', {root: __dirname });
});

//start the web server
app.listen(serverPort, () => {
    console.log('server running on http://localhost:' + serverPort);
});