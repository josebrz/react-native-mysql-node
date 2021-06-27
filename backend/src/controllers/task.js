import {connect} from '../database'

export const getAllTask = async (req, res) =>{
    try {
        console.log(req.method)
        const connection = await connect()
        const [rows] = await connection.query(`SELECT * FROM task`);
        res.json(rows)
    }
    catch (e){
        res.sendStatus(500)
    }
}

export const getTaskById = async (req, res) =>{
    try {
        console.log(req.method)
        const {id} = req.params
        const connection = await connect()
        const [rows] = await connection.query(`SELECT * FROM task WHERE id = ${id}`);
        res.json(rows)
    }
    catch (e){
        res.sendStatus(500)
    }
}

export const getCountTask = async (req, res) =>{
    try{
        console.log(req.method)
        const connection = await connect()
        const [rows] = await connection.query(`SELECT COUNT(*) FROM task`);
        res.json({
            count: rows[0]["COUNT(*)"]
        })
    }
    catch (e){
        res.sendStatus(500)
    }
}

export const createTask = async (req, res) =>{
    try {
        console.log(req.method)
        const connection = await connect();
        await connection.query("INSERT INTO task (title, description) VALUES (?, ?)",
            [req.body.title, req.body.description]);
        res.json("Task Created")
    }
    catch (e){
        res.sendStatus(500)
    }
}

export const deleteTask = async (req, res) =>{
    try {
        console.log(req.method)
        const {id} = req.params
        const connection = await connect();
        const result = await connection.query(`DELETE FROM task WHERE id = ${id}`)
        if (result[0]['affectedRows'] >= 1) {
            res.json("Task Deleted")
        }
        res.sendStatus(404)
    }
    catch (e){
        res.sendStatus(500)
    }
}

export const updateTask = async (req, res) =>{
    try {
        console.log(req.method)
        const {id} = req.params
        const connection = await connect();
        const result = await connection.query(`UPDATE task SET ? WHERE id = ?`, [req.body, id])
        if (result[0]['affectedRows'] >= 1) {
            res.json("Task Updated").send
        }
        res.sendStatus(404)
    }
    catch (e){
        res.sendStatus(500)
    }
}
