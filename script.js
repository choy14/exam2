<script type="text/JavaScript">
var gr = new jsGraphics(document.getElementById("canvas"));
function circle(radius){
    this.radius = radius;
  // area method
    this.area = function ()
    {
        return Math.PI * this.radius * this.radius;
    };
    var c = new circle(3);
console.log('Area =', c.area().toFixed(2));
var circumference = 2 * Math.PI * radius;
  document.getElementById("circumf").innerHTML = circumference;
},
  function CalculateArea(){
        var radius =document.form1.txtRadius.value;
        document.write("<P>The area of the circle is " + (radius * radius * Math.PI) + "</p>");
        document.write("<P>The circumference of the circle is " + (2 * radius * Math.PI) + "</p>");
        Enter the radius of circle:
       <input type="text" name="txtRadius" size=10>
       <br>
       <input type="button" value="Calculate" onClick='CalculateArea();'>
       var area = Math.PI * Math.pow(radius,2);
  document.getElementById("cirarea").innerHTML = area;
},
  function volume_sphere()
 {
  var volume;
  var radius = document.getElementById('radius').value;
  radius = Math.abs(radius);
  volume = (4/3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(4);
  document.getElementById('volume').value = volume;
  return false;
 }
window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
},
var circle = prompt("Enter a number");
console.log(circle);
document.getElementById("one").innerHTML =msg;
} else {
  alert("You did not enter a valid number.");
}
