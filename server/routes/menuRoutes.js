const express = require('express');
const Menu = require('../models/Menu');

const router = express.Router();

// Create a new menu
router.post('/menus', async (req, res) => {
    try {
        const newMenu = new Menu(req.body);
        await newMenu.save();
        res.status(201).json(newMenu);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get("/api/menus", async (req, res) => {
    try {
        const menus = await Menu.find().populate("items");
        res.json(menus);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all menus
router.get('/menus', async (req, res) => {
    try {
        const menus = await Menu.find();
        res.json(menus);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get menu by ID
router.get('/menus/:id', async (req, res) => {
    try {
        const menu = await Menu.findById(req.params.id);
        res.json(menu);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
