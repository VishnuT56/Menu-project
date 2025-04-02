

import React, { useEffect, useState } from "react";
import { getMenus } from "../api";

const MenuList = ({ setSelectedMenu }) => {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getMenus();
            setMenus(data);
        };
        fetchData();
    }, []);

    return (
        <div className="flex gap-4">
            {menus.map((menu) => (
                <button
                    key={menu._id}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => setSelectedMenu(menu)}
                >
                    {menu.name}
                </button>
            ))}
        </div>
    );
};

export default MenuList;


