import React, { useState } from "react";
import MenuList from "../components/MenuList";
import MenuDetails from "../components/MenuDetails";

const Home = () => {
    const [selectedMenu, setSelectedMenu] = useState(null);

    return (
        <div className="p-8">
            <MenuList setSelectedMenu={setSelectedMenu} />
            <MenuDetails menu={selectedMenu} />
        </div>
    );
};

export default Home;

