let cardsName = [];
let buttonList = [[],[]];
let coverList = [[],[]];

let cturn = false;
let creset = false;

let fcard = 0;
console.log(fcard)

gsap.to("#final", {
    opacity: 0,
});

function check(cardID, buttonID, coverID){
    if (cardsName[1] == undefined){
        //adding cards list and button list
        let buttonName = document.getElementById("name"+buttonID);
        gsap.to("#cover"+coverID, {
            y: -300,
            duration: 1.5,
            opacity: 0,
        });
        console.log("buttonID: "+buttonID)
        console.log("CoverID: "+coverID)
        console.log("CardID: "+cardID)
        if (buttonList[0][0] == undefined){
            buttonList[0][0] = buttonID
            coverList[0][0] = coverID
        }else{
            buttonList[1][0] = buttonID
            coverList[1][0] = coverID
        }
        buttonName.disabled = true;
        cardsName += cardID
        console.log(coverList)
        //checking if cards1 = cards2 and flip
        if (cardsName[1] != undefined){
            if (cardsName[0] == cardsName[1]){
                fcard += 1
                if (fcard == 8){
                    console.log("YOU WIN")
                    gsap.to("#final", {
                        opacity: 1,
                        duration: 2,
                    });
                }
                gsap.to("#name"+buttonList[0][0], {
                    y: -100,
                    duration: 1.5,
                    opacity: 0,
                });
                gsap.to("#name"+buttonList[1][0], {
                    y: -100,
                    duration: 1.5,
                    opacity: 0,
                });
                creset = true;
                setInterval(factReset, 3000);
            }else{
                cturn = true;
                setInterval(cardReturn, 2000);
                buttonName = document.getElementById("name"+buttonList[0][0]);
                buttonName.disabled = false;
                buttonName = document.getElementById("name"+buttonList[1][0]);
                buttonName.disabled = false;
            }
        }
    }
    
}

function cardReturn(){
    console.log(coverList)
    if (cturn == true){
        gsap.to("#cover"+coverList[0][0], {
        y: 0,
        duration: 1.5,
        opacity: 1,
        });
        gsap.to("#cover"+coverList[1][0], {
        y: 0,
        duration: 1.5,
        opacity: 1,
        });
        cardsName = [];
        buttonList = [[],[]];
        coverList = [[],[]];
        cturn = false;
    }
}

function factReset(){
    if (creset == true){
        cardsName = [];
        buttonList = [[],[]];
        coverList = [[],[]];
        creset = false;
    }
}