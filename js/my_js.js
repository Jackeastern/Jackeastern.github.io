async function loadFileAndPrintToConsole(url) {
    try {
      const response = await fetch(url);
      const data_raw = await response.text();
      const about_array = data_raw.split('\n');
      var data = "";
      for(var line = 0; line < about_array.length; line++){
        if (line != about_array.length -1){
          data = data + "<p class=\"about_me\">" + about_array[line].slice(0,-2) + "</p>";
        }
        else{
          data = data + "<p class=\"about_me\">" + about_array[line] + "</p>";
        }
      }
      document.getElementById("about_me").innerHTML = data;
      console.log(data);
    } catch (err) {
      console.error(err);
      console.log("Check about file");
    }
  }
loadFileAndPrintToConsole("https://jacquesoostenbrink.co.za/aboutme.txt")