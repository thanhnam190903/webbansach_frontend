export async function my_request(duongDan:string) {
    // truy van dg dan
    const response = await fetch(duongDan);
    // neu bi tra ve loi
    if(!response.ok){
        throw new Error(`khong the truy cap ${duongDan}`)
    }

    return response.json();
}