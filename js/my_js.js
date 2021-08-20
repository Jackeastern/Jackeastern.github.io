async function loadFileAndPrintToConsole(url) {
    try {
      const response = await fetch(url);
      const data_raw = await response.text();
      const about_array = data_raw.split('\n');
      var data = "";
      console.log(about_array)
      for(var line = 0; line < about_array.length; line++){
        data = data + "<p>" + about_array[line].replace("\n", "") + "</p>";
      }
      document.getElementById("about_me").innerHTML = data;
      console.log(data);
    } catch (err) {
      console.error(err);
      console.log("Check about file");
    }
  }
loadFileAndPrintToConsole("https://jacquesoostenbrink.co.za/aboutme.txt")