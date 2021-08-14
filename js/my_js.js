async function loadFileAndPrintToConsole(url) {
    try {
      const response = await fetch(url);
      const data = await response.text();
      document.getElementById("about_me").innerHTML = data;
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }
loadFileAndPrintToConsole("https://jacquesoostenbrink.co.za/aboutme.txt")