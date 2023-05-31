function makeRequest() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = xhr.responseText;
        var button = document.getElementById("myButton");
        button.innerHTML = response;
      }
    };
    xhr.open("GET", "server.php", true); 
    xhr.send(); 
  }