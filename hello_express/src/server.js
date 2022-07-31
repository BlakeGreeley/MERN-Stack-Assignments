const express = require("express");
const app = express();
const port = 8000;

app.get("/api", (req, res) => {
    res.json({ message: "Hello World"});
});

const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];
// getting data
app.get("/api/users", (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.json({ status: "ok" });
});

// getting by id
app.get("/api/users/:id", (req, res) => {
    console.log(req.params.id);
    res.json( users[req.params.id] );
});

//updating data
app.put("/api/users/:id", (req, res) => {
    const id = req.params.id;
    users[id] = req.body;
    res.json( {status: "ok" });
});

//deleting data
app.delete("/api/users/:id", (req, res) => {
    const id = req.params.id;
    users.splice(id, 1);
    res.json( { status: 'ok' });
});

app.listen(port, () => console.log('Listening on port: ${port}'));

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );