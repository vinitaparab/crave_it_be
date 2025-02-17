const orderService = require("../services/order.service.js");
const orderStatus = require("../services/order.service.js");
const userService = require("../services/user.service.js");
const { getAllRestaurants } = require("./restaurantController");

module.exports = {
  //customer order controllers
  createOrder: async (req, res) => {
    try {
      const order = req.body;
      const user = req.user;
      if (!order) throw new Error("Please provide valid request body");
      const paymentResponse = await orderService.createOrder(order, user);
      res.status(200).json(paymentResponse);
    } catch (error) {
      if (error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  },

  getAllUserOrders: async (req, res) => {
    try {
      user = req.user;

      if (!user.id) throw new Error("User ID not found");
      const userOrders = await orderService.getUserOrders(user.id);
      res.status(200).json(userOrders);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  },

  //admin order controller
  deleteOrder: async (req, res) => {
    try {
      const { orderId } = req.params;
      await orderService.cancelOrder(orderId);
      res.status(200).json({ message: `Order deleted with ID ${orderId}` });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  },
  getAllRestaurantsOrders: async (req, res) => {
    try {
      const { restaurantId } = req.params;
      const { order_status } = req.query;
      const orders = await orderService.getOrdersOfRestaurant(
        restaurantId,
        order_status
      );
      res.status(200).json(orders);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  },
  updateOrder: async (req, res) => {
    try {
      const { orderId, order_status } = req.params;
      const order = await orderService.updateOrder(orderId, order_status);
      res.status(200).json(order);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  },
};
