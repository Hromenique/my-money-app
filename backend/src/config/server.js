import bodyParse from 'body-parser'
import express from 'express'
import allowCors from './cors'
import queryParser from 'express-query-int'

const port = 3003
const server = express()

server.use(bodyParse.urlencoded({ extended: true }))
server.use(bodyParse.json())
server.use(allowCors)
server.use(queryParser())

server.listen(port, () => console.log(`BACKEND is running on port ${port}!`))

export default server