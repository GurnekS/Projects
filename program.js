//SDEV117
// 	Dataset assigment
// 	Author: Gurnek Singh
// 	11/16/21
//get access to our buttons
let previous = document.getElementById("previous");
let next = document.getElementById("next");


//the index of the current object shown
//on the web page
let index = 0;

//for testing purposes
console.log(dataArray);

//responds to clicks of the "previous" button
previous.onclick = function (event) {
    // index--;

    //make sure that index is never less than zero...
    if (index > 0) {
        index--;
        display();
    }
}

//responds to clicks of the "next" button
next.onclick = function (event) {

    //make sure that index is never greater than
    //array.length - 1
    if (index < dataArray.length - 1) {
        index++;
        display();
    }
}
function facts(){
    let lowestRatedGame = dataArray[0];
    let highestSellingGame = dataArray[0];
    let publisherCount = 0;
    for (let i = 0; i < dataArray.length-1; i++) {
        if(dataArray[i].Metrics["Review Score"] < lowestRatedGame.Metrics["Review Score"]){
            lowestRatedGame = dataArray[i];
        }
        if(dataArray[i].Metrics.Sales > highestSellingGame.Metrics.Sales){
            highestSellingGame = dataArray[i];
        }
        if(dataArray[i].Metadata.Publishers === "Nintendo"){
            publisherCount ++;
        }
    }
    console.log(publisherCount);
    console.log(lowestRatedGame);
    console.log(highestSellingGame);
    document.getElementById("publisherCount").innerText = publisherCount;
    document.getElementById("lowestReviewScore").innerText = lowestRatedGame.Metrics["Review Score"];
    document.getElementById("lowestRatedGameTitle").innerText = lowestRatedGame.Title;
    document.getElementById("highestSellingGame").innerText = highestSellingGame.Metrics.Sales;
    document.getElementById("mostSoldGame").innerText = highestSellingGame.Title;


}
facts();
//shows the current record in the array of records
//at the position within the index variable
function display() {
    console.log("Position #" + index);

    const currentVideoGame = dataArray[index];
    console.log(currentVideoGame.Metrics.Sales);

    document.getElementById("dataLength").innerText = dataArray.length + "";
    document.getElementById("gameTitle").innerText = currentVideoGame.Title;
    document.getElementById("year").innerText = currentVideoGame.Release.Year;
    document.getElementById("console").innerText = currentVideoGame.Release.Console;
    document.getElementById("price").innerText = currentVideoGame.Metrics["Used Price"];
    document.getElementById("publisher").innerText = currentVideoGame.Metadata.Publishers;
    document.getElementById("rating").innerText = currentVideoGame.Release.Rating;
    document.getElementById("sales").innerText = currentVideoGame.Metrics.Sales;
}

display();