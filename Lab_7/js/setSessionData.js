const main = document.getElementById("main");

function getClasses(){
    let busRoute = document.getElementById("busroute").value; // Your code here

    if(typeof busRoute !== "undefined" & busRoute !== ""){
        
        let busRouteURL =  "https://api.umd.io/v0/bus/routes/ + busRoute"; // Your code here

        // YOUR CODE HERE
        fetch(busRouteURL)
        .then((response) => {
            return response.json();
        })
        .then((route) => {
            console.log(busRouteURL);
            sessionStorage.setItem("title", route.title);
            sessionStorage.setItem("latMax", route.lat_max);
            sessionStorage.setItem("latMin", route.lat_min);
            sessionStorage.setItem("lonMax", route.lon_max);
            sessionStorage.setItem("lonMin",route.lon_min);
            main.innerHTML = "Session saved";
        }
        )

        
        
    }
    else{
        main.innerHTML = "No value provided";
    }
}