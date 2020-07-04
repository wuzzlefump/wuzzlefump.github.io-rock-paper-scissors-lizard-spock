function myFunction(){

    var win =0;
    var lose=0;
    var tie=0;
    var yes=1;
    var no =0;
    
    // ||= or
    
    for (var i =0  ; i =1  ; i++ ) {
    
    var computerGuess =["rock","paper","scissors","lizard","spock"];
    
    var choose =prompt("choose 'r' for rock, 'p' for paper,  'sc' for scissors 'l' for lizard, or 'sp' for spock");
    
            
    
    
    
    choose = choose.toLowerCase();
    var num = Math.floor(Math.random() * computerGuess.length);
    
    console.log(num);
    
    
    alert ("the computer chose " + computerGuess[num]);
    
    
    
    
     
    
    if ((choose == "r" || choose == "p"|| choose =="sc"|| choose == "l"||choose == "sp")){
    
//win 1

        if((choose == "r" && num =="2") || (choose == "sc" && num == "1") || (choose == "p" && num =="0")){
            alert("You Win");
            win ++;
    
        }

// Victory 2

if((choose == "r" && num =="3") || (choose == "sc" && num == "3") || (choose == "p" && num =="4")){
    alert("victory");
    win ++;

}




// good job 3


if((choose == "l" && num =="4") || (choose == "sp" && num == "0") ){
    alert("winner");
    win ++;

}
// success 4


if((choose == "l" && num =="1") || (choose == "sp" && num == "2") ){
    alert("success");
    win ++;



}
//lose
    
        if ((choose == "r" && num =="1") || (choose == "sc" && num =="0") || (choose == "p" && num =="2")) {
    
            alert("You lose"); 
            lose ++;
         }
// lose 2


if ((choose == "r" && num =="4") || (choose == "sc" && num =="4") || (choose == "p" && num =="3")) {
    
    alert("You lost"); 
    lose ++;
 }


//lose 3

if ((choose == "l" && num =="2") || (choose == "sp" && num =="3")) {
    
    alert("defeat"); 
    lose ++;
 }




//lose 4

if ((choose == "l" && num =="0") || (choose == "sp" && num =="1")) {
    
    alert("no dice"); 
    lose ++;
}


//tie
    
         if ((choose == "r" && num =="0") || (choose == "sc" && num ==" 2") || (choose == "p" && num =="1")) {
    
    alert("You tie"); 
     tie++;
         }
// tie 2
    if ((choose == "l" && num =="3") || (choose == "sp" && num =="4")) {
    
    
    alert(" tie game"); 
     tie++;
         }





    
    
    
         var again= confirm("do you want to know the score?");
        i=0
        
    
    if (again){
     
        alert("the score was" + win + "-wins" + lose + "-losses" + tie + "-ties" );
        
    }
    
   
    
    
    
    
    }
    
    }
    
    }
    