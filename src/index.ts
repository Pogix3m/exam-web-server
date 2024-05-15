import express, { Express, Request, Response } from "express";

const app: Express = express();
const PORT: number = 3000;

let count: number = 0;

app.use(express.static("public"));
app.use(express.json());

// Route to serve the main page
app.get("/", (req: Request, res: Response) => {
    res.sendFile(__dirname + "/public/index.html");
});

// Route to get the current count
app.get("/count", (req: Request, res: Response) => {
    res.json({ count });
});

// Route to increment the count
app.post("/increment", (req: Request, res: Response) => {
    const increment: number = req.body.increment;
    if (typeof increment !== "number") {
        res.status(400).json({ error: "Invalid body, expected a number" });
        return;
    }
    count += increment;
    res.json({ newCount: count });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
