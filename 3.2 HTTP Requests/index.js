import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("<h2>Atiwit pattanapukdee</h2>");
});

app.get("/contact", (req, res) => {
    res.send("<h2>0870352468</h2>");
});

app.get("/about", (req, res) => {
    res.send("<h2>กะเพราหมูสับ</h2>");
});

// app.get("/", (req, res) => {
//     console.log(req.rawHeaders);
// });

app.listen(3000, () => {   //port
    console.log("Server running on port 3000"); //callback function
});
