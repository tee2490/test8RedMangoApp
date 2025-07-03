import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "../Components/Layout";
import { Home, MenuItemDetails, NotFound, ShoppingCart } from "../Pages";
import { useDispatch } from "react-redux";
import { useGetShoppingCartQuery } from "../Apis/shoppingCartApi";
import { useEffect } from "react";
import { setShoppingCart } from "../Redux/shoppingCartSlice";
import { userId } from "../Common/SD";

function App() {
   const dispatch = useDispatch();

  const { data, isLoading } = useGetShoppingCartQuery(
    userId
  );

  useEffect(() => {
    if (!isLoading) {
      console.log(data.result);
      dispatch(setShoppingCart(data.result?.cartItems));
    }
  }, [data]);

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
          <Route path="/shoppingCart" element={<ShoppingCart />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
