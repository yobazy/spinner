const animateSpinner = function(item, time) {
  setTimeout(() => {
    process.stdout.write('\r'+item+'   ');
  }, time);
}

animateSpinner('|', 100)
animateSpinner('/', 300)
animateSpinner('-', 500)
animateSpinner('\\', 700)
animateSpinner('|', 900)