/*let obj = {};
fetch("/sby/sby.json")
  .then(response => response.json())
  .then(json => (obj = json));*/

  searchFunc = () => {
    let getResultDiv = document.getElementById("result");
    let start = moment(document.getElementById("start").value, "Hm").toDate() / 60000;
    console.log(start)
    let end = moment(document.getElementById("end").value, "Hm").toDate() / 60000;
    console.log(end)
    let result = end - start;
    console.log(result)
   
    getResultDiv.innerHTML = "time: " + result / 4 + " minutes"    
    
    
    
    
    /*emptyForm = () => {
      let standBy = document.getElementById("standBy").value;
      if (standBy === "") {
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
    emptyForm();*/
  };