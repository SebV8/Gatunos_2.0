//============================= Inicio funciones de requerimientos ================================
function Numeros(string){//Solo numeros
    var out = '';
    var filtro = '1234567890kK-';//Caracteres validos
  
    //Recorrer el texto y verificar si el caracter se encuentra en la lista de validos 
    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1) 
             //Se añaden a la salida los caracteres validos
       out += string.charAt(i);
  
    //Retornar valor filtrado
    return out;
}

function letras(string){//Solo numeros
    var out = '';
    var filtro = 'qwertyuiopñlkjhgfdsazxcvbnmQWERTYUIOPÑLKJHGFDSAZXCVBNM ';//Caracteres validos
  
    //Recorrer el texto y verificar si el caracter se encuentra en la lista de validos 
    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1) 
             //Se añaden a la salida los caracteres validos
       out += string.charAt(i);
  
    //Retornar valor filtrado
    return out;
}

function contacto(string){//Solo numeros
    var out = '';
    var filtro = '+1234567890 ';//Caracteres validos
  
    //Recorrer el texto y verificar si el caracter se encuentra en la lista de validos 
    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1) 
             //Se añaden a la salida los caracteres validos
       out += string.charAt(i);
  
    //Retornar valor filtrado
    return out;
}
//================================= Fin funciones de requerimiento ==============================










//================================ Inicio funcion cambio de ciudad ===================================
//Creamos variableas array para cada region
var region_Arica = ["Arica", "Camarones", "General Lagos", "Putre"];
var region_Antofagasta = ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollague", "Atacama", "Maria elena", "Tocopilla"];
var region_Atacama = ["Chañaral", "Diego de Almagro", "Caldera", "Copiapo","Tierra Amarilla","Alto del Carmen","Freirina","Huasco","Vallenar"];
var region_Coquimbo = ["Canela","Illapel","Los Vilos","Salamanca","Andacollo","Coquimbo","La Higuera","La Serena","Paihuano","Vicuña","Combarbala","Monte Patria","Ovalle","Punitaqui","Rio Hurtado"];
var region_Valparaiso = ["Isla de Pascua","Calle Larga","Los Andes","Rinconada","otras..."];
var region_Metropolitana = ["Santiago","Santiago2","Santiago3","Santiago4","Santiago5","Santiago6"];
var region_Ohiggins = ["Seleccione","Seleccione","Seleccione","Seleccione","Seleccione","Seleccione"];
var region_Maule = ["Maule1","Maule2","Maule3","Maule4","Maule5","Maule6","Maule7","Maule8"];
var region_BioBio = ["BioBio1","BioBio2","BioBio3","BioBio4","BioBio5","BioBio6"];
var region_LaAraucania = ["Araucania1","Araucania2","Araucania3","Araucania4"];
var region_LosLagos = ["Lagos1","Lagos2","Lagos3","Lagos4","Lagos5","Lagos6","Lagos7"];
var region_Aysen = ["Seleccione","Seleccione","Seleccione","Seleccione","Seleccione","Seleccione","Seleccione"];
var region_Magallanes = ["Magallanes1","Magallanes2","Magallanes3","Magallanes4"];
var region_LosRios = ["Rios1","Rios2","Rios3","Rios4","Rios5","Rios6","Rios7","Rios8"];



//Creamos la funcion para cambiar las opciones de ciudades depeniendo de la region seleccionada
function cambio_region(){
	var rgn = document.getElementById('regiones').value //Creamos una variable que guarde el valor "Value" de las opciones del select con ID=regiones
    
// verificamos si el Departamento está definido

if (rgn!=0) { 
      	 //si estaba definido, entonces coloco las opciones del Departamento correspondiente. 
      	 //selecciono el array del departamento adecuado 
      	 mis_ciudades=eval("region_" + rgn) 
      	  //calculo el numero de municipios 
      	 num_ciudades = mis_ciudades.length 
      	 //marco el número de municipios en el select 
      	 document.f1.ciudades.length = num_ciudades 
      	 //para cada municipio del array, lo introduzco en el select 
      	 for(i=0;i<num_ciudades;i++){ 
         	 document.f1.ciudades.options[i].value=mis_ciudades[i] 
         	 document.f1.ciudades.options[i].text=mis_ciudades[i] 
      	 }	
   	    }else{ 
      	 //si no había municipio seleccionado, elimino los municipios del select 
      	 document.f1.ciudades.length = 1 
      	 //coloco un guión en la única opción que he dejado 
      	 document.f1.ciudades.options[0].value = " " 
      	 document.f1.ciudades.options[0].text = "SIN ASIGNAR" 
   	} 
}
//=============================== Fin funcion de cambio de ciudad =====================================