// Simple boiler plate code of express with express.js middlewares
const express = require('express')
const {createToDo, updateToDo} = require('../types')
const app = express()
const port = 3000

app.use(express.json())

app.post('/todo', async (req, res) => {
    // Validating using zod.
    const createPayload = req.body;
    const parsePayload = createToDo.safeParse(createPayload)
    if(!parsePayload.success){
        res.status(411).json({
            msg:"Wrong Input"
        })

        return
    }

    // Put in mongo db
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "To Do Created"
    })

})

app.get('/todos', async (req,res) =>{   
    const todos = await todo.find({})

    res.json({
        todos
    })
})

app.get('/completed', async (req,res)=>{
    const updatePayload = req.body;
    const parsePayload = updateToDo.safeParse(updatePayload)
    if(!parsePayload.success){
        res.status(411).json({
            msg: "Wrong input"
        })
        return;
    }
    // update in mongo db
    await todo.update({
        _id:req.body.id
    }.{
        completed:true
    })

    res.json({
        msg: "To do marked completed"
    })

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})