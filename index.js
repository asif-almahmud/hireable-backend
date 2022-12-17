require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const profileRoutes = require("./routes/profile");
const sectorRoutes = require("./routes/sector");

//-> express app
const app = express();

const corsOptions = {
  origin: ["http://localhost:3000"],
  optionsSuccessStatus: 200,
  credentials: true,
};

//-> enable cors
app.use(cors(corsOptions));

//-> setting the PORT
const PORT = process.env.PORT || 4000; // if the place we would deploy it would have a PORT number saved in the environment variables then it would grab that, otherwise we're going to run it here locally at PORT 4000

//-> middlewares
app.use(express.json());

//-> observe requested path and  methods
app.use((req, res, next) => {
  console.log(
    `requested path: "${req.path}", requested method: "${req.method}"`
  );
  next();
});

//-> registering the routes to our main app
app.use("/api/user", userRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/sector", sectorRoutes);

//-> connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to db");
    //-> listen for requests
    app.listen(PORT, () => {
      console.log("listening on port", PORT || 4000);
    });
  })
  .catch((error) => {
    console.log(error);
  });
