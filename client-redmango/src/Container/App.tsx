import React,{useState,useEffect} from "react";
import { Footer, Header } from "../Components/Layout";
import type { menuItemModel } from "../Interfaces";

function App() {
  const [menuItems, setMenuItems] = useState<menuItemModel[]>([]);

  useEffect(() => {
    fetch('https://localhost:7006/api/MenuItem')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMenuItems(data.result);
      });
  }, []);

  return (
    <div>
      <Header />
      Main Component
      <Footer />
    </div>
  );
}

export default App;
