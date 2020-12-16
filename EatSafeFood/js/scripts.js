// POST method
function submitUser() {
    console.log("Called submitUser");
    
    let userNameParam = document.getElementById("userName").value;
    let restaurantNameParam = document.getElementById("restaurantName").value;
    let addressParam = document.getElementById("address").value;
    let cityParam = document.getElementById("city").value;
    let zipcodeParam = document.getElementById("zipcode").value;
    let dateParam = document.getElementById("date").value;
    let data = {'userName':userNameParam, 'restaurantName':restaurantNameParam, 'address': addressParam, 'city': cityParam, 'zipcode': zipcodeParam, 'date': dateParam};
    console.log(JSON.stringify(data))

    let userURL = "http://localhost:5000/users/";
    const fetchPromise = fetch(userURL,{ method:'POST', headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify(data)});
  
    fetchPromise
      .then((response) => {
        return response.json();
      })
      .then((user) => {
        console.log(user);
        if (user) {
          let userId = user._id;
          let userName = user.userName;
          let restaurantName = user.restaurantName;
          let address = user.address;
          let city = user.city;
          let zipcode = user.zipcode;
          let date = user.date;
          let message = "Id: " + userId + "<br>userName: " + userName + "<br>restaurantName: " + restaurantName + "<br>address: " + address + "<br>city: " + city + "<br>zipcode: " + zipcode + "<br>date: " + date; 
          document.getElementById("postUserContent").innerHTML = message; 
        }
    })
    .catch((err) => {
        console.log(err);
        document.getElementById("postUserContent").innerHTML = "Invalid user id: " + userIdParam;
    }); 
  }
  
  // GET method
  function getUser() {
      console.log("Called getUser");
    
      let userZipcode = document.getElementById("userZipcode").value;
      let userURL = "http://localhost:5000/users/" + userZipcode;
      const fetchPromise = fetch(userURL);
  
      fetchPromise
        .then((response) => {
          return response.json();
        })
        .then((user) => {
          console.log(user);
          // CONVERT JSON TO TABLE
          let col = [];
          for (let i = 0; i < user.length; i++) {
              for (let key in user[i]) {
                  if (col.indexOf(key) === -1) {
                      col.push(key);
                  }
              }
          }
          // CREATE DYNAMIC TABLE.
          let table = document.createElement("table");
  
          // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
          let tr = table.insertRow(-1);                   // TABLE ROW.
  
          for (let i = 0; i < col.length; i++) {
              let th = document.createElement("th");      // TABLE HEADER.
              th.innerHTML = col[i];
              tr.appendChild(th);
          }
  
          // ADD JSON DATA TO THE TABLE AS ROWS.
          for (let i = 0; i < user.length; i++) {
              tr = table.insertRow(-1);
              for (let j = 0; j < col.length; j++) {
                  let tabCell = tr.insertCell(-1);
                  tabCell.innerHTML = user[i][col[j]];
              }
          }
  
          // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
          let divContainer = document.getElementById("getUserContent");
          divContainer.innerHTML = "";
          divContainer.appendChild(table);
      })
      .catch((err) => {
          console.log(err);
          document.getElementById("getUserContent").innerHTML = "Invalid user zipcode: " + userZipcode;
      });
     
  }
  
  // POST method
  function updateUser() {
    console.log("Called updateUser");
    
    let updateUserNameParam = document.getElementById("updateUser").value;
    let updateRestaurantNameParam = document.getElementById("updateRestaurantName").value;
    let updateAddressParam = document.getElementById("updateAddress").value;
    let updateCityParam = document.getElementById("updateCity").value;
    let updateZipcodeParam = document.getElementById("updateZipcode").value;
    let updateDateParam = document.getElementById("updateDate").value;
    data = {'userName': updateUserNameParam, 'restaurantName':updateRestaurantNameParam, 'address':updateAddressParam, 'city':updateCityParam, 'zipcode':updateZipcodeParam, 'date':updateDateParam};
    console.log(JSON.stringify(data))


    let userURL = "http://localhost:5000/users/" + updateUserNameParam;
    const fetchPromise = fetch(userURL,{ method:'PUT', headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify(data)});
  
    fetchPromise
      .then((response) => {
        return response.json();
      })
      .then((user) => {
        console.log(user);
        let message = "";
        if (user) {
          let userName = data.userName;
          let restaurantName = data.restaurantName;
          let address = data.address;
          let city = data.city;
          let zipcode = data.zipcode;
          let date = data.date;
          message = "Your username is updated successfully" + "<br>userName: " + userName + "<br>restaurantName: " + restaurantName + "<br>address: " + address + "<br>city: " + city + "<br>zipcode: " + zipcode + "<br>date: " + date; 
        }
        document.getElementById("updatedUserContent").innerHTML = message;
    })
    .catch((err) => {
        console.log(err);
        document.getElementById("updatedUserContent").innerHTML = "Invalid userName: " + userNameParam;
    });
   
  }
  
  // DELETE method
  function deleteUser() {
    console.log("Called deleteUser");
  
    let deleteUserNameParam = document.getElementById("deleteUserName").value;
    console.log("userName:" + deleteUserNameParam);
    let userURL = "http://localhost:5000/users/" + deleteUserNameParam;
    const fetchPromise = fetch(userURL,{ method:'DELETE'});
  
    fetchPromise
      .then((response) => {
        return response.json();
      })
      .then((user) => {
        console.log(user);
        let message = "";
        if (user) {
          message = deleteUserNameParam + " is deleted"; 
        }
        document.getElementById("deleteUserContent").innerHTML = message;
    })
    .catch((err) => {
        console.log(err);
        document.getElementById("deleteUserContent").innerHTML = "Invalid username: " + userNameParam;
    });
  };

// Display POST method
function postShow() {
  let x = document.getElementById("getPost");
  if (x.style.display === 'none') {
    x.style.display = 'flex';
  } else {
    x.style.display = 'none';
  }
};

// Display GET method
function getShow() {
  let x = document.getElementById("getGet");
  if (x.style.display === 'none') {
    x.style.display = 'flex';
  } else {
    x.style.display = 'none';
  }
};

// Display PUT method
function putShow() {
  let x = document.getElementById("getPut");
  if (x.style.display === 'none') {
    x.style.display = 'flex';
  } else {
    x.style.display = 'none';
  }
};

// Display DELETE method
function deleteShow() {
  let x = document.getElementById("getDelete");
  if (x.style.display === 'none') {
    x.style.display = 'flex';
  } else {
    x.style.display = 'none';
  }
};
