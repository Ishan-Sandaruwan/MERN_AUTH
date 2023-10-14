import express from "express";

const port = 3090;

const app = express();

app.listen(port, () => {
    console.log(`server is running on port ${port} `);
  });