import { withAuth } from "../../HOC";
import { useSelector } from "react-redux";
import  type { RootState } from "../../Redux/store";
import { useGetAllOrdersQuery } from "../../Apis/orderApi";
import { MainLoader } from "../../Common";
import { OrderList } from "../../Components/Page/Order";

function MyOrders() {
  const userId = useSelector((state: RootState) => state.userAuthStore.id);
  const { data, isLoading } = useGetAllOrdersQuery(userId);
  console.log(isLoading);
  console.log(data);

  return (
    <>
      {isLoading && <MainLoader />}
      {!isLoading && (
        <OrderList isLoading={isLoading} orderData={data.result} />
      )}
    </>
  );
}

export default withAuth(MyOrders);