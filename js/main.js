function soTangDan(){
    var so1 = Number(document.getElementById("so1").value);
    // console.log(so1);
    var so2 = Number(document.getElementById("so2").value);
    // console.log(so2);
    var so3 = Number(document.getElementById("so3").value);
    // console.log(so3);


    if (so1 < so2 && so1 < so3) {
        if (so2<so3) {
            document.getElementById("btnTang").innerHTML = so1 + " " + so2 + " " + so3;
        }else{
            document.getElementById("btnTang").innerHTML = so1 + " " + so3 + " " + so2;
        }
    }
    else if(so2 < so1 && so2 <so3){
        if (so1<so3) {
            document.getElementById("btnTang").innerHTML = so2 + " " + so1 + " " + so3;

        }else{
            document.getElementById("btnTang").innerHTML = so2 + " " + so3 + " " + so1;
        }
    }
    else if(so3< so1 && so3 < so2){
        if (so1<so2) {
            document.getElementById("btnTang").innerHTML = so3 + " " + so1 + " " + so2;

        }else{
            document.getElementById("btnTang").innerHTML = so3 + " " + so2 + " " + so1;
        }
    }
}

function loiChao(){
    var thanhVien = document.getElementById("thanhVien").value;
    // console.log(thanhVien)

    switch (thanhVien) {
        case 'B':
            document.getElementById("btnChao").innerHTML = "Bố";
            break;
        case 'M':
            document.getElementById("btnChao").innerHTML = "Mẹ";
            break;
        case 'A':
            document.getElementById("btnChao").innerHTML = "Anh trai";
            break;
        case 'E':
            document.getElementById("btnChao").innerHTML = "Em gái";
            break;
        default:
            alert("vui lòng chọn thành viên");
    }
}

function chanLe(){
    var soThu1 = Number(document.getElementById("soThu1").value);
    // console.log(soThu1);
    var soThu2 = Number(document.getElementById("soThu2").value);
    // console.log(soThu2);
    var soThu3 = Number(document.getElementById("soThu3").value);
    // console.log(soThu3);

    var count = 0;

    if (soThu1 % 2 == 0){
        count++;
        // console.log(count)
    }else{
        console.log("lẻ")
    }
    if (soThu2 % 2 == 0){
        count++;
        // console.log(count)
    }else{
        console.log("lẻ")
    }  
    if (soThu3 % 2 == 0){
        count++;
        console.log(count)
    }else{
        console.log("lẻ")
    }

    var le = 3 - count;

    document.getElementById("btnCL"). innerHTML = "Có " + count +" số chẵn và "+ le +" số lẻ";
}
function tamGiac(){
    var canh1 = Number(document.getElementById("canh1").value);
    var canh2 = Number(document.getElementById("canh2").value);
    var canh3 = Number(document.getElementById("canh3").value);

    if(canh1 + canh2 > canh3 || canh2 + canh3 > canh1 || canh1 + canh3 > canh2) {
        if(canh1 == canh2 && canh2 == canh3) {
            document.getElementById("btnTamGiac").innerHTML = "đều"
        }else if (canh1 == canh2 || canh1 == canh3 || canh2 == canh3) {
            document.getElementById("btnTamGiac").innerHTML = "cân"
        }else if( canh1 *canh1 == canh2*canh2 + canh3*canh3 || canh2 * canh2 == canh1*canh1 + canh3*canh3 || 
        canh3*canh3 == canh2*canh2 + canh1*canh1){
            document.getElementById("btnTamGiac").innerHTML = "vuông"
        }else{
            alert("Một loại tam giác khác")
        }
    }else{
        alert("Vui lòng điền")
    }
        
    }