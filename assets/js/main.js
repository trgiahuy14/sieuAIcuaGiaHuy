var btn = document.getElementById('btn');
btn.addEventListener('click', () =>{
    const chieucao = parseInt(document.getElementById("chieucao").value);
    const tinh = document.getElementById("output");
    if(chieucao < 190){
        tinh.innerHTML = "Bạn cao " + chieucao +  " cm"
    }else{
        tinh.innerHTML = "Bạn đừng có mà xạo l :)))"
    }
})


