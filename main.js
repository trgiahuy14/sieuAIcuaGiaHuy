var btn = document.getElementById('btn');


btn.addEventListener('click', () => {
    const chieucao = parseInt(document.getElementById('chieucao').value)
    const tinh = document.getElementById('output')
    tinh.innerHTML = ' Bạn cao ' + chieucao + ' cm'
    // const chieucao = parseInt(document.getElementById('chieucao').value);
    // const tinh = document.getElementById('output')
    // tinh.innerHTML = 'Chiều cao của bạn là' + chieucao
   
})