let root=document.querySelector("#root");


let div_formularios=document.createElement("div");
div_formularios.className="div_formularios";

let formularios=[{nombre:"login",link:"componentes/login/login.html"},
    {nombre:"formulario De busqueda",link:"componentes/formularioDEbusqueda/busqueda.html"},
    {nombre:"formulario de reseñas",link:"componentes/formularioDeComentariosReseñas/reseñas.html"},
    {nombre:"formulario de contacto",link:"componentes/formularioDecontacto/contacto.html"},
    {nombre:"formulario de pedidoscompras",link:"componentes/formularioDepedidocompras/pedidos.html"},
    {nombre:"formulario de registropedidos",link:"componentes/formularioDeregistro/registro.html"}];
formularios.forEach(itemlista =>{
    alert("hola")


let item=document.createElement("a");

item.className="item";
item.href=itemlista.link;
item.innerText=itemlista.nombre;

div_formularios.appendChild(item);
});
root.appendChild(div_formularios);

