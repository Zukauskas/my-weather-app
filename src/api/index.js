import express from "express";

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/login", async (req, res) => {
    try {
        res.status(200).send({ message: "good" });
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

app.listen(3002, () => console.log("Server is listening on port 3002"));
