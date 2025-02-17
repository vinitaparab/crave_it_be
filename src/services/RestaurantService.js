const Restaurant = require("../models/restaurant.model");

module.exports = {
  async createRestaurant(req, user) {
    try {
      const address = new address({
        city: req.address.city,
        country: req.address.country,
        fullName: req.address.fullName,
        postalCode: req.address.postalCode,
        state: req.address.state,
        streetAdress: req.address.streetAddress,
      });

      const saveAddress = await address.save();

      const restaurant = new restaurant({
        address: saveAddress,
        contactInformation: req.contatctInformation,
        cuisineType: req.cuisineType,
        description: req.images,
        images: req.images,
        name: req.name,
        openingHours: req.openingHours,
        registrationDate: req.registrationDate,
        owner: user,
      });

      const savedRestaurant = await restaurant.save();
      return savedRestaurant;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async findRestaurantById(restaurantId) {
    try {
      const restaurant = await resaturant.findById(restaurantId);
      if (!restauarant) throw new Error("restaurant not found");
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async deleteRestaurant(restaurantId) {
    try {
      this.findRestaurant.ById(restaurantId);
      const restaurant = await Restaurant.deleteById(restaurantId);
    } catch (error) {}
  },

  async getAllRestaurants() {
    try {
      const restaurants = await Restaurant.find();
      return restaurants;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async getRestaurantByUserId(userId) {
    try {
      const restauarant = await Restaurant.findOne({ owner: userid })
        .populate("owner")
        .populate("address");

      if (!restauarant) {
        throw new Error("restaurant not found!");
      }
      return restauarant;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async searchRestaurant(keyword) {
    try {
      const restauarants = await Restaurant.find({
        $or: [
          {
            name: { $regex: keyword, $options: "i" },
            description: { $regex: keyword, $options: "i" },
            cuisineType: { $regex: keyword, $options: "i" },
          },
        ],
      });
      return restauarants;
    } catch (error) {}
  },

  async addToFavourite(restauarantId, user) {
    try {
      const restauarant = this.findRestaurantById(restauarantId);
      const dto = {
        _id: restauarant._id,
        tittle: restauarant.name,
        images: restauarant.images,
        description: restauarant.description,
      };
      const favourites = user.favourites || [];
      const index = favourites.findIndex(
        (favourites) => favourites._id == restauarantId
      );
      if (index !== -1) {
        favourites.splice(index, 1);
      } else {
        favourites.push(dto);
      }
      user.favourites = favourites;
      await user.save();
      return dto;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async updateRestaurantStatus(id) {
    try {
      const restauarant = await Restaurant.findById(id)
        .populate("owner")
        .populate("address");

      if (!restauarant) {
        throw new Error("restaurant not found!");
      }

      restauarant.open = !restauarant.open;
      await restauarant.save();
      return restauarant;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
