import express from "express";
import bodyParser from "body-parser";

const app=express();
const port=3000;
// app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static("public"));

var currentPage='';

app.get("/",(req,res)=>{
  currentPage='home';
  res.render("home.ejs",{currentPage});
});

app.get("/home",(req,res)=>{
  currentPage='home';
    res.render("home.ejs",{currentPage});
});
app.get("/contact",(req,res)=>{
  currentPage="contact";
  res.render("contact.ejs",{currentPage});
});
app.get("/project",(req,res)=>{
  currentPage="project";
  res.render("project.ejs",{currentPage});
});
app.get("/skill",(req,res)=>{
  currentPage="skill";
  res.render("skill.ejs",{currentPage});
});

app.post('/submit', (req, res) => {
  const { name, email, mobile, message } = req.body;
  // Here, you can process the submitted data (e.g., save to database)
  console.log(`Received form submission: Name - ${name}, Email - ${email}, Mobile - ${mobile}, Message - ${message}`);
  // Send a response with a custom message
  res.send('Data saved successfully! Thank you for contacting us.');
});


app.listen(port,()=>{
    console.log("app is listening at port : "+port);
})