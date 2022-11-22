
//Tính chiều cao cách 2
function tinhchieucao(){
    let chieucao = parseInt(document.getElementById("chieucao").value);
    if(chieucao < 190){
        document.getElementById("output").innerHTML = "Bạn cao " + chieucao +  " cm"
    }else{
        document.getElementById("output").innerHTML = "Bạn đừng có mà xạo l :)))"
    }
    
}

//Tính cân nặng cách 2 
function tinhcannang(){
    let cannang = parseInt(document.getElementById("cannang").value);
    if(cannang>=200){
        document.getElementById("output").innerHTML = "Bạn xạo l với tôi phải không :) ?"
    } else if(cannang >=100){
        document.getElementById("output").innerHTML = cannang + " kg. Ăn đ gì lắm thế"
    } else if(cannang>55){
        document.getElementById("output").innerHTML = "Bạn nặng " + cannang +  " kg"
    } else{
        document.getElementById("output").innerHTML = cannang + " kg. Nghiện à ?"
    }
}

// Tính bmi cách 2
function tinhbmi(){
    
    let chieucao = parseInt(document.getElementById("chieucao").value);
    let cannang = parseInt(document.getElementById("cannang").value);
    let tinh = (cannang / ((chieucao * chieucao) / 10000)).toFixed(2);
    if (tinh<18.5){
        document.getElementById("output").innerText = "Bmi "+ tinh;
        nhanxet.innerHTML = "Bạn nghiện chắc luôn :))"
    } else if(18.5 < tinh < 24.9){
        document.getElementById("output").innerText = "Bmi "+ tinh;
        nhanxet.innerHTML = "Bạn bình thường"
    } else {
        document.getElementById("output").innerText = "Bmi "+ tinh;
        nhanxet.innerHTML ="Bạn mập vãi l :(" 
    }
}


// tính chiều cao
// var btn = document.getElementById('btn');
// btn.addEventListener('click', () =>{
//     const chieucao = parseInt(document.getElementById("chieucao").value);
//     const tinh = document.getElementById("output");
//     if(chieucao < 190){
//         tinh.innerHTML = "Bạn cao " + chieucao +  " cm"
//     }else{
//         tinh.innerHTML = "Bạn đừng có mà xạo l :)))"
//     }
// })

// Tính cân nặng
// var btn = document.getElementById('btn');
// btn.addEventListener('click', () =>{
//     const cannang = parseInt(document.getElementById("cannang").value);
//     const tinh = document.getElementById("output");
//     if(cannang>=200){
//         tinh.innerHTML = "Bạn xạo l với tôi phải không :) ?"
//     } else if(cannang >=100){
//         tinh.innerHTML = cannang + " kg. Ăn đ gì lắm thế"
//     } else if(cannang>55){
//         tinh.innerHTML = "Bạn nặng " + cannang +  " kg"
//     } else{
//         tinh.innerHTML = cannang + " kg. Nghiện à ?"
//     }
// })



// Tính bmi
// var btn = document.getElementById('btn');
// btn.addEventListener('click', () =>{
//     const chieucao = parseInt(document.getElementById("chieucao").value);
//     const cannang = parseInt(document.getElementById("cannang").value);
//     const tinh = document.getElementById("output");
//     const nhanxet =document.getElementById("nhanxet");
    
//     if (chieucao !== null && chieucao !== ""|| cannang !== null && cannang !== ""){
//         bmi = (cannang / ((chieucao * chieucao) / 10000)).toFixed(2);
//         tinh.innerHTML = "Bmi của bạn là " + bmi;
//         if (bmi<18.5){
//             tinh.innerHTML = bmi;
//             nhanxet.innerHTML = "Bạn nghiện chắc luôn :))"
//         } else if(18.5 < bmi < 24.9){
//             tinh.innerHTML = bmi;
//             nhanxet.innerHTML = "Bạn bình thường"
//         } else {
//             tinh.innerHTML = bmi;
//             nhanxet.innerHTML ="Bạn mập vãi l :(" 
//         }
//     } else {
//         tinh.innerHTML = "Khum nhập rồi sao tính :)"
//     }
    
// })
