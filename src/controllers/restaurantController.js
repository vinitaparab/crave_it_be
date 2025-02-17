const restaurantService = require("../services/RestaurantService.js")

module.exports = {
  createRestaurant: async (req, res) => {
    try {
      const user = req.user;
      const restaurant = await restaurantService.createRestaurant(
        req.body,
        user
      );
    } catch (error) {
      req.status(400).send({ error: error.mesaage });
    }
  },

  deleteRestaurantById: async (req, res) => {
    try {
      const { id } = req.params;

      const user = req.user;
      await restaurantService.deleteRestaurant(id);
      res.status(200).json({
        message: "Restaurant Deleted with id Successfully",
        success: true,
      });
    } catch (error) {
      if (error instanceof error) {
        re.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Internal server error " });
      }
    }
  },

  updateRestaurantStatus: async (req, res) => {
    try {
      const { id } = req.params;
      console.log("restaurant id", id);
      const restaurant = await restaurantService.updateRestaurantStatus(
        id.toString()
      );

      console.log("restaurant id", id);
      res.status(200).json(restaurant);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Internal server error " });
      }
    }
  },

  findRestaurantByUserId: async (req, res) => {
    try {
      const user = req.user;
      const restaurant = await restaurantService.getRestaurantByUserId(
        user._id
      );
      res.status(200).json(restaurant);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Internal server error " });
      }
    }
  },

  findRestaurantByName: async (req, res) => {
    try {
      const { keyword } = req.query;
      const restaurant = await restaurantService.searchRestaurant(keyword);
      res.status(200).json(restaurant);
    } catch (error) {
      res.status(500).json({ error: "Internal server error " });
    }
  },

  getAllRestaurants: async (req, res) => {
    try {
      const restaurant = await restaurantService.getAllRestaurants();
      res.status(200).json(restaurant);
    } catch (error) {
      res.status(500).json({ error: "Internal server error " });
    }
  },

  findRestaurantById: async (req, res) => {
    try {
      const { id } = req.params;
      const restaurant = await restaurantService.findRestaurantById(id);
      res.status(200).json(restaurant);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Internal server error " });
      }
    }
  },

  addToFavourite: async (req, res) => {
    try {
      const { id } = req.params;
      const user = req.user;
      const restaurant = await restaurantService.addToFavourite(id, user);
      res.status(200).json(restaurant);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Internal server error " });
      }
    }
  },
};
