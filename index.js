"use strict";
const express = require("express");
const app = express();
const port = 3007;
app.use(express.json());
const authUsers = {
    username: "infotrack",
    password: "hiring",
};
app.get("/api", (req, res) => {
    res.send(`welcome to infotrack, you can hit /titles if you include the following headers: ${JSON.stringify(authUsers, null, 2)}`);
});
app.post("/titles", (req, res) => {
    if (req.headers.username !== authUsers.username ||
        req.headers.password !== authUsers.password) {
        res.status(401).send("Unauthorised, Incorrect headers");
    }
    else if (!req.body.titleReference || !req.body.matter) {
        res
            .status(500)
            .send({ error: "Title reference and matter are required", body: req.body });
    }
    else {
        res.status(200).json({
            "lot/plan": req.body.titleReference,
            firstOwner: "Government Prop",
            LGA: "Sydney",
            Price: "26.40",
            matter: req.body.matter,
        });
    }
});
app.get("/error", (req, res) => {
    return res.status(400).send({ error: "Force error" });
});
app.listen(port, () => {
    console.log(`running on port ${port}`);
});
