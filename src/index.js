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

const cartRoutes = require("./routes/cartRoutes.js");
app.use("/api/cart", cartRoutes);

const cartItemRoutes = require("./routes/cartItemRoutes.js");
app.use("/api/cart-item", cartItemRoutes);

const categoryRoutes = require("./routes/categoryRoutes.js");
app.use("/api/category", categoryRoutes);

const adminCategoryRoutes = require("./routes/adminCategoryRoutes.js");
app.use("/api/admin/category", adminCategoryRoutes);

const adminIngredientsRoutes = require("./routes/adminIngredientsRoutes.js");
app.use("/api/adminIngredientsRoutes.js", adminIngredientsRoutes);

const eventsRoutes=require("./routes/eventRoutes.js");
app.use('/api/events',eventsRoutes);

const adminEventRoutes=require("./routes/adminEventRoutes.js");
app.use("/api/admin/events",adminEventRoutes);

module.exports = { app };
