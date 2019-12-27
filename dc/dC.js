let obj = {};
fetch("/dc/dC.json")
  .then(response => response.json())
  .then(json => (obj = json));

  searchFunc = () => {
    let getResultDiv = document.getElementById("result");
    let dC = document.getElementById("dC").value;
    getResultDiv.innerHTML = Object.entries(obj[dC.toLowerCase()]);
    if (dC in obj)
    // checks if json is present and contains necessary values
    emptyForm = () => {
      let dC = document.getElementById("dC").value;
      if (dC === "") {
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
  
