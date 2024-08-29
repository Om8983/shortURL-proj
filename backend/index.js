const express = require('express');
const cors = require('cors')
const {router } = require('./routes')
const PORT = 3000;

const app = express();


// to parse json data
app.use(express.json())

//avoiding cors err
app.use(cors())

app.use("/urlShortner", router)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    
})