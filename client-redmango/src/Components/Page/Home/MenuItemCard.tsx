import { type apiResponse, type menuItemModel, type userModel } from "../../../Interfaces";
import { baseUrl } from "../../../Common/SD";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUpdateShoppingCartMutation } from "../../../Apis/shoppingCartApi";
import { MiniLoader } from "../../../Common";
import { toastNotify } from "../../../Helper";
import { useSelector } from "react-redux";
import type { RootState } from "../../../Redux/store";

interface Props {
  menuItem: menuItemModel;
}

function MenuItemCard(props: Props) {
  const navigate = useNavigate();
  const userData: userModel = useSelector(
    (state: RootState) => state.userAuthStore
  );
  const [isAddingToCart, setIsAddingToCart] = useState<boolean>(false);
  const [updateShoppingCart] = useUpdateShoppingCartMutation();

  const handleAddToCart = async (menuItemId: number) => {
       if (!userData.id) {
      navigate("/login");
      return;
    }
    setIsAddingToCart(true);

    const response: apiResponse = await updateShoppingCart({
      menuItemId: menuItemId,
      updateQuantityBy: 1,
      userId: userData.id,
    });

    if (response.data && response.data.isSuccess) {
      toastNotify("Item added to cart successfully!");
    }

    setTimeout(() => {
      setIsAddingToCart(false);
    }, 500);
  };

  return (
    <div className="col-md-4 col-12 p-4">
      <div
        className="card"
        style={{ boxShadow: "0 1px 7px 0 rgb(0 0 0 / 50%)" }}
      >
        <div className="card-body pt-2">
          <div className="row col-10 offset-1 p-4">
            <Link to={`/menuItemDetails/${props.menuItem.id}`}>
              <img
                src={baseUrl + props.menuItem.image}
                style={{ borderRadius: "50%" }}
                alt=""
                className="w-100 mt-5 image-box"
              />
            </Link>
          </div>
          {props.menuItem.specialTag &&
            props.menuItem.specialTag.length > 0 && (
              <i
                className="bi bi-star btn btn-success"
                style={{
                  position: "absolute",
                  top: "15px",
                  left: "15px",
                  padding: "5px 10px",
                  borderRadius: "3px",
                  outline: "none !important",
                  cursor: "pointer",
                }}
              >
                &nbsp; {props.menuItem.specialTag}
              </i>
            )}

          {isAddingToCart ? (
            <div
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
              }}
            >
              <MiniLoader />
            </div>
          ) : (
            <i
              onClick={() => handleAddToCart(props.menuItem.id)}
              className="bi bi-cart-plus btn btn-outline-danger"
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                padding: "5px 10px",
                borderRadius: "3px",
                outline: "none !important",
                cursor: "pointer",
              }}
            ></i>
          )}

          <div className="text-center">
            <p className="card-title m-0 text-success fs-3">
              <Link
                to={`/menuItemDetails/${props.menuItem.id}`}
                style={{ textDecoration: "none", color: "green" }}
              >
                {props.menuItem.name}
              </Link>
            </p>
            <p className="badge bg-secondary" style={{ fontSize: "12px" }}>
              {props.menuItem.category}
            </p>
          </div>
          <p
            className="card-text"
            style={{
              textAlign: "center",
              fontWeight: "light",
              fontSize: "14px",
            }}
          >
            {props.menuItem.description}
          </p>
          <div className="row text-center">
            <h4>${props.menuItem.price}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItemCard;