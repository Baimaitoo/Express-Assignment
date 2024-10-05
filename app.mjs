import express from "express";
import req from "express/lib/request";

const app = express();
const port = 4000;

app.get("test", (req, res) => {
    return res.json( "Server API is working");
}) ;


app.post("/posts", (req, res) => {
    // ลอจิกในการเก็บข้อมูลของโพสต์ลงในฐานข้อมูล
return res.status(201).json({
    message: "Created post successfully",
});
});
app.listen(port, () =>{
    console.log(`Server is running at ${port}`);

});