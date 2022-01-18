import query from "../index.js";

export async function readChallengesTable() {
    const sqlQuery = `SELECT * FROM challenges`;
    const res = await query(sqlQuery);
    console.log(res);
    return res
}

readChallengesTable();

export async function readAnswersTable() {
    const sqlQuery = `SELECT * FROM answers`;
    const res = await query(sqlQuery);
    console.log(res);
    return res;
}

readAnswersTable()