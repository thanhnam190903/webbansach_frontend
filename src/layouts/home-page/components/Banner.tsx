import React, { useEffect, useState } from "react";
import { SachModel } from "../../../models/SachModel";
import { laySachNew } from "../../../api/SachApi";


const Banner: React.FC = ()=>{
  const [danhSachQuyenSach,setDanhSachQuyenSach] = useState<SachModel[]>([]);
  const [dangTaiDuLieu,setDangTaiDuLieu] = useState(true);
  const [baoLoi,setBaoLoi] = useState(null);

  useEffect(()=>{
    laySachNew().then(
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
        <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={'./../../../images/public/slide-04.jpg'} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={'./../../../images/public/slide-05.jpg'} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={'./../../../images/public/slide-06.jpg'} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    )
}
export default Banner;