let runScripts = () => {

    let chart_bars = document.getElementById( "chart-bars" )
    console.log( chart_bars )

    let icons  = document.getElementsByTagName( "i" )
    for(let icon of icons) {
        console.log(icon)
    }

    let cards = document.getElementsByClassName( "card" )
    for(let card of cards) {
        console.log(card)
    }

};

let modifyText = () => {
    let listOfP = document.getElementsByTagName( "p" )
    let elementP  = listOfP[3]
    elementP.innerHTML = 'Dinero actual'   

    let listOfH4 = document.getElementsByTagName( "h4" )
    let elementH4  = listOfH4[0]
    elementH4.innerHTML = '$301k'   


}


let UpdateData = () => { 
  let data = [{
    title: 'Usuarios actuales',
    value: '3,200'
  },
  {
    title: 'Nuevos clientes',
    value: '4,215'
  },
  {
    title: 'Ventas',
    value: '$121,520'
  }];  

  
  let [ users, clients, sales ] = data;

  
  let { title: title_users , value: value_users } = users;
  let { title: title_clients , value: value_clients } = clients;
  let { title: title_sales , value: value_sales } = sales;

   
  let message_users = `<p class="text-sm mb-0 text-capitalize">${title_users}</p><h4 class="mb-0">${value_users}</h4>`;
  let message_clients = `<p class="text-sm mb-0 text-capitalize">${title_clients}</p><h4 class="mb-0">${value_clients}</h4>`;
  let message_sales = `<p class="text-sm mb-0 text-capitalize">${title_sales}</p><h4 class="mb-0">${value_sales}</h4>`; 

  
  let listOfElements = document.getElementsByClassName('text-end pt-1') 

  
  let [ , second, third, fourth ] = listOfElements;

  
  second.innerHTML = message_users;
  third.innerHTML = message_clients;
  fourth.innerHTML = message_sales;
}


let UpdateIndicators = () => { 
    
    let cambios = [
        {
          valor_previo: 250,
          valor_actual: 301,
          mensaje_tiempo: 'que la semana anterior'
        },
        {
          valor_previo: 3510,
          valor_actual: 3200,
          mensaje_tiempo: 'que la semana anterior'
        },
        {
          valor_previo: 3920,
          valor_actual: 4215,
          mensaje_tiempo: 'que ayer'
        },
        {
          valor_previo: 110200,
          valor_actual: 121520,
          mensaje_tiempo: 'que ayer'
        }
      ];

      let [ monto,usuarios,clientes,ventas ] = cambios;

      let { valor_previo: valor_previo_monto , valor_actual: valor_actual_monto , mensaje_tiempo: mensaje_tiempo_monto } = monto;
      let { valor_previo: valor_previo_usuarios , valor_actual: valor_actual_usuarios , mensaje_tiempo: mensaje_tiempo_usuarios } = usuarios;
      let { valor_previo: valor_previo_clientes , valor_actual: valor_actual_clientes , mensaje_tiempo: mensaje_tiempo_clientes } = clientes;
      let { valor_previo: valor_previo_ventas , valor_actual: valor_actual_ventas , mensaje_tiempo: mensaje_tiempo_ventas } = ventas;



      let  porcentaje_de_cambio_monto =  ((valor_actual_monto - valor_previo_monto)*100/valor_previo_monto).toFixed(2) ;
      let  porcentaje_de_cambio_usuarios =  ((valor_actual_usuarios - valor_previo_usuarios)*100/valor_previo_usuarios).toFixed(2) ;
      let  porcentaje_de_cambio_clientes =  ((valor_actual_clientes - valor_previo_clientes)*100/valor_previo_clientes).toFixed(2) ;
      let  porcentaje_de_cambio_ventas =  ((valor_actual_ventas - valor_previo_ventas)*100/valor_previo_ventas).toFixed(2) ;

      




      let message_Monto = 
      `<p class="mb-0"><span class="text-sm ${porcentaje_de_cambio_monto < 0 ?  "text-danger" : "text-success"} font-weight-bolder">${porcentaje_de_cambio_monto}%</span>${mensaje_tiempo_monto}</p>`;

      let message_Usuarios = 
      `<p class="mb-0"><span class="text-sm ${porcentaje_de_cambio_usuarios < 0 ?  "text-danger" : "text-success"} font-weight-bolder">${porcentaje_de_cambio_usuarios}%</span>${mensaje_tiempo_usuarios}</p>`;

      let message_Clientes = 
      `<p class="mb-0"><span class="text-sm ${porcentaje_de_cambio_clientes < 0 ?  "text-danger" : "text-success"} font-weight-bolder">${porcentaje_de_cambio_clientes}%</span>${mensaje_tiempo_clientes}</p>`;

      let message_Ventas = 
      `<p class="mb-0"><span class="text-sm ${porcentaje_de_cambio_ventas < 0 ?  "text-danger" : "text-success"} font-weight-bolder">${porcentaje_de_cambio_ventas}%</span>${mensaje_tiempo_ventas}</p>`;

//${clase_cambio} text-danger /// text-success

      let listOfElements = document.getElementsByClassName('card-footer p-3') 


      let [ first , second, third, fourth ] = listOfElements


      first.innerHTML = message_Monto;
      second.innerHTML = message_Usuarios;
      third.innerHTML = message_Clientes;
      fourth.innerHTML = message_Ventas;
      /// clases mayusculas
      /// variables minisculas (Primera letra)
      /// porcentaje_de_cambio = (valor_actual - valor_previo)*100/valor_previo 

}

runScripts();

modifyText();

UpdateData();

UpdateIndicators();