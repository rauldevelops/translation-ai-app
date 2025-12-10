import OpenAI from "openai";
import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config(); // Load environment variables from .env
console.log("OPENAI_API_KEY:", process.env.OPENAI_API_KEY);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Serve static files from the root directory
app.use(express.static(__dirname));

// Pass the API key from the environment variable
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.post("/submit", async (req, res) => {
    const formDataObj = req.body; // Get form data from the request body
    console.log(formDataObj);

    // Example: Respond with the received data
    res.json({ message: "Form data received", data: formDataObj });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});