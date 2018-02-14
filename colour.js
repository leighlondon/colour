(function() {

  function zeropad(n) {
    return n < 10 ? '0' + n : '' + n;
  }

  function formatTimestamp(date) {
    let h = zeropad(date.getHours());
    let m = zeropad(date.getMinutes());
    let s = zeropad(date.getSeconds());
    return [h, m, s].join(':');
  }

  function tick() {
    let timestamp = formatTimestamp(new Date());
    let color = timestamp.split(':').join('');
    document.getElementById("timestamp").innerText = timestamp;
    document.body.style.backgroundColor = color;
  }

  function main() {
    setInterval(tick, 1000);
  }

  main();
})();
