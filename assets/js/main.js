(function () {

    "use strict";



    //===== Calculadora
    document.querySelectorAll(".calculadora").forEach(e =>

        e.addEventListener("click", () => {
            var val_compra = document.getElementById("val-compra").value;
            var val_utilidad = document.getElementById("val-utilidad").value;
            var val_impuesto = document.getElementById("val-impuesto").value;

            var calculo_utilidad = (val_compra * val_utilidad) / 100;
            var calculo_impuesto = (val_compra * val_impuesto) / 100;
            var valor_venta = (parseInt(val_compra) + parseInt(calculo_utilidad) + parseInt(calculo_impuesto));

            document.getElementById("val-producto").value = valor_venta;
            document.getElementById("val-ganancia").value = calculo_utilidad;
            document.getElementById('val-producto').style.display = 'block';
            document.getElementById('val-ganancia').style.display = 'block';

        })
        //document.getElementById('val-producto').style.display = 'none';
        //document.getElementById('val-ganancia').style.display = 'none';
    );

    document.querySelectorAll(".borrar").forEach(e =>

        e.addEventListener("click", () => {
            document.getElementById("val-compra").value = '';
            document.getElementById("val-utilidad").value = '';
            document.getElementById("val-impuesto").value = '';

            document.getElementById('val-producto').style.display = 'none';
            document.getElementById('val-ganancia').style.display = 'none';

        })
    );



    //===== Inventario

    document.querySelectorAll(".inventario").forEach(e =>
        e.addEventListener("click", () => {
            //Almacenar datos
            var codigo = document.getElementById("codigo").value;
            var nom_produc = document.getElementById("nom-produc").value;
            var marca = document.getElementById("marca").value;
            var precio = document.getElementById("precio").value;
            var cantidad = document.getElementById("cantidad").value;

            //Crear Fila
            var fila = '<tr><td scope="row"> ' + codigo + '</td><td>' + nom_produc + '</td><td>' + marca +
                '</td><td>' + precio + '</td><td>' + cantidad + '</td><td><button type="button" class="modificar btn btn-primary">Modificar</button></td><td><button type="button" class="eliminar btn btn-danger">Eliminar</button></td></tr>';
            // $.ajax({
            //     url: 'php/insertar.php',
            //     type: 'post',
            //     dataType: 'json',
            //     data:{
            //         codigo: codigo,
            //         nom_produc: nom_produc,
            //         marca: marca,
            //         precio:precio,
            //         cantidad: cantidad
            //     }
            // }).done(
            //     function(data){
            //         document.getElementById("codigo").value = '';
            //         document.getElementById("nom-produc").value = '';
            //         document.getElementById("marca").value = '';
            //         document.getElementById("precio").value = '';
            //         document.getElementById("cantidad").value = '';
            //     }
            // )
            
            
            //Agregar Fila
            document.getElementById("datos-tabla").insertAdjacentHTML('beforeend', fila);

            //Limpiar Input
            document.getElementById("codigo").value = '';
            document.getElementById("nom-produc").value = '';
            document.getElementById("marca").value = '';
            document.getElementById("precio").value = '';
            document.getElementById("cantidad").value = '';

           
                //Modificar
                document.querySelectorAll(".modificar").forEach(e =>
                    e.addEventListener("click", () => {

                        
                    })
                )

            

        })
    );

    //===== Conversión
    document.querySelectorAll(".conversion").forEach(e =>
        e.addEventListener("click", () => {

            var valor_dato = document.getElementById("val-conversion").value;
            var tamaño_dato = document.getElementById("tamaño-dato").value;
            var tamaño_conversion = document.getElementById("tamaño-conversion").value;
            
            switch (parseInt(tamaño_dato)) {
                case 1:
                  
                    if (tamaño_conversion == 1) {
                        document.getElementById("resul-conversion").value = valor_dato;
                     } 
                     else if(tamaño_conversion == 2){
                        document.getElementById("resul-conversion").value = valor_dato*0.001;
                     }
                     else if(tamaño_conversion == 3){
                        document.getElementById("resul-conversion").value = valor_dato*1e-6;
                     }
                     else if(tamaño_conversion == 4){
                        document.getElementById("resul-conversion").value = valor_dato* 1e-9;
                     }
                     else if(tamaño_conversion == 5){
                        document.getElementById("resul-conversion").value = valor_dato* 1e-12;
                     }
                     else{
                        document.getElementById("resul-conversion").value = 'No es posible la conversión'
                    }
                  
                  break;
                case 2:
                    
                    if (tamaño_conversion == 1) {
                        document.getElementById("resul-conversion").value = valor_dato*1000;
                     } 
                     else if(tamaño_conversion == 2){
                        document.getElementById("resul-conversion").value = valor_dato;
                     }
                     else if(tamaño_conversion == 3){
                        document.getElementById("resul-conversion").value = valor_dato*0.001    ;
                     }
                     else if(tamaño_conversion == 4){
                        document.getElementById("resul-conversion").value = valor_dato* 1e-6;
                     }
                     else if(tamaño_conversion == 5){
                        document.getElementById("resul-conversion").value = valor_dato* 1e-9;
                     }
                     else{
                        document.getElementById("resul-conversion").value = 'No es posible la conversión'
                    }
                    break;
                case 3: 
                    if (tamaño_conversion == 1) {
                        document.getElementById("resul-conversion").value = valor_dato*1e+6;
                    } 
                    else if(tamaño_conversion == 2){
                        document.getElementById("resul-conversion").value = valor_dato*1000;
                    }
                    else if(tamaño_conversion == 3){
                        document.getElementById("resul-conversion").value = valor_dato;
                    }
                    else if(tamaño_conversion == 4){
                        document.getElementById("resul-conversion").value = valor_dato* 0.001;
                    }
                    else if(tamaño_conversion == 5){
                        document.getElementById("resul-conversion").value = valor_dato* 1e-6;
                    }
                    else{
                        document.getElementById("resul-conversion").value = 'No es posible la conversión'
                    }
                    break;               
                case 4:
                    if (tamaño_conversion == 1) {
                        document.getElementById("resul-conversion").value = valor_dato*1e+9;
                    } 
                    else if(tamaño_conversion == 2){
                        document.getElementById("resul-conversion").value = valor_dato*1e+6;
                    }
                    else if(tamaño_conversion == 3){
                        document.getElementById("resul-conversion").value = valor_dato*1000;
                    }
                    else if(tamaño_conversion == 4){
                        document.getElementById("resul-conversion").value = valor_dato;
                    }
                    else if(tamaño_conversion == 5){
                        document.getElementById("resul-conversion").value = valor_dato* 0.001;
                    }
                    else{
                        document.getElementById("resul-conversion").value = 'No es posible la conversión'
                    }
                    break;
                case 5:
                    if (tamaño_conversion == 1) {
                        document.getElementById("resul-conversion").value = valor_dato*1.1e+12;
                    } 
                    else if(tamaño_conversion == 2){
                        document.getElementById("resul-conversion").value = valor_dato*1.1e+9;
                    }
                    else if(tamaño_conversion == 3){
                        document.getElementById("resul-conversion").value = valor_dato*1.1e+6;
                    }
                    else if(tamaño_conversion == 4){
                        document.getElementById("resul-conversion").value = valor_dato*1099.51;
                    }
                    else if(tamaño_conversion == 5){
                        document.getElementById("resul-conversion").value = valor_dato;
                    }
                    else{
                        document.getElementById("resul-conversion").value = 'No es posible la conversión'
                    }
                    break;
                default:
                    document.getElementById("resul-conversion").value = 'No es posible la conversión'
              }
        })
    );
    //===== Prealoder

    window.onload = function () {
        window.setTimeout(fadeout, 500);
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }


    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.getElementById("header_navbar");
        var sticky = header_navbar.offsetTop;



        // show or hide the back-top-top button
        var backToTo = document.querySelector(".back-to-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "block";
        } else {
            backToTo.style.display = "none";
        }
    };





    //===== close navbar-collapse when a  clicked
    let navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector(".navbar-collapse");

    navbarToggler.addEventListener('click', () => {
        navbarToggler.classList.toggle('active')
    })

    document.querySelectorAll(".page-scroll").forEach(e =>
        e.addEventListener("click", () => {
            navbarToggler.classList.remove("active");
            navbarCollapse.classList.remove('show')
        })
    );



    //WOW Scroll Spy
    var wow = new WOW({
        //disabled for mobile
        mobile: false
    });
    wow.init();


    // ====== scroll top js
    function scrollTo(element, to = 0, duration = 1000) {

        const start = element.scrollTop;
        const change = to - start;
        const increment = 20;
        let currentTime = 0;

        const animateScroll = (() => {

            currentTime += increment;

            const val = Math.easeInOutQuad(currentTime, start, change, duration);

            element.scrollTop = val;

            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        });

        animateScroll();
    };

    Math.easeInOutQuad = function (t, b, c, d) {

        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    document.querySelector('.back-to-top').onclick = function () {
        scrollTo(document.documentElement);
    }




})();