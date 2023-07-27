
// function increment1(){
      
// }
// function increment2(){
//     console.log("+2")
// }
// function increment3(){
//     console.log("+3")
// }
    let homeScoreBtnOne = document.getElementById("home-score-btn-1")
    let homeScoreEl =document.getElementById("home-score")
    let homeScore = 0

   function increaseHomeScoreOne(){
     homeScore += 1
     homeScoreEl.textContent = homeScore
   }


   let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
   let homeScore2 = 1 //Change this to homeScore += 1
 
   function increaseHomeScoreTwo(){
     homeScore += 2 //Change this to homeScore += 2
     homeScoreEl.textContent = homeScore //Change this to homeScoreEl.textContent = homeScore
   }


let homeScoreBtnThree = document.getElementById("home-score-btn-3")
    let homeScore3 = 1

   function increaseHomeScoreThree(){
     homeScore += 3
     homeScoreEl.textContent = homeScore
   }

   let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
    let guestScoreEl =document.getElementById("guest-score")
    let guestScore = 0

   function increaseGuestScoreOne(){
     guestScore += 1
     guestScoreEl.textContent = guestScore
   }

    let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")
    let guestScore2 = 1

   function increaseGuestScoreTwo(){
     guestScore += 2
     guestScoreEl.textContent = guestScore 
    }

    let guestScoreBtnThree = document.getElementById("guest-score-btn-3")
    let guestScore3 = 1

   function increaseGuestScoreThree(){
     guestScore += 3
     guestScoreEl.textContent = guestScore
   }

   let newGameBtn = document.getElementById("new-game")
   let newGame1 = 0

   function newGame(){
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
   }
