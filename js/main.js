document.querySelectorAll(".btnDetail").forEach((item) => {
  item.addEventListener("click", (e) => {
    let parent = e.target.parentNode.parentNode;

    let image = parent.querySelector(".card-img-top").src;
    let price = parent.querySelector(".price").innerHTML;
    let title = parent.querySelector(".card-text").innerHTML;
    let description = parent.querySelector(".description") ? parent.querySelector(".description").innerHTML : "<i>no information available</i>";
    // console.log(`description: ${description}`);

    let buttonModal = document.querySelector(".btnModal");
    buttonModal.click();

    document.querySelector(".modalTitle").innerHTML = title;
    let images = document.createElement("img");
    images.src = image;
    images.classList.add("w-100");
    document.querySelector(".modalImage").innerHTML = "";
    document.querySelector(".modalImage").appendChild(images);
    document.querySelector(".modalDescription").innerHTML = description;
    document.querySelector(".modalPrice").innerHTML = price;

    // 62857123123
    const nohp = '6287882770761';
    let message = `https://api.whatsapp.com/send?phone=${nohp}&text=Assalamualaikum, saya mau tanya produk ini ${image}`;

    document.querySelector('.btnBuy').href = message;
  });
});
