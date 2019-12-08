let obj = {};
fetch("/airports/airports.json")
  .then(response => response.json())
  .then(json => (obj = json));

  searchFunc = () => {
    let getResultDiv = document.getElementById("result");
    let airports = document.getElementById("airports").value;
    getResultDiv.innerHTML = Object.entries(obj[airports.toLowerCase()]);
    if (airports in obj)
    // checks if json is present and contains necessary values
    emptyForm = () => {
      let airports = document.getElementById("airports").value;
      if (airports === "") {
        Swal.fire({
          title: "Error!",
          text: "You forgot to enter text",
          icon: "error",
          confirmButtonText: "OK"
        });
        return false;
      }
      return true;
    };
    emptyForm();
  };