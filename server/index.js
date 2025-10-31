const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors");

// Set up Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: ["https://homify-client-test.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
}));

// Connect to MongoDB and create indexes
async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'UserInformation',
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to UserInformation database');

        // Create indexes
        await User.createIndexes();

        // Start server
        app.listen(5000, () => {
            console.log("App listening at port 5000");
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process if unable to connect to MongoDB
    }
}

// Define user schema and model
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    loginStatus: {
        type: Boolean,
        default: false,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
const User = mongoose.model('users', UserSchema);

// Call connectToDatabase function to start the application
connectToDatabase();

// Routes

// Root route
app.get("/", (req, res) => {
    res.send("App is Working");
});

// Login route
app.post("/login", async (req, res) => {
    try {
        const { name, password } = req.body;
        const user = await User.findOne({ name: name });
        if (user) {
            if (user.password === password) {
                res.json("Success");
            } else {
                res.json("The password is incorrect");
            }
        } else {
            res.json("No record existed");
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Something Went Wrong");
    }
});

// Register route
app.post("/register", async (req, res) => {
    try {
        const user = new User(req.body);
        const result = await user.save();
        res.json(result);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Something Went Wrong");
    }
});
