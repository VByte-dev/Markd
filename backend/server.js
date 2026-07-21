const express = require("express");

const app = express();

app.get("/", (req, res)=>{
  res.send("hello visitor!");
})

app.listen(3000, () => {
  console.log("Server started...");
});