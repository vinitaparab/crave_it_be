const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const homeRouter = require("./routes/homeRoutes");
app.use("/", homeRouter);

app.use(cors());
app.use(bodyParser.json());

const authRoutes = require("./routes/authRoutes.js");
app.use("/auth", authRoutes);

const userRoutes = require("./routes/userRoutes.js");
app.use("/api/users", userRoutes);

const restaurantRoutes = require("./routes/restaurantRoutes.js");
app.use("/api/restaurants", restaurantRoutes);

const adminRestaurantRoutes = require("./routes/adminRestaurantRoutes.js");
app.use("/api/admin/restaurants", adminRestaurantRoutes);

const orderRoutes = require("./routes/orderRoutes.js");
app.use("/api/order", orderRoutes);

const adminOrderRoutes = require("./routes/adminOrderRoutes.js");
app.use("/api/admin/order", adminOrderRoutes);

const menuItemRoutes = require("./routes/menuItemRoutes.js");
app.use("/api/food", menuItemRoutes);

const cartRoutes=require("./routes/cartRoutes.js")
app.use("/api/cart",cartRoutes);

module.exports = { app };
