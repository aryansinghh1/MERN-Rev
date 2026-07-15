const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/login", (req, res) => {
  res.send("Response login");
});

///////////////////////////////////////////////////////////////////////////////////////////////
// app.post("/login",(req,res)=>{
//     res.send({success:true,message:"logged in"});
// })

// app.get("/signup",(req,res)=>{
//     res.send("response from signup");
// })

// app.post("/signup",(req,res)=>{
//     res.status(202).json({success: true,message:"Signup complete"});
// })

///////////////////////////////////route using id//////////////////////////////////////////////////////
// const students = [
//   { id: 1, name: "tom", age: 22 },
//   { id: 2, name: "tom2", age: 24 },
//   { id: 3, name: "tom3", age: 32 },
// ];

// app.get("/student/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const student = students.find((s) => s.id === id);
//   if (student) {
//     res.json({ success: true, data: student });
//     return;
//   }
//   res.json({ success: false, data: "id not found" });
//   res.send(`Your id is ${id}`);
// });

////////////////////////////////////////route using course////////////////////////////////////////////////////
const students = [
  { id: 1, name: "tom", age: 22 ,course: "MERN" },
  { id: 2, name: "tom", age: 24,course: "cpp" },
  { id: 3, name: "harry", age: 32 ,course: "dsa"},
];

app.get("/student/course/:course", (req, res) => {
const course = req.params.course;
const student = students.find((s) => s.course === course);
res.json({ success: true, data: student });
});

app.listen(PORT, () => console.log("Server is running"));
