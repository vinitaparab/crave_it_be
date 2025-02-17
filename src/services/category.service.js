const Category = require("../models/category.model");
const Restaurant = require("../models/restaurant.model");

module.exports = {
  async createCategory(name, userId) {
    try {
      //Find restaurant by user ID
      const restauarant = await Restaurant.findOne({ owner: userId });
      if (!restauarant) {
        throw new Error(`Restaurant not found for user ID ${userId}`);
      }
      //create and save new category
      const createdCategory = new Category({
        name,
        restaurant: restauarant._id,
      });
      await createdCategory.save();
      return createdCategory;
    } catch (error) {
      throw new Error(`Failed to create category: ${error.message}`);
    }
  },

  async findCategoryByRestaurantId(restauarantId) {
    try {
      //Find categories by restaurant ID
      const categories = await Category.find({ restaurant: restauarantId });
      return categories;
    } catch (error) {
      throw new Error(
        `Failed to find categories for restaurant ID: ${restauarantId}`
      );
    }
  },

  async findCategoryById(categoryId) {
    try {
      //Find category by ID
      const category = await Category.findById(categoryId);
      if (!category) {
        throw new Error(`Category not found with ID ${categoryId}`);
      }
      return category;
    } catch (error) {
      throw new Error(
        `Failed to fnd Category with ID ${categoryId}:${error.message} `
      );
    }
  },
};
