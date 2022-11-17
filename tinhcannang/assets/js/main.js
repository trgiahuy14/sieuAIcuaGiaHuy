var btn = document.getElementById('btn');
btn.addEventListener('click', () =>{
    const cannang = parseInt(document.getElementById("cannang").value);
    const tinh = document.getElementById("output");
    if(cannang >=100){
        tinh.innerHTML = "Ăn đ gì lắm thế"
    } else if(cannang>40){
        tinh.innerHTML = "Bạn nặng " + cannang +  " kg"
    } else{
        tinh.innerHTML = cannang + " kg. Nghiện à ?"
    }
})


