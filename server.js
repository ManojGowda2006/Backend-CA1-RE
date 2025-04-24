const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

app.post("/login", async(req, res) => {
    const {email, password} = req.body;
    try{
        if(!email){
            return res.status(400).json({message : "Email cannot be empty"})
        }
        if(!password){
            return res.status(400).json({message : "Password cannot be empty"})
        }

        res.status(200).json({message : "Login successfull"})

    }catch(err){
        res.status(500).json({message : "Internal server error"})
    }
})

app.get("/", (req, res) => {
    res.send("Welcome")
})

app.listen(PORT, () => {
    console.log(`Server is running`)
})