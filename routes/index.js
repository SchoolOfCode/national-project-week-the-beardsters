import express from "express";
const router = express.router();

import { getChallenge, getChallengesByType } from "../models/index";

//GET RANDOM CHALLENGE

router.get("/", async (req, res) => {
  const randomChallenge = await getChallenge();
  res.json({
    success: true,
    message: "Random challenge found",
    payload: randomChallenge,
  });
});

//GET CHALLENGE BY TYPE

router.get("/:type", async (req, res) => {
  const { type } = req.params.type;
  const requestedChallenge = await getChallengesByType(type);
  res.json({
    success: true,
    message: `Challenge found ${type}`,
    payload: requestedChallenge,
  });
});
