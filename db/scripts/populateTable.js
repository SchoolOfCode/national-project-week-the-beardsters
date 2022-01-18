import query from "../index.js";
import {challenges, answers} from "../data.js";

export async function populateChallengesTable() {
    challenges.forEach(async (challenge) => {
        const id = challenge.id;
        const type = challenge.type;
        const name = challenge.name;
        const description = challenge.description;
        const body = challenge.body;
        const language = challenge.language;
        const sqlQuery = `INSERT INTO challenges (type, name, description, body, language) VALUES ($1, $2, $3, $4, $5)`;
        const res = await query(sqlQuery, [type, name, description, body, language])
        console.log(res);
        return res;
    })
}

// populateChallengesTable()

export async function populateAnswersTable() {
    answers.forEach(async (solution) => {
        const challengeAnswer = solution.answer;
        const hint = solution.hint;
        const sqlQuery = `INSERT INTO answers (answer, hint) VALUES ($1, $2)`;
        const res = await query(sqlQuery, [challengeAnswer, hint])
        console.log(res);
        return res;
    })
}

// populateAnswersTable();





// async function insertScores() {
//     for (let i = 0; i < scores.length; i++) {
//         const gameName = scores[i].gameName;
//         const score = scores[i].score;
//         const date = scores[i].date;
//         const newQuery = `INSERT INTO score (game_name, score, date) VALUES ($1, $2, $3)`;
//         const queryCall = await query(newQuery, [gameName, score, date]);
//         console.log(queryCall.rows);
//     }
// }
