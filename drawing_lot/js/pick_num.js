const pick_num_form = document.querySelector(".pick_num_form");
const total_ppl = document.getElementById("total_ppl");
const pick_num_res = document.querySelector(".pick_num_res");
const num_btn = document.querySelector(".num_btn");
const stopBtn = document.querySelector(".stop");

function handleNumSubmit() {
  pick_num_res.style.color = "black";
  let totalNum = total_ppl.value;
  let random = Math.floor(Math.random() * totalNum);

  pick_num_res.innerHTML = random;

  T = setTimeout(handleNumSubmit, 30);
}

num_btn.addEventListener("click", handleNumSubmit);
stopBtn.addEventListener("click", () => {
  clearTimeout(T);
  pick_num_res.style.color = "#47b8e0";
});
