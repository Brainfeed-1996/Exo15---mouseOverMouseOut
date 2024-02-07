const changerCouleurH1 = document.querySelector("h1");
changerCouleurH1.addEventListener("mouseover", () => {
  changerCouleurH1.style.backgroundColor = "red";
});

changerCouleurH1.addEventListener("mouseout", () => {
  changerCouleurH1.style.backgroundColor = "white";
  alert("Attention je change de couleur");
});

console.log(changerCouleurH1);
