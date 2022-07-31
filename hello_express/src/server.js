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

app.get("/api/users", (req, res) => {
    res.json({ users });
});

app.listen(port, () => console.log('Listening on port: ${port}'));