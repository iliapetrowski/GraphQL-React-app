const express = require('express')
const graphqlHTTP = require('express-graphql').graphqlHTTP;


const app = express()
const PORT = 3005

app.use('/graphql', graphqlHTTP({}));

app.listen(PORT, err => {
    err ? console.log(error) : console.log('Server started!')
})
