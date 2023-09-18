const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000; // Use the port you prefer
const cors = require("cors");
const helmet = require("helmet");

app.use(cors());
app.use(helmet());
// Middleware to parse JSON requests
app.use(express.json());

const userRouter = require("./Routes/UserRoute");
app.use("/user", userRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
