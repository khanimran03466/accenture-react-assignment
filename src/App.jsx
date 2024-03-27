import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SideNav from "./components/SideNav";

function App() {

  return (
    <>
      <Header />
      <div className="home-wrraper">
        <SideNav />
        <Outlet />
      </div>
    </>
  );
}

export default App;
