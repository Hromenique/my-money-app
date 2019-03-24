import bodyParse from 'body-parser'
import express from 'express'

const port = 3003
const server = express()

server.use(bodyParse.urlencoded({extended: true}))
server.listen(port, ()=> console.log(`BACKEND is running on port ${port}!`))
