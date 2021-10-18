function getNames(){
    var nameList = [];
    var name;
    var i = 0;
    name = prompt("What is one of the names");
    name = clean(name);
    while (name != "Q") {
        nameList[i] = name;
        i++;
        name = prompt("What is one of the names");
        name = clean(name);
    }
    return nameList;
}

function getInitials(names) {
    var initialList = [];
    for (var i=0;i<names.length;i++){ 
        initialList[i] = names[i].charAt(0).toLowerCase();
    }
    return initialList;
}

function initializeTotals(names){
    var totalsList = [];
    for (var i=0;i<names.length;i++){ 
        totalsList[i] = 0;
    }
    return totalsList;
}

function getItems(){
    let i = 0;
    while (!finishList){
        getOneItem(i);
        i++;
    }
}

var promptCount = 0;
function getItems2() {
    let currItem = prompt();
    if ((currItem.toLowerCase() == "q") || (finishList == true)) {
        finishList = true;
        return;
    }
}

function getOneItem(i){
    items[i] = prompt("What is the name of the item?");
    if (items[i] == "q"){
        finishList = true;
        return;
    }
    displayItemInList(items[i]);
    prices[i] = prompt("How much did the item cost?");
    displayPriceInList(prices[i]);
    sharedBy[i] = prompt("Who is it shared by?");
    displaySharedByInList(sharedBy[i]);
    document.write(sharedBy[i].length+"<br>")
}

function calculateTotals(){
    //for each person i in names
    for (var i=0; i < names.length; i++){
        //and for each item j in the items list
        for (var j=0; j < items.length; j++){
            //and for each letter k in the sharedBy string
            for (var k=0; k < getLength(sharedBy[j]); k++){
                //if that letter matches that persons initial
                if (initials[i] == sharedBy[j].charAt(k)){
                    //add the price/num people sharedBy to that person's total
                    totals[i] += prices[j] / (sharedBy[j].length);
                }
            }
        }
    }
}

function clean(name){
    name = name.toLowerCase();
    name = removeWhitespace(name);
    name = capFirstLetter(name);
    return name;
} 

function removeWhitespace(x) {
    return x.replace(/^\s+|\s+$/gm,'');
}

function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getLength(obj){
    if (typeof obj !== "undefined") { 
        return obj.length;
    }
    else{
        return 0;
    }
}