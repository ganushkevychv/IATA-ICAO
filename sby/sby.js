
  searchFunc = () => {
    let getResultDiv = document.getElementById("result");
    let start = moment(document.getElementById("start").value, "Hm").toDate() / 60000;
    console.log(start)
    let end = moment(document.getElementById("end").value, "Hm").toDate() / 60000;
    console.log(end)
    let result = end - start;
    console.log(result)
    getResultDiv.innerHTML = "time: " + result / 4 + " minutes"
    
  }   