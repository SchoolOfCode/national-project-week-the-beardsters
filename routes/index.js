import express from "express";
const router = express.router();

import { getChallenge, getChallengesByType } from "../models/index";

//GET RANDOM CHALLENGE

router.get("/", async (req, res) => {
  const title = req.query.title;
});
