const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
});

const menuSchema = new mongoose.Schema({
    name: String,
    description: String,
    items: [menuItemSchema],
});

const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;
