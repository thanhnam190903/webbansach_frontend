import React, { useEffect, useState } from "react";
import { SachModel } from "../../../models/SachModel";
import { HinhAnhModel } from "../../../models/HinhAnhModel";
import { getAllAnh } from "../../../api/HinhAnhAPI";

interface SachPropsInterface{
    sach: SachModel;
}
const SachProp: React.FC<SachPropsInterface> = (props)=>{

    const maSach: number = props.sach.maSach;
    const [danhSachAnh,setDanhSachAnh] = useState<HinhAnhModel[]>([]);
    const [dangTaiDuLieu,setDangTaiDuLieu] = useState(true);
    const [baoLoi,setBaoLoi] = useState(null);

    useEffect(()=>{
      getAllAnh(maSach).then(
        hinhAnhData => {
            setDanhSachAnh(hinhAnhData);
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
   
    let duLieuAnh: string = "";
    if(danhSachAnh[0] && danhSachAnh[0].duLieuAnh){
        duLieuAnh = danhSachAnh[0].duLieuAnh;
    }
    return(
        <div className="col-md-3 mt-2">
            <div className="card">
               <img src={duLieuAnh} className="card-img-top" alt={props.sach.tenSach} style={{height: '200px'}}/>
                <div className="card-body">
                    <h5 className="card-title">{props.sach.tenSach}</h5>
                    <p className="card-text">{props.sach.moTa}</p>
                    <div className="price">
                        <span className="original-price">
                            <del>{props.sach.giaNiemYet}</del>
                        </span>
                        <span className="discounted-price">
                            <strong>{props.sach.giaBan}</strong>
                        </span>
                    </div>
                    <div className="row mt-2" role="group">
                        <div className="col-6">
                            <a href="#" className="btn btn-secondary">
                                <i className="fas fa-heart"></i>
                            </a>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-danger">
                                <i className="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SachProp;