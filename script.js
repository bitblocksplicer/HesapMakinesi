//alert(1)
function merhaba() {
  
  //console.log(document.getElementById("snumber").value)
  //console.log(document.getElementById("snumber").value.toString())
  
    var sonucumuz=       eval(document.getElementById("snumber").value.toString());
  
    document.getElementById("sonuc").innerHTML = "Sonuç: "+sonucumuz;

}

