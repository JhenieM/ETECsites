document.getElementById("mudar-tema").addEventListener("click",function(){const a=document.body,b=document.querySelector(".container"),c=document.querySelector(".header"),d=document.querySelector(".container-content"),e=document.querySelector(".content-header"),f=document.querySelector(".footer-content");a.classList.toggle("light"),a.classList.toggle("dark"),b.classList.toggle("dark"),c.classList.toggle("dark"),d.classList.toggle("dark"),e.classList.toggle("dark"),f.classList.toggle("dark")});const mudarTema=document.getElementById("mudar-tema");mudarTema.addEventListener("click",function(){const a=mudarTema.getAttribute("src"),b=a.includes("tema-claro.png")?"IMG/tema-escuro.png":"IMG/tema-claro.png";mudarTema.setAttribute("src",b),mudarTema.style.width="40px",mudarTema.style.height="auto"});