import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "../Components/Layout";
import { Home, MenuItemDetails, NotFound } from "../Pages";

function App() {

  return (
    <div>
      <Header />
      <div className="pb-5">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        <Route
            path="/menuItemDetails/:menuItemId"
            element={<MenuItemDetails />}
          ></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
