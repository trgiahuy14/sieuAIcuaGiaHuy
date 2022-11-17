var btn = document.getElementById('btn');
btn.addEventListener('click', () =>{
    const chieucao = parseInt(document.getElementById("chieucao").value);
    const cannang = parseInt(document.getElementById("cannang").value);
    const tinh = document.getElementById("output");
    const nhanxet =document.getElementById("nhanxet");
    bmi = (cannang / ((chieucao * chieucao) / 10000)).toFixed(2);
    tinh.innerHTML = "Bmi của bạn là " + bmi;
    if (bmi<18.5){
        tinh.innerHTML = bmi;
        nhanxet.innerHTML = "Bạn nghiện chắc luôn :))"
    } else if(18.5 < bmi < 24.9){
        tinh.innerHTML = bmi;
        nhanxet.innerHTML = "Bạn bình thường"
    } else {
        tinh.innerHTML = bmi;
        nhanxet.innerHTML ="Bạn mập vãi l :(" 
    }
})
    


