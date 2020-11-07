// Get saved data from sessionStorage
let title = sessionStorage.getItem("title"); // Your code here
let lat_max = sessionStorage.getItem("latMax");
let lat_min =sessionStorage.getItem ("latMin");
let lon_max =sessionStorage.getItem ("lonMax");
let lon_min = sessionStorage.getItem("lonMin");

// Your code here
// Set the corresponding <p> elements in the GetSessionData.html page with the values from above
document.getElementById("title").innerHTML = title;
document.getElementById("latMax").innerHTML = lat_max;
document.getElementById("latMin").innerHTML = lat_min;
document.getElementById("lonMax").innerHTML = lon_max;
document.getElementById("lonMin").innerHTML = lon_min;
