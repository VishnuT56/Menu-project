app.get("/menus", async (req, res) => {
    const menus = await Menu.find();
    res.json(menus);
  });
  
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));