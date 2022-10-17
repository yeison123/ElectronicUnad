(function () {
    $(document).ready(calcular)
    console.log("Hola")
});

  function calcular() {
  
    
  
    //Calculadora
    $("#calculadora").on("click", function (event) {
      console.log("Hola")
    });
    //   event.preventDefault();
    //   event.preventDefault();
    //   event.stopPropagation();
    //   event.stopImmediatePropagation();
  
    //   var id_rad_nuevo_fac = $("#id_rad_nuevo_fac").val();
    //   var id_fac_nuevo = $("#id_fac_nuevo").val();
    //   var nuevo_prefijo = $("#nuevo_prefijo").val();
    //   var nuevo_numero = $("#nuevo_numero").val();
    //   var tipo_actualizacion = 'numero_factura';
  
    //   tokent = $('meta[name=csrf-token]').attr('content');
  
    //   $.ajax({
    //     url: 'actualizar_facturas/',
    //     method: 'POST',
    //     dateType: 'json',
    //     data: {
    //       "_token": tokent,
    //       "id_rad_nuevo_fac": id_rad_nuevo_fac,
    //       "id_fac_nuevo": id_fac_nuevo,
    //       "nuevo_prefijo": nuevo_prefijo,
    //       "nuevo_numero": nuevo_numero,
    //       "tipo_actualizacion": tipo_actualizacion
    //     }
    //   }).done(function (response) {
    //     $('span.err_actu_num_id_rad_nuevo_fac').text('');
    //     $('span.err_actu_num_id_fac_nuevo').text('');
    //     $('span.err_actu_num_nuevo_numero').text('');
  
    //     if (response.error) {
    //       $.each(response.error, function (prefix, val) {
    //         $('span.err_actu_num_' + prefix).text(val[0]);
    //       })
    //     } else {
    //       response.forEach(function (item) {
    //         $("#res-new-num-fac").html(item.actualizar_numero_factura)
    //       });
    //     }
    //   });
    // });
  
  
  }