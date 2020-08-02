const express = require("express");
const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

const users = [{ id: 1, name: "Joy" }, { id: 2, name: "John" }]

app.get("/getUsers", (req, res) => {
    res.send(users);
});

app.post("/addUser", (req, res) => {
    if (req.body.name.length > 0) {
        const newUSer = {
            id: users.length + 1,
            name: req.body.name
        };
        users.push(newUSer);
        res.send(newUSer);
    } else {
        throw new Error("Please enter a valid name")
    }
})

app.put("/updateUser/:id", (req, res) => {
    const user = users.find(usr => usr.id === parseInt(req.params.id));
    if (user && req.body.name.length > 0) {
        user.name = req.body.name;
        res.send(user);
    } else {
        throw new Error("Please enter a valid name")
    }
})

app.delete("/removeUser/:id", (req, res) => {
    const user = users.find(usr => usr.id === parseInt(req.params.id));
    if (user) {
        users.splice(parseInt(req.params.id),1);
        res.send(users);
    } else {
        throw new Error("User does not exist.")
    }
})

app.listen(port, () => console.log(`App running in port: ${port}`));