import React, { useState, useEffect } from "react";
import type { menuItemModel } from "../../Interfaces";
import MenuItemCard from "./MenuItemCard";

function MenuItemList() {
  const [menuItems, setMenuItems] = useState<menuItemModel[]>([]);

  useEffect(() => {
    fetch("https://localhost:7006/api/MenuItem")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMenuItems(data.result);
      });
  }, []);

  return ( 
  <div className="container row">
      {menuItems.length > 0 &&
        menuItems.map((menuItem, index) => (
          <MenuItemCard menuItem={menuItem} key={index} />
        ))}
    </div>
  );
}

export default MenuItemList;