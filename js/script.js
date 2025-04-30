document.getElementById('abrirBusca').addEventListener('click', function () {
    const caixa = document.getElementById('caixaPesquisa');
    if (caixa.style.display === 'none' || caixa.style.display === '') {
        caixa.style.display = 'block';
    } else {
        caixa.style.display = 'none';
    }
});
