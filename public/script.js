initModal();
initProductoForm();
initContactoForm();


// ========================
// MODAL PRODUCTO
// ========================
const elements = document.querySelectorAll('.fade-up');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const trigger = window.innerHeight - 80;

    if(top < trigger){
      el.classList.add('visible');
    }
  });
});


function initModal(){

  const botones = document.querySelectorAll("[data-modal]");

  botones.forEach(btn => {
    btn.addEventListener("click", () => {

      const modalId = btn.getAttribute("data-modal");
      const modal = document.getElementById(modalId);

      if(!modal) return;

      // SOLO si es el modal de producto
      const productoInput = modal.querySelector("#productoInput");
      const precioInput = modal.querySelector("#precioInput");

      if(productoInput && precioInput){
        productoInput.value = btn.dataset.producto || "";
        precioInput.value = btn.dataset.precio || "";
      }

      modal.classList.add("active");

      // cerrar modal (este sí corresponde a ESTE modal)
      const close = modal.querySelector(".close");

      close.addEventListener("click", () => {
        modal.classList.remove("active");
      });

      // click afuera
      window.addEventListener("click", (e) => {
        if(e.target === modal){
          modal.classList.remove("active");
        }
      });

    });
  });

}


/*
function initModal(){

  const modal = document.getElementById("modalCompra");
  const botones  = document.querySelectorAll(".openModal")
  const close = document.querySelector(".close");

  const productoInput = document.getElementById("productoInput")
  const precioInput = document.getElementById("precioInput")

  if(!modal || !botones || !close) return;
  botones.forEach(btn => {
    btn.addEventListener("click", () => {
      const producto = btn.dataset.producto
      const precio = btn.dataset.precio
      
      productoInput.value = producto
    precioInput.value = precio

    modal.classList.add("active")
  })
  })


  close.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  window.addEventListener("click", (e) => {
    if(e.target === modal){
       modal.classList.remove("active");
    }
  });

}

*/


document.addEventListener("DOMContentLoaded", () => {

const overlay = document.querySelector(".menu-overlay");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const body = document.body;

function toggleMenu(){

hamburger.classList.toggle("active");
navLinks.classList.toggle("active");
overlay.classList.toggle("active");
body.classList.toggle("menu-open");

}
hamburger.addEventListener("click", toggleMenu);

overlay.addEventListener("click", () => {

hamburger.classList.remove("active");
navLinks.classList.remove("active");
overlay.classList.remove("active");
body.classList.remove("menu-open");

});

});



// ========================
// FORM PRODUCTO
// ========================

function initProductoForm(){

  const form = document.getElementById("formProducto");

  if(!form) return;

  form.addEventListener("submit", async (e)=>{

    e.preventDefault();

    const data = {
      nombre: form.nombre.value,
      email: form.email.value,
      producto: form.producto.value,
      precio: form.precio.value

    };

    try{

      const res = await fetch("/api/producto",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      });

      const result = await res.json();

      alert(result.message);

      form.reset();

    }catch(err){

      console.error(err);

    }

  });

}

document.addEventListener("DOMContentLoaded", () => {
  initModal();
  initTurnoForm(); // 👈 ESTO ES LO QUE TE FALTA CASI SEGURO
});

function initTurnoForm(){

  const form = document.getElementById("formTurno");

  if(!form) return;

  form.addEventListener("submit", async (e)=>{

    e.preventDefault();

    const data = {
      nombre: form.nombre.value,
      email: form.email.value,
    };

    const res = await fetch("/api/turno",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    });

    const result = await res.json();

    alert(result.message);

  });

}


// ========================
// FORM CONTACTO
// ========================

function initContactoForm(){

  const form = document.getElementById("formCompleto");

  if(!form) return;

  form.addEventListener("submit", async (e)=>{

    e.preventDefault();

    const data = {
      nombre: form.nombre.value,
      email: form.email.value,
      mensaje: form.mensaje.value
    };

    const res = await fetch("/api/contacto",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
    });

    const result = await res.json();

    alert(result.message);

  });

}

window.addEventListener("scroll", () => {
  const parallax = document.querySelector(".parallax img");
  const offset = window.scrollY * 0.3;
  parallax.style.transform = `translateY(${offset}px)`;
});