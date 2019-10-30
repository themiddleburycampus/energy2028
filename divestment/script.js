function myFunction(name) {

  var x = document.getElementById(name);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }


}

function myFunction2(name) {

  var y = document.getElementById("full")
  y.style.display = "none"
  var z = document.getElementById("partial")
  z.style.display = "none"
  var w = document.getElementById("coal")
  w.style.display = "none"
  
  var x = document.getElementById(name);
  x.style.display = "block";
  console.log(name)
}