(function() {

  function formatTimestamp(date) {
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }

  function tick() {
    let timestamp = formatTimestamp(new Date());
    let color = timestamp.split(':').join('');
    let ts = document.getElementById("timestamp")
    ts.innerText = timestamp;
    ts.style.color = "white";
    document.body.style.backgroundColor = color;
    console.log(color);
  }

  function main() {
    setInterval(tick, 1000);
  }

  main();
})();
