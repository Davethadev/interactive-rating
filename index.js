const starRating = document.getElementById("star-rating")
const oneStar = document.querySelector(".one")
const twoStar = document.querySelector(".two")
const threeStar = document.querySelector(".three")
const fourStar = document.querySelector(".four")
const fiveStar = document.querySelector(".five")
const select = document.getElementById("selection")
const objectName = {oneStar, twoStar, threeStar, fourStar, fiveStar}
const submitButton = document.getElementById("submit-btn")
localStorage.setItem("number", null)
// let numberSelected = JSON.parse(localStorage.getItem("number"))
// console.log(numberSelected)

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
                // localStorage.removeItem(in DOMString "number")
                localStorage.clear()
                localStorage.setItem("number", "1")
                // numberSelected = localStorage.getItem("number")
                // numberSelected = JSON.parse(localStorage.getItem("number"))
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
                localStorage.clear()
                localStorage.setItem("number", "2")
                
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
                localStorage.clear()
                localStorage.setItem("number", "3")
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
                localStorage.clear()
                localStorage.setItem("number", "4")
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
                localStorage.clear()
                localStorage.setItem("number", "5")
            }
        }
    })
}
// Here's the problem, the local storage value is not changing in the
//console so that the displaySelcectedNumber function's if/else statement can work.
function displaySelectedNumber(submitBtn){
    submitBtn.addEventListener("click", function(){
        if(localStorage.getItem("number") == 1){
            select.innerHTML = `<p>You selected 1 out of 5</p>`
        }else if(localStorage.get("number") == 2){
            select.innerHTML = `<p>You selected 2 out of 5</p>`
        }
        // ...
    })
}

displayStar(oneStar)
displayStar(twoStar)
displayStar(threeStar)
displayStar(fourStar)
displayStar(fiveStar)

displaySelectedNumber(submitButton)
console.log(localStorage.getItem("number"))
