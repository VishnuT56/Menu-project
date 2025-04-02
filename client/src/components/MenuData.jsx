

import React, { useState } from "react";

const menuData = {
  Food: [
    { name: "Burger", description: "Juicy beef patty with fresh lettuce and tomato", price: "$8" },
    { name: "Pizza", description: "Classic cheese pizza with a crispy crust", price: "$12" },
  ],
  Drinks: [
    { name: "CINNAMON TOAST CRUNCH", description: "Smooth peanut butter whiskey with cinnamon", price: "$16" },
    { name: "MOET SPRITZ", description: "Aperol, St. Germain, botanical liqueur, fresh lime juice", price: "$20" },
    { name: "BAR 42 MARY", description: "Tomato juice, Worcestershire, celery salt, black pepper", price: "$14" },
  ],
  Brunch: [
    { name: "Pancakes", description: "Fluffy buttermilk pancakes with maple syrup", price: "$10" },
    { name: "Omelette", description: "Three-egg omelette with cheese and vegetables", price: "$9" },
  ],
};

export default function MenuPage() {
  const [selectedMenu, setSelectedMenu] = useState("Drinks");

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500">MENU</h1>
        <p className="mt-2 text-gray-300">
          Please take a look at our menu featuring food, drinks, and brunch. If you'd like to <br />
          place an order, use the "Order Online" button located below the menu.
        </p>
       

        <div className="flex flex-wrap justify-center gap-2 mt-4">
  {Object.keys(menuData).map((menu) => (
    <button
      key={menu}
      className={`px-3 py-1 text-sm md:text-base rounded ${selectedMenu === menu ? "bg-blue-500" : "bg-gray-700"}`}
      onClick={() => setSelectedMenu(menu)}
    >
      {menu}
    </button>
  ))}
</div>


      </div>
      <div className="mt-8 border-2 max-w-xl mx-auto bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl font-bold text-center text-red-500 ">{selectedMenu} Items</h2>
        <ul className="mt-4 space-y-6">
          {menuData[selectedMenu].map((item, index) => (
            <li key={index} className="border-b pb-4">
              <div className="flex justify-between">
                <span className="font-semibold">{item.name} ........................................................................</span>
                <span className="font-bold">{item.price}</span>
              </div>
              {item.description && <p className="text-gray-400 text-sm mt-1">{item.description}</p>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
