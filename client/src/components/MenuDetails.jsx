

import React from "react";

const MenuDetails = ({ menu }) => {
    if (!menu) return <p className="text-gray-500">Select a menu</p>;

    return (
        <div className="border p-4 mt-4 rounded shadow-md">
            <h2 className="text-2xl font-bold">{menu.name}</h2>
            <p className="text-gray-600">{menu.description}</p>
            
            <h3 className="text-xl mt-4 font-semibold">Menu Items</h3>
            {menu.items.length === 0 ? (
                <p className="text-gray-500">No items available</p>
            ) : (
                <ul className="mt-2">
                    {menu.items.map((item) => (
                        <li key={item._id} className="border-b py-2">
                            <strong>{item.name}</strong> - ${item.price}  
                            <p className="text-sm text-gray-500">{item.description}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MenuDetails;
