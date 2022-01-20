import query from "../db/index.js";

export async function getChallenge() {
  const randomChallenge = Math.floor(Math.random() * 2) + 1;
  console.log(randomChallenge);
  const challengesData = await query(
<<<<<<< HEAD
    `SELECT * FROM challenges, answers WHERE challenges.id = $1 AND answers.id = $1;`,
=======
    `SELECT * FROM challenges JOIN answers on challenges.id = answers.id WHERE challenges.id = $1;`,
>>>>>>> 8b49316cacaa049ebd0c3b93f715cb138be91f2f
    [randomChallenge]
  );
  return challengesData.rows;
}

export async function getChallengesByType(type) {
  const challengesType = await query(
    `SELECT * FROM challenges JOIN answers on challenges.id = answers.id WHERE type LIKE '%'|| $1 || '%'`,
    [type]
  );
  return challengesType.rows;
}
