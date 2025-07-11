import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "../Components/Layout";
import {
  AccessDenied,
  AllOrders,
  Home,
  Login,
  MainList,
  MenuItemDetails,
  MenuItemUpsert,
  MyOrders,
  NotFound,
  OrderConfirmed,
  OrderDetails,
  Payment,
  Register,
  ShoppingCart,
} from "../Pages";
import { useDispatch, useSelector } from "react-redux";
import { useGetShoppingCartQuery } from "../Apis/shoppingCartApi";
import { useEffect } from "react";
import { setShoppingCart } from "../Redux/shoppingCartSlice";
import type { userModel } from "../Interfaces";
import { setLoggedInUser } from "../Redux/userAuthSlice";
import { jwtDecode } from "jwt-decode";
import type { RootState } from "../Redux/store";

function App() {
  const dispatch = useDispatch();

  const userData = useSelector((state: RootState) => state.userAuthStore);

  const { data, isLoading } = useGetShoppingCartQuery(userData.id);

  useEffect(() => {
    if (!isLoading) {
      console.log(data.result);
      dispatch(setShoppingCart(data.result?.cartItems));
    }
  }, [data]);

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      const { fullName, id, email, role }: userModel = jwtDecode(localToken);
      dispatch(setLoggedInUser({ fullName, id, email, role }));
    }
  }, []);

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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/payment" element={<Payment />} />
          <Route
            path="order/orderconfirmed/:id"
            element={<OrderConfirmed />}
          ></Route>
          <Route path="/order/myOrders" element={<MyOrders />} />
          <Route path="/order/orderDetails/:id" element={<OrderDetails />} />
          <Route path="/order/allOrders" element={<AllOrders />} />
          <Route path="/accessDenied" element={<AccessDenied />} />
          <Route path="/menuItem/mainList" element={<MainList />} />
          <Route
            path="/menuItem/menuItemUpsert/:id"
            element={<MenuItemUpsert />}
          />
          <Route path="/menuItem/menuItemUpsert" element={<MenuItemUpsert />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
