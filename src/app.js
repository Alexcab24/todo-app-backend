import express from 'express';



const app = express();
const PORT = process.env.PORT ?? 1234


app.get('/', (req, res) => {
    res.send('Hola mundo')
})


app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
})