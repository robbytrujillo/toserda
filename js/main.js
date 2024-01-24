document.querySelectorAll(".btnDetail").forEach((item) => {
  item.addEventListener("click", (e) => {
    let parent = e.target.parentNode.parentNode;

    let image = parent.querySelector(".card-img-top").src;
    let price = parent.querySelector(".price").innerHTML;
    let title = parent.querySelector(".card-text").innerHTML;
    console.log(`title: ${title}`);
  });
});