import React, { useEffect, useState } from "react";
import { SachModel } from "../../models/SachModel";
import SachProp from "./components/SachProp";
import { getAll } from "../../api/SachApi";
import { error } from "console";


const DanhSachSanPham: React.FC = ()=>{
    const [danhSachQuyenSach,setDanhSachQuyenSach] = useState<SachModel[]>([]);
    const [dangTaiDuLieu,setDangTaiDuLieu] = useState(true);
    const [baoLoi,setBaoLoi] = useState(null);

    useEffect(()=>{
      getAll().then(
        sachData => {
            setDanhSachQuyenSach(sachData);
            setDangTaiDuLieu(false)
        }
      ).catch(
            error => {;
                setBaoLoi(error.message);
            }
      );
    }, [] // chi goi 1 lan
    )
    if(dangTaiDuLieu){
        return(
            <div>
                <h1>Dang tai du lieu</h1>
            </div>
        );
    }
    if(baoLoi){
        return(
            <div>
                <h1>Gap loi: {baoLoi}</h1>
            </div>
        );
    }
    return(
        <div className="container">
            <div className="row mt-4">
                {
                    danhSachQuyenSach.map((sach)=>(
                        <SachProp key={sach.maSach} sach={sach} />
                    ))
                }
            </div>
        </div>
    );
}
export default DanhSachSanPham;