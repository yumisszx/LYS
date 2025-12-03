const some1 = document.querySelector(".someCores");
const some2 = document.querySelector(".someEstilos");
const some3 = document.querySelector(".someCustomizados");

const ligarEDesligarADiv = function(){

    some1.style.display === "flex" ? some1.style.display = "none": some1.style.display = "flex";
    some2.style.display === "flex" ? some2.style.display = "none": some2.style.display = "flex";
    some3.style.display === "flex" ? some3.style.display = "none": some3.style.display = "flex";

};