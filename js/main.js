  // var x = "y";
  var tudinero = 0;
// variables de bs y $
  var dolaresA = document.getElementById("tus_dolares"),
      preciodolarA = document.getElementById("precio_dolar");

// Convercion
function convertir() {
  var dolaresB = dolaresA.value,
      preciodolarB = preciodolarA.value;

  var dolares = parseFloat(document.getElementById("tus_dolares").value),
      preciodolar = parseFloat(document.getElementById("precio_dolar").value);

      if (dolaresB === "" || dolaresB <= 0) {
            dolaresA.setAttribute("placeholder", "Agrega un valor valido");
            dolaresA.className = "error";
          }
      if (preciodolarB === "" || preciodolarB <= 0) {
            preciodolarA.setAttribute("placeholder", "Agrega un valor valido");
            preciodolarA.className = "error";
            return false;
          }

// Hago la convecion
      tudinero = dolares * preciodolar;
// Muestro el dinero en pantalla
  var te_resta = document.getElementById("dinero_tus_bolivares"),
      cantidad = document.createTextNode(tudinero);
      te_resta.innerHTML = "";
      te_resta.appendChild(cantidad);
}

// Variables para agregar elementos a la lista
  var lista = document.getElementById("lista"),
      elementoInput = document.getElementById("elemento"),
      restarBtn = document.getElementById("restarBtn");
// Agrego elementos a la lista
function agregarElemento(){

  var elemento = elementoInput.value,
      elementoFloat = parseFloat(elementoInput.value),
      nuevoElemento = document.createElement("li"),
      enlace = document.createElement("a"),
      contenido = document.createTextNode(elementoFloat);

      // if (tudinero === 0) {
      //     elementoInput.setAttribute("placeholder", "No tiene Bolivares");
      //     elementoInput.className = "error";
      //     return false;
      // }
      if (elemento === "" || elemento <= 0) {
          elementoInput.setAttribute("placeholder", "Agrega un valor valido");
          elementoInput.className = "error";
          return false;
          }

// Agregamos el contenido al enlace
      enlace.appendChild(contenido);
// Le establecemos un atributo href
      enlace.setAttribute("href", "#");
// Agrergamos el enlace (a) a la nueva tarea (li)
      nuevoElemento.appendChild(enlace);
// Agregamos el nuevo elemento a la lista
      lista.appendChild(nuevoElemento);
// Resto el precio al dinero todal
    tudinero = tudinero - elementoFloat;
    // alert(tudinero);

    var descuento = document.getElementById("dinero_tus_bolivares"),
        bsrestados = document.createTextNode(tudinero);
        descuento.innerHTML = "";
        descuento.appendChild(bsrestados);

        //   if(tudinero < 0 && x === "y"){
        //   alert("Ya no tiene Bolivares");
        //   x = "z";
        // }
        for (var i = 0; i <= lista.children.length -1; i++) {
          lista.children[i].addEventListener("click", eleminarTarea);
        }
}

// Comprobar Input del precio
var comprobarInput = function(){
  elementoInput.className = "";
  elementoInput.setAttribute("placeholder", "Precio");
};
elementoInput.addEventListener("click", comprobarInput);

//Comprobar Input de dolares
var comprobarInput$ = function(){
  dolaresA.className = "";
  dolaresA.setAttribute("placeholder", "Tus Dolares $");
};
dolaresA.addEventListener("click", comprobarInput$);

//comprobar Input precio $
var comprobarInputP$ = function(){
  preciodolarA.className = "";
  preciodolarA.setAttribute("placeholder", "Precio del Dolar");
};
preciodolarA.addEventListener("click", comprobarInputP$);



// Borrando Elementos de la lista

var eleminarTarea = function(){
  this.parentNode.removeChild(this);
  var ff = parseFloat(this.textContent);
      // ffFloat = parseFloat(ff);
      tudinero = tudinero + ff;

      var te_resta = document.getElementById("dinero_tus_bolivares"),
          cantidad = document.createTextNode(tudinero);
          te_resta.innerHTML = "";
          te_resta.appendChild(cantidad);




};
// var lista = document.getElementById("lista");
function restarTodo(){
var todoLista = 0;
for (var i = 0; i <=lista.children.length -1 ; i++) {
  todoLista = todoLista + parseFloat(lista.children[i].textContent);

}
tuDineroMenosTodosLosElementosDeLaLista = tudinero - todoLista;

      var te_resta = document.getElementById("dinero_tus_bolivares"),
          cantidad = document.createTextNode(tuDineroMenosTodosLosElementosDeLaLista);
          te_resta.innerHTML = "";
          te_resta.appendChild(cantidad);
}
