  const valorReal = document.getElementById('valorReal');

  function converter() {
    const valorBrl = Number(valorReal.value);
    const select = document.getElementById('moeda');
    const valorSelecionado = select.value;
    const valorConvertido = document.getElementById('telaConvert');
    const euro = 6.42;
    const dolar = 5.65;

    if(isNaN(valorBrl) || valorBrl <= 0){
      valorConvertido.innerText = "Digite um valor válido em reais"
      return;
    }
    let resultado = 0;
    if(valorSelecionado === "EUR") {
      resultado = valorBrl / euro;
    } else if (valorSelecionado === "USD"){
      resultado = valorBrl / dolar;
    } 
    valorConvertido.innerText = `${resultado.toFixed(2)} ${valorSelecionado}`;
  }

  