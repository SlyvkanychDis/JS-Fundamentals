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
  };


  function makeRequest() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = xhr.responseText; 
        var books = JSON.parse(response);
        var authorsList = document.getElementById("authorsList");
        authorsList.innerHTML = "";
        for (var i = 0; i < books.length; i++) {
          var author = books[i].author;
          var listItem = document.createElement("li");
          listItem.innerHTML = author;
          authorsList.appendChild(listItem);
        }
      }
    };
    xhr.open("GET", "books.json", true);
    xhr.send(); 
  }