import React from "react";
import Banner from "./components/Banner";
import DanhSachSanPham from "../product/DanhSachSanPham";


function HomePage(){
    return(
        <div>
            <Banner />
            <DanhSachSanPham />
        </div>
    )
}
export default HomePage;