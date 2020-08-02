const express = require('express');
const fs = require('fs');
const bodyParses = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

const JSONSchema = require('./MockData/InstallationJSONSchema.json');
const UISchema = require('./MockData/InstallationJSONSchema.json');
const ErrorResponse = require('./MockData/ErrorResponse.json');


app.use(bodyParses.json());
app.use(bodyParses.urlencoded({ extended: true }));
app.use(cors());
app.get('/getJSONSchema', (req, res) => {
    res.send(JSONSchema)
});

app.get('/getUISchema', (req, res) => {
    res.send(UISchema);
})

app.get('/getErrorResponse', (req, res) => {
    res.send(ErrorResponse);
})

app.post('/checkEditable', (req, res) => {
    res.send({ editable: false });
})

app.listen(port, () => console.log(`App listening on port ${port}!`))