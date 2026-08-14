const app = require("./src/app");
const connectDB = require("./src/config/db");

// Solving the DNS issue
const dns = require("dns").promises;
dns.setServers(["1.1.1.1", "8.8.8.8"]);

// Connecting to the database
connectDB();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});