initModal();
initProductoForm();
initContactoForm();


// ========================
// MODAL PRODUCTO
// ========================

function initModal(){

  const modal = document.getElementById("modalCompra");
  const btn = document.getElementById("openModal");
  const close = document.querySelector(".close");

  if(!modal || !btn || !close) return;

  btn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  close.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if(e.target === modal){
      modal.style.display = "none";
    }
  });

}


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
      email: form.email.value
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
      telefono: form.telefono.value
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