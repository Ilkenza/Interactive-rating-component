const sectionS1 = document.querySelector(".s1")
const sectionS2 = document.querySelector(".s2")
const btn = document.querySelectorAll('.btn');
const buttonsbmt = document.querySelector('.sb');
const select = document.querySelector('.sel');

buttonsbmt.addEventListener("click",() => {
    sectionS2.classList.remove("hidden")
    sectionS1.classList.add("display")
})

btn.forEach((bt) => {
    bt.addEventListener("click", () => {
        select.innerHTML = bt.innerHTML
    })
})
