/*
 *       ___         ___                     ___         ___         ___
 *      /\__\       /\  \                   /\  \       /\  \       /\  \
 *     /:/  /      /::\  \                 /::\  \      \:\  \     /::\  \
 *    /:/  /      /:/\:\  \               /:/\:\  \      \:\  \   /:/\:\__\
 *   /:/  /  ___ /:/  \:\  \ ___     ___ /:/  \:\  \ ___  \:\  \ /:/ /:/  /
 *  /:/__/  /\__/:/__/ \:\__/\  \   /\__/:/__/ \:\__/\  \  \:\__/:/_/:/__/___
 *  \:\  \ /:/  \:\  \ /:/  \:\  \ /:/  \:\  \ /:/  \:\  \ /:/  \:\/:::::/  /
 *   \:\  /:/  / \:\  /:/  / \:\  /:/  / \:\  /:/  / \:\  /:/  / \::/~~/~~~~
 *    \:\/:/  /   \:\/:/  /   \:\/:/  /   \:\/:/  /   \:\/:/  /   \:\~~\
 *     \::/  /     \::/  /     \::/  /     \::/  /     \::/  /     \:\__\
 *      \/__/       \/__/       \/__/       \/__/       \/__/       \/__/
 */
(() => {
  function zeropad(n) {
    return n < 10 ? "0" + n : n;
  }

  function to_hms(date) {
    let h = zeropad(date.getHours());
    let m = zeropad(date.getMinutes());
    let s = zeropad(date.getSeconds());
    return [h, m, s];
  }

  function tick() {
    let hms = to_hms(new Date());
    document.getElementById("timestamp").innerText = hms.join(":");
    document.body.style.backgroundColor = "#" + hms.join("");
  }

  function main() {
    tick();
    setInterval(tick, 1000);
  }
  main();
})();
