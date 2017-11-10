

window.onload=function(){

    
    //Counts how many times the user wins
    var wins = 0; 
    //Shows how many times the user has to guess
    var maxTries = 12;
    //this is the input displayed by user
    var currentTries = "";
    //calls get randomLetterFunction
    var randomWord = getRandomWord();
    var wordArray = splitWord(randomWord);
    var arrayOfBlanks = getArrayOfBlanks(wordArray);
    var blankCounter = arrayOfBlanks.length;
    var visibleImg = "";
    console.log(randomWord);
    

    //this inserts the values in the html at begininning when the pages loads
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("guessesLeft").innerHTML = maxTries;
    document.getElementById("guessesSoFar").innerHTML = currentTries;
    document.getElementById("hangmanWord").innerHTML = arrayOfBlanks.join("");

    //this is an event handler and it triggered whenever there is a key stroke
    document.addEventListener("keydown",function(e){
       var input=String.fromCharCode(e.keyCode);
        


        //maxTries goes down as keystrokes go up
        
        //if the input is not empty, put a comma after it. Else, don't put a comma after it. 
        if (currentTries !== ""){
            if (currentTries.toUpperCase().indexOf(input.toUpperCase()) == -1){
                maxTries--;
                currentTries = currentTries + ", " + input.toUpperCase();
                for (var i = 0; i <= wordArray.length; i++){
                    if (input == wordArray[i]){
                        arrayOfBlanks[i] = input;
                        blankCounter--;
                    }
                }
            }
        }
        else {
            currentTries = input.toUpperCase();
            maxTries--;
            for (var i = 0; i <= wordArray.length; i++){
                    if (input == wordArray[i]){
                        arrayOfBlanks[i] = input;
                        blankCounter--;
                    }
                }
        }

        

        if (blankCounter == 0){
            wins++;
            if (visibleImg !== ""){
                document.getElementById(visibleImg).className = "hidden";
            }
            visibleImg = randomWord.toLowerCase() + "Img";
            document.getElementById(visibleImg).removeAttribute("class");
            maxTries = 12;
            randomWord = getRandomWord();
            wordArray = splitWord(randomWord);
            arrayOfBlanks = getArrayOfBlanks(wordArray);
            blankCounter = arrayOfBlanks.length;
            currentTries = "";                
            console.log(randomWord);

        }
        else if (maxTries == 0){
            maxTries = 12;
            randomWord = getRandomWord();
            wordArray = splitWord(randomWord);
            arrayOfBlanks = getArrayOfBlanks(wordArray);
            blankCounter = arrayOfBlanks.length;
            currentTries = "";
            console.log(randomWord);

        }
        

        //change values in html based on the input        
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("guessesLeft").innerHTML = maxTries;
        document.getElementById("guessesSoFar").innerHTML = currentTries;
        document.getElementById("hangmanWord").innerHTML = arrayOfBlanks.join("");


    });



};
//possibleLetters is a string. Then it picks a character at random character from the string.
function getRandomWord (){
    var arrayOfWords = ["ARTICHOKES", "KITTIES", "BDUBS", "FRIENDS", "METRIC", 
                        "NINTENDO", "TACOS", "COKE", "POKEMON", "CIDER", 
                        "CHOCOLATE", "TRUFFLES", "NETFLIX", "THANKSGIVING"];
    
    return arrayOfWords[Math.floor(Math.random()*arrayOfWords.length)];
}

function splitWord (word){
    return word.split("");
}

function getArrayOfBlanks (wordArray){
    return wordArray.map(function(){
        return " _ "
    });
}




