import { Route, Routes } from "react-router-dom";
import ClubEnd from "../Pages/ClubEnd";
import RepairEnd from "../Pages/RepairEnd";
import Chat from "../Pages/Chat";
import Register from "../Pages/Register";
import Categories from "../Pages/Categories";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import ShopEnd from "../Pages/ShopEnd";

function Content() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/chat" element={<Chat/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/aboutus" element={<AboutUs/>} />
                <Route path="/clubend" element={<ClubEnd/>} />
                <Route path="/repairend" element={<RepairEnd/>} />
                <Route path="/shopend" element={<ShopEnd/>} />
            </Routes>
        </div>
    )
}

export default Content;