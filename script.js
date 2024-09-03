const res = document.getElementById("msg");

setInterval(() => {
  let date = new Date();
  res.innerHTML = date.toLocaleTimeString();
}, 1000);
