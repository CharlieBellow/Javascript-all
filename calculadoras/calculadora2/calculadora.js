var valor;
var resultado;

function botao(num) {
  valor = document.calc.visor.value += num;

}

function reseta() {
  document.calc.visor.value = "";
}

function calcula() {
  resultado = eval(valor);
  document.calc.visor.value = resultado.toLocaleString("pt-br");
}



/*const inputEle = document.getElementById("enter");
inputEle.addEventListener("keyup", function (e) {
	var key = e.which || e.keyCode;
  console.log(key)
	if (key == 13) {

    calcula()
		alert("carregou enter o valor digitado foi: " + this.value);
	}
});*/

{/*<input id="enter" type="text" value="texto" />;*/}
