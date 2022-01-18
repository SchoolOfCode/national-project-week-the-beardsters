// server/index.js

import { getChallenge, getChallengesByType } from "../models/index.js";
import express from "express";
const router = express.Router();

const PORT = process.env.PORT || 3001;

const app = express();


app.get("/", async (req, res) => {
  const randomChallenge = await getChallenge();
  res.json({
    success: true,
    message: "Random challenge found",
    payload: randomChallenge,
  });
});

//GET CHALLENGE BY TYPE

app.get("/:type", async (req, res) => {
  // let {type} = req.params.type;
  let name;
  name = `${req.params.type[0].toUpperCase()}${req.params.type.slice(1)}`
  console.log(name);
  
  const requestedChallenge = await getChallengesByType(name);

  res.json({
    success: true,
    message: `Challenge found ${name}`,
    payload:  requestedChallenge,
  });
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});