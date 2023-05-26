let box = document.getElementById("box2");
console.log(box);
// box.onclick = function () {
//
// }
box.onclick = () => {
  box.classList.toggle("boxSelected");
};
