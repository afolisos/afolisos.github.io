const main = document.getElementById("main");

function getBusRoute() {
  let busRoute = document.getElementById("busroute").value; // Your code here

  if ((typeof busRoute !== "undefined") & (busRoute !== "")) {
    let busRouteURL = "https://api.umd.io/v0/bus/routes/" + busRoute; // Your code here

    fetch(busRouteURL)
      .then((response) => {
        return response.json();
      })
      .then((route) => {
        console.log(busRouteURL);
        sessionStorage.setItem("title", route.title);
        sessionStorage.setItem("lat_max", route.lat_max);
        sessionStorage.setItem("lat_min", route.lat_min);
        sessionStorage.setItem("lon_max", route.lon_max);
        sessionStorage.setItem("lon_min", route.lon_min);
        main.innerHTML = "Session Saved";
      })
      .catch((err) => {
        console.log(err);
        main.innerHTML = "Invalid bus route";
      });
      
  } else {
    sessionStorage.setItem("title", "No value provided");
    sessionStorage.setItem("lat_max", "No value provided");
    sessionStorage.setItem("lat_min", "No value provided");
    sessionStorage.setItem("lon_max", "No value provided");
    sessionStorage.setItem("lon_min", "No value provided");
    main.innerHTML = "No value provided";
  }
}
