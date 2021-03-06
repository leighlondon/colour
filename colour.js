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
  const zeropad = n => {
    return n < 10 ? "0" + n : n;
  };

  const to_hms = date => {
    let h = zeropad(date.getHours());
    let m = zeropad(date.getMinutes());
    let s = zeropad(date.getSeconds());
    return [h, m, s];
  };

  const tick = () => {
    let hms = to_hms(new Date());
    let colour = "#" + hms.join("");
    let meta = document.querySelector("meta[name=theme-color]");
    if (meta !== null ) meta.setAttribute("content", colour);
    document.body.style.backgroundColor = colour;
    document.getElementById("timestamp").innerText = hms.join(":");
  };

  const main = () => {
    tick();
    setInterval(tick, 1000);
  };
  main();
})();
