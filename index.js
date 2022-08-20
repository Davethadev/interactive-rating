const starRating = document.getElementById("star-rating")
const oneRate = document.querySelector(".one")
const twoRate = document.querySelector(".two")
const threeRate = document.querySelector(".three")
const fourRate = document.querySelector(".four")
const fiveRate = document.querySelector(".five")

oneRate.addEventListener("click", function () {
    starRating.innerHTML = `<div id="star" class="one-star">
                    <img src="./images/icon-star.svg" alt="">
                </div>
                <div id="star" class="two-star">
                </div>
                <div id="star" class="three-star"></div>
                <div id="star" class="four-star"></div>
                <div id="star" class="five-star"></div>`
})
twoRate.addEventListener("click", function () {
    starRating.innerHTML = `<div id="star" class="one-star">
                    <img src="./images/icon-star.svg" alt="">
                </div>
                <div id="star" class="two-star">
                    <img src="./images/icon-star.svg" alt="">
                </div>
                <div id="star" class="three-star"></div>
                <div id="star" class="four-star"></div>
                <div id="star" class="five-star"></div>`
})
threeRate.addEventListener("click", function () {
    starRating.innerHTML = `<div id="star" class="one-star">
                    <img src="./images/icon-star.svg" alt="">
                </div>
                <div id="star" class="two-star">
                    <img src="./images/icon-star.svg" alt="">
                </div>
                <div id="star" class="three-star">
                    <img src="./images/icon-star.svg" alt="">
                </div>
                <div id="star" class="four-star"></div>
                <div id="star" class="five-star"></div>`
})
fourRate.addEventListener("click", function () {
    starRating.innerHTML = `<div id="star" class="one-star">
                    <img src="./images/icon-star.svg" alt="">
                </div>
                <div id="star" class="two-star">
                    <img src="./images/icon-star.svg" alt="">
                </div>
                <div id="star" class="three-star">
                    <img src="./images/icon-star.svg" alt="">
                </div>
                <div id="star" class="four-star">
                    <img src="./images/icon-star.svg" alt="">
                </div>
                <div id="star" class="five-star"></div>`
})
fiveRate.addEventListener("click", function () {
    starRating.innerHTML = `<div id="star" class="one-star">
                    <img src="./images/icon-star.svg" alt="">
                </div>
                <div id="star" class="two-star">
                    <img src="./images/icon-star.svg" alt="">
                </div>
                <div id="star" class="three-star">
                    <img src="./images/icon-star.svg" alt="">
                </div>
                <div id="star" class="four-star">
                    <img src="./images/icon-star.svg" alt="">
                </div>
                <div id="star" class="five-star">
                    <img src="./images/icon-star.svg" alt="">
                </div>`
})