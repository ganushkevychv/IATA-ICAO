
  let timeSelection = document.getElementById("list");
  timeSelection.length = 0;
  
  let defaultOption = document.createElement("li");
  
  timeSelection.appendChild(defaultOption);
   
  
  fetch("/dc/dcList.json").then(function(response) {
    response.json().then(function(data) {
      let option;
  
      for (let i = 0; i < data.length; i++) {
        option = document.createElement("li");
        option.innerHTML = data[i].list;
        timeSelection.appendChild(option);
      }
    });
  });
  