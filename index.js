const starRating = document.getElementById("star-rating")
const oneStar = document.querySelector(".one")
const twoStar = document.querySelector(".two")
const threeStar = document.querySelector(".three")
const fourStar = document.querySelector(".four")
const fiveStar = document.querySelector(".five")

let objectName = {oneStar, twoStar, threeStar, fourStar, fiveStar}

function displayStar(star){
    star.addEventListener("click", function(){
        for(elements in objectName){
            if(objectName[elements] == star && star.className == "one"){
                starRating.innerHTML = `<div id="star" class="one-star">
                    <img src="./images/icon-star.svg" alt="">
                </div>
                <div id="star" class="two-star">
                </div>
                <div id="star" class="three-star"></div>
                <div id="star" class="four-star"></div>
                <div id="star" class="five-star"></div>`
            }else if(objectName[elements] == star && star.className == "two"){
                starRating.innerHTML = `<div id="star" class="one-star">
                    <img src="./images/icon-star.svg" alt="">
                </div>
                <div id="star" class="two-star">
                    <img src="./images/icon-star.svg" alt="">
                </div>
                <div id="star" class="three-star"></div>
                <div id="star" class="four-star"></div>
                <div id="star" class="five-star"></div>`
            }else if(objectName[elements] == star && star.className == "three"){
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
            }else if(objectName[elements] == star && star.className == "four"){
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
            }else if(objectName[elements] == star && star.className == "five"){
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
            }
        }
    })
}

displayStar(oneStar)
displayStar(twoStar)
displayStar(threeStar)
displayStar(fourStar)
displayStar(fiveStar)

console.log(starRating)