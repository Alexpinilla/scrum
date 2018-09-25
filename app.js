$(document).ready(function () {
    let addListInput = $('.addListWrapper input');
    const generateId = namespace => `${namespace}-${Date.now()}-${Math.ceil(Math.random()*100)}`
    const createListString = name =>
        `<div class="list contenedor1" id="${generateId('list')}">
            <div class="listHeader">
                <h4> · ${name} · <button class="destruir">X</button></h4>
            </div>

            <div class="addTask">
                     <ul class="nuevaLista2">
                        <li class="anadirLista">
                            <input type="text" class="subTarea"></input>
                            <button><img src="css/images/mas.png"></button>
                        </li>
                        <!--
                        <ul class="listaDeTareas">
                        codigo de las tareas
                        </ul>
                        <div class="botonAnadirTarea">
                            <input type="text" class="subTarea"></input>
                            <button><img src="css/images/mas.png"></button>
                        </div>
                        -->

                </ul>
            </div>
        </div>
        `

    var nuevaSubLista = parametro =>
        `<li class="list2"><span contenteditable=true class="titulo">${parametro}</span>

        <button class="eli"><img src="css/images/menos.png"></button>
        <button class="editar"><img src="css/images/editar.png"></button> 
        
        <div class="primeraClase">
            <div class="cuadrado"></div>
            <p>Tarea Completada</p>
        </div>

        </li>`



    const appendNewList = () => {
        //  cogemos el text del input
        let listName = addListInput.val();

        // creamos el nodo .list
        let list = $(createListString(listName));

        // añadimos el node al DOM
        $('.lists').append(list)

        // Limpiamos el texto del input
        addListInput.val('');
    }


    // Listeners
    addListInput.on('keyup', function (event) {
        if (event.keyCode === 13) {
            appendNewList();
        }
    })

    var inputSubTarea = $('.subTarea');
    // INTRO PARA CREAR TAREA
    $('.lists').on('keyup', '.list .addTask input', function (intro) {
        if (intro.keyCode === 13) {
            var inputSubTarea = $(this);
            var idcontenedor = $(this.parentNode.parentNode);
            var tituloSubTarea = inputSubTarea.val();
            var list2 = $(nuevaSubLista(tituloSubTarea));
            $(idcontenedor).prepend(list2);
            inputSubTarea.val('');
            console.log('hola');
        }
    })
    // ELIMINAR TAREA
    $('.lists').on('click', '.eli', function (event) {
        let tarea = $(event.target.parentNode.parentNode);
        tarea.detach();
        console.log('eliminando');
        console.log(event.target.parentNode.parentNode);
    })
    // EDITAR TAREA
    $('.lists').on('click', '.editar', function (event) {
        let tarea = $(event.target.parentNode);
        /* tarea.detach(); */
        $('.titulo').select();
        console.log(event.target.parentNode.parentNode > span);
    })

    // Eliminar
    $('.lists').on('click', '.listHeader button', function (event) {
        let listNode = $(event.target.parentNode.parentNode.parentNode);
        listNode.detach();
    })
 
    // Tarea marcada
    $('.lists').on('click', '.primeraClase', function (event) {
        $(this).removeClass('cuadrado');
        $(this).children().removeClass("cuadrado");
        $(this).addClass('segundaClase');
        $(this).removeClass('primeraClase');

    })
    $('.lists').on('click', '.segundaClase', function (event) {
        console.log(this);
        $(this).children(':first').addClass("cuadrado");
        $(this).removeClass('segundaClase');
        $(this).addClass('primeraClase');
    })

})