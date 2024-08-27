import React from "react";
import { HinhAnhModel } from "../models/HinhAnhModel";
import { my_request } from "./Request";

async function layAnhCHuaSach(duongDan: string): Promise<HinhAnhModel[]> {
    const ketQua:HinhAnhModel[] = [];
    //goi phuong thuc requset
    const response = await my_request(duongDan);

    // lay ra json sach
    const responseData = response._embedded.hinhAnhs;
    console.log(responseData)
    for(const key in responseData){
        ketQua.push({
            maHinhAnh: responseData[key].maHinhAnh,
            tenHinhAnh: responseData[key].tenHinhAnh,
            laIcon: responseData[key].laIcon,
            duongDan: responseData[key].duongDan,
            duLieuAnh: responseData[key].duLieuAnh,
        });
    }
    return ketQua;

}
export async function getAllAnh(maSach: number): Promise<HinhAnhModel[]>{
    // xac dinh enpoint
    const duongDan:string = `http://localhost:8080/sach/${maSach}/hinhAnhs`;
    return layAnhCHuaSach(duongDan);
}

export async function layAnhDauTienCuaSach(maSach: number): Promise<HinhAnhModel[]>{
    // xac dinh enpoint
    const duongDan:string = `http://localhost:8080/sach/${maSach}/hinhAnhs?sort=maHinhAnh,asc&page=0&size=1`;
    return layAnhCHuaSach(duongDan);
}
