import { Banner } from "../Common";
import { MenuItemList } from "../Components/Page/Home";

function Home() {
  return (
    <div>
       <Banner/>
      <div className="container p-2">
        <MenuItemList />
      </div>
    </div>
  );
}

export default Home;