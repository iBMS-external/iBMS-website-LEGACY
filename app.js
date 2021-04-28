var express     = require("express"),
    bodyParser  = require("body-parser"),
    cmd         = require('node-cmd'),
    fs          = require('fs'),
    app         = express();
    
    

//app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(require("express-session")({
    secret : "A KDM original design",
    resave: false,
    saveUninitialized: false
    
}));

var files = [];
var newsletters = [];
var special;

// Reading in text file
var text;
//console.log(process.cwd());
//text = fs.readFileSync(process.cwd()+'/form.txt');
fs.readFile(process.cwd()+'/form.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   text = data.toString();
});

// render the files to be downloaded on admin and social page
var arrayOfFiles = fs.readdirSync(process.cwd() + "/public/Meeting-Minutes");
arrayOfFiles.forEach( function (file) {
    files.push(file);
});

var arrayOfFiles2 = fs.readdirSync(process.cwd() + "/public/Newsletters");
arrayOfFiles2.forEach( function (file) {
    newsletters.push(file);
});

app.get("/", function(req, res){
    res.render("index");
});
app.get("/student-life", function(req, res){
    res.render("studentlife", {newsletters:newsletters});
});

app.get("/administration", function(req, res){
    //console.log(files.length);
    res.render("administration",{files:files,num:files.length});
});
app.get("/meet", function(req, res){
    res.render("meet");
});
app.get("/events", function(req, res){
    res.render("events");
});
app.get("/contact", function(req, res){
    res.render("contact");
});
app.post("/contact", function(req, res){
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var message = req.body.message;
    
    var print = name + '\n' + phone + '\n' + email + '\n' + message + '\n' + '\t--- END OF FORM ---\n\n';
    var command = 'echo "'+print+'" >> form.txt' ;
    cmd.run(command);
    
    res.redirect('/contact');
    
});


// Special route
// app.get("/form-page/"+special, function(req, res){
//     res.render("form",{text:text});
// });

app.get("/form-results", function(req, res){
   res.render("form-pre"); 
});

app.post("/form-results", function(req, res){
   var usr = req.body.usr;
   var pswd = req.body.pswd;
   special = Math.floor(Math.random()*1000000000000000);
   
   app.get("/form-page/"+special, function(req, res){
        res.render("form",{text:text});
    });
   if (usr == "akil-vj-hamilton" && pswd == "akil-login-only"){
       text = fs.readFileSync(process.cwd()+'/form.txt');
       res.redirect("/form-page/"+special);
   } else {
       res.redirect("/");
   }
});


app.listen(process.env.PORT || 3000, process.env.IP, function(){
   console.log("iBiomed Society Website is being served!");
});