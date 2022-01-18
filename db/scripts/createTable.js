import query from "../index.js"


export async function createChallengesTable() {
 const sqlString = `CREATE TABLE IF NOT EXISTS challenges (id SERIAL PRIMARY KEY, type TEXT, name TEXT, description TEXT, body TEXT, language TEXT)`;
 const res = await query(sqlString);
 console.log(res);
    return res;
}

createChallengesTable();

export async function createAnswersTable() {
    const sqlString = `CREATE TABLE IF NOT EXISTS answers (id SERIAL PRIMARY KEY, answer TEXT, hint TEXT)`;
    const res = await query(sqlString);
    console.log(res);
    return res;
}

createAnswersTable();