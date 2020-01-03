let obj = {};
fetch("/abbre/abbreviations.json")
  .then(response => response.json())
  .then(json => (obj = json));

  searchFunc = () => {
    let getResultDiv = document.getElementById("result");
    let abbreviations = document.getElementById("abbreviations").value;
    getResultDiv.innerHTML = Object.entries(obj[abbreviations.toLowerCase()]);
    if (abbreviations in obj)
    // checks if json is present and contains necessary values
    emptyForm = () => {
      let abbreviations = document.getElementById("abbreviations").value;
      if (abbreviations === "") {
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
  

  