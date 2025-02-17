import express from "express";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import bodyParser from "body-parser";
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// const file = join(__dirname, 'db.json')
// const adapter = new JSONFile(file)
// const defaultData = { admin: [], members: [], plans: [], coaches: [] }
// const db = new Low(adapter, defaultData)
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + "/public/"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/main.html")
})

app.listen(port, () => console.log("http://localhost:" + port))