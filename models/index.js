import query from "../index.js";

export async function getChallenge() {
  const randomChallenge = Math.floor(Math.random() * 2);
  const challengesData = await query(
    `SELECT * FROM challenges JOIN answers on challenges.id = answers.id WHERE id = $1;`[
      randomChallenge
    ]
  );
  return challengesData.rows;
}

export async function getChallengesByType(type) {
  const challengesType = await query(
    `SELECT * FROM challenges JOIN answers WHERE type ILIKE '%'|| $1 || '%'`,
    [type]
  );
  return challengesType.rows;
}
