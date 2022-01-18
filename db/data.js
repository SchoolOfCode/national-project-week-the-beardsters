// import { database } from "pg/lib/defaults"

const challenges = [
    {
        "id": 1,
        "type": "Frontend",
        "name": "Capitalise text",
        "description": "Given an array of words, what would you use to capitalise the first letter of each word?",
        "body": "function (arr){return arr.map(e => e[0].BLANK() + e.slice(1))};",
        "language": "JavaScript",
    },
    {
       "id": 2,
       "type": "Backend",
       "name": "Listen to a port",
       "description": "Given a Node.JS file, complete the function to make Node listen to a port",
       "body": "app.BLANK(PORT, () => {console.log(`Server listening on ${PORT}`);});",
       "language": "JavaScript"
    }
]

const answers = [
    {
        "id": 1,
        "answer": "toUpperCase",
        "hint": "Google is your friend."
    },
    {
        "id": 2,
        "answer": "listen",
        "hint": "When somebody talks, you...?"
    }
]

export { challenges, answers }