
    var win = 0;
    var lose = 0;
    var choice;
    var computerChoice;
    var computerOptions =["Rock","Paper","Scissors","Lizard","Spock"]
    const Rock = "<i class='fas fa-hand-rock fa-7x'></i>"
    const Paper ="<i class='fas fa-hand-paper fa-7x'></i>"
    const Scissors ="<i class='fas fa-hand-scissors fa-7x'></i>"
    const Lizard ="<i class='fas fa-hand-lizard fa-7x'></i>"
    const Spock ="<i class='fas fa-hand-spock fa-7x'></i>"
    $(document).ready(function() {

        // doc functions

        // Check for click events on the navbar burger icon
        $(".navbar-burger").click(function() {
      
            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            $(".navbar-burger").toggleClass("is-active");
            $(".navbar-menu").toggleClass("is-active");
      
        });

        $(".navbar-item").click(function(){
            var item = $(this).attr("data-hand")
            $(".is-active").attr("class","modal");
            if(item == "rock"){
                $(".is-active").attr("class","modal");
                $("#rock-modal").attr("class","is-active");
            }else if(item == "paper"){
                $(".is-active").attr("class","modal");
                $("#paper-modal").attr("class","is-active");
            }else if(item == "scissors"){
                $(".is-active").attr("class","modal");
                $("#scissors-modal").attr("class","is-active");
            }else if(item == "lizard"){
                $(".is-active").attr("class","modal");
                $("#lizard-modal").attr("class","is-active")
            }else if (item == "spock"){
                $(".is-active").attr("class","modal");
                $("#spock-modal").attr("class","is-active")
            }
        })

        $(".close-btn").click(function(){
            $(".is-active").attr("class","modal");
        })
        // game functions

        $(".decision").click(function(){
            choice = $(this).attr("data-name");
            console.log(choice);
            computerChoice = computerOptions[getRandomInt(5)]
            console.log(computerChoice)
            results();
            choices();
            scores();
        })

        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
          }
        function results(){

            if(choice == "Rock" && computerChoice == "Rock" ){
                emptyContainer();
                $("#playerContainer").append(Rock);
                $("#computerContainer").append(Rock);
                $("#situation").text("This Rocks...")
                $("#verdict").text("TIE")

            }else if(choice == "Rock" && computerChoice == "Paper"){
                emptyContainer();
                $("#playerContainer").append(Rock);
                $("#computerContainer").append(Paper);
                $("#situation").text("Paper covers Rock")
                $("#verdict").text("You Lose")
                lose++

            }else if(choice == "Rock" && computerChoice == "Scissors"){
                emptyContainer();
                $("#playerContainer").append(Rock);
                $("#computerContainer").append(Scissors);
                $("#situation").text("Rock breaks Scissors")
                $("#verdict").text("You Win")
                win++
            }else if(choice == "Rock" && computerChoice == "Lizard"){
                emptyContainer();
                $("#playerContainer").append(Rock);
                $("#computerContainer").append(Lizard);
                $("#situation").text("Rock kills Lizard")
                $("#verdict").text("You Win")
                win++
            }else if(choice == "Rock" && computerChoice == "Spock"){
                emptyContainer();
                $("#playerContainer").append(Rock);
                $("#computerContainer").append(Spock);
                $("#situation").text("Spock vaporizes Rock")
                $("#verdict").text("You Lose")
                lose++
            }else if(choice == "Paper" && computerChoice == "Rock"){
                emptyContainer();
                $("#playerContainer").append(Paper);
                $("#computerContainer").append(Rock);
                $("#situation").text("Paper covers Rock")
                $("#verdict").text("You Win")
                win++

            }else if(choice == "Paper" && computerChoice == "Paper"){
                emptyContainer();
                $("#playerContainer").append(Paper);
                $("#computerContainer").append(Paper);
                $("#situation").text("Some Tree Loses")
                $("#verdict").text("TIE")

            }else if(choice == "Paper" && computerChoice == "Scissors"){
                emptyContainer();
                $("#playerContainer").append(Paper);
                $("#computerContainer").append(Scissors);
                $("#situation").text("Scissors cuts Paper")
                $("#verdict").text("You Lose")
                lose++
            }else if(choice == "Paper" && computerChoice == "Lizard"){
                emptyContainer();
                $("#playerContainer").append(Paper);
                $("#computerContainer").append(Lizard);
                $("#situation").text("Lizard eats Paper")
                $("#verdict").text("You Lose")
                lose++
            }else if(choice == "Paper" && computerChoice == "Spock"){
                emptyContainer();
                $("#playerContainer").append(Paper);
                $("#computerContainer").append(Spock);
                $("#situation").text("Paper disproves Spock")
                $("#verdict").text("You Win")
                win++

            }else if(choice == "Scissors" && computerChoice == "Rock"){
                emptyContainer();
                $("#playerContainer").append(Scissors);
                $("#computerContainer").append(Rock);
                $("#situation").text("Rock breaks Scissors")
                $("#verdict").text("You Lose")
                lose++

            }else if(choice == "Scissors" && computerChoice == "Paper"){
                emptyContainer();
                $("#playerContainer").append(Scissors);
                $("#computerContainer").append(Paper);
                $("#situation").text("Scissors cuts Paper")
                $("#verdict").text("You Win")
                win++
            }else if(choice == "Scissors" && computerChoice == "Scissors"){
                emptyContainer();
                $("#playerContainer").append(Scissors);
                $("#computerContainer").append(Scissors);
                $("#situation").text("Looking Sharp")
                $("#verdict").text("TIE")

            }else if(choice == "Scissors" && computerChoice == "Lizard"){
                emptyContainer();
                $("#playerContainer").append(Scissors);
                $("#computerContainer").append(Lizard);
                $("#situation").text("Scissors kill Lizard")
                $("#verdict").text("You Win")
                win++

            }else if(choice == "Scissors" && computerChoice == "Spock"){
                emptyContainer();
                $("#playerContainer").append(Scissors);
                $("#computerContainer").append(Spock);
                $("#situation").text("Spock vaporizes Scissors")
                $("#verdict").text("You Lose")
                lose++

            }else if(choice == "Lizard" && computerChoice == "Rock"){
                emptyContainer();
                $("#playerContainer").append(Lizard);
                $("#computerContainer").append(Rock);
                $("#situation").text("Rock kills Lizard")
                $("#verdict").text("You Lose")
                lose++

            }else if(choice == "Lizard" && computerChoice == "Paper"){
                emptyContainer();
                $("#playerContainer").append(Lizard);
                $("#computerContainer").append(Paper);
                $("#situation").text("Lizard eats Paper")
                $("#verdict").text("You Win")
                win++

            }else if(choice == "Lizard" && computerChoice == "Scissors"){
                emptyContainer();
                $("#playerContainer").append(Lizard);
                $("#computerContainer").append(Scissors);
                $("#situation").text("Scissors kill Lizard")
                $("#verdict").text("You Lose")
                lose++

            }else if(choice == "Lizard" && computerChoice == "Lizard"){
                emptyContainer();
                $("#playerContainer").append(Lizard);
                $("#computerContainer").append(Lizard);
                $("#situation").text("Two many Lizards")
                $("#verdict").text("TIE")

            }else if(choice == "Lizard" && computerChoice == "Spock"){
                emptyContainer();
                $("#playerContainer").append(Lizard);
                $("#computerContainer").append(Spock);
                $("#situation").text("Lizard poisons Spock")
                $("#verdict").text("You Win")
                win++
            }else if(choice == "Spock" && computerChoice == "Rock"){
                emptyContainer();
                $("#playerContainer").append(Spock);
                $("#computerContainer").append(Rock);
                $("#situation").text("Spock vaporizes Rock ")
                $("#verdict").text("You Win")
                win++
            }else if(choice == "Spock" && computerChoice == "Paper"){
                emptyContainer();
                $("#playerContainer").append(Spock);
                $("#computerContainer").append(Paper);
                $("#situation").text("Paper disproves Spock")
                $("#verdict").text("You Lose")
                lose++
            }else if(choice == "Spock" && computerChoice == "Scissors"){
                emptyContainer();
                $("#playerContainer").append(Spock);
                $("#computerContainer").append(Scissors);
                $("#situation").text("Spock vaporizes Scissors")
                $("#verdict").text("You Win")
                win++

            }else if(choice == "Spock" && computerChoice == "Lizard"){
                emptyContainer();
                $("#playerContainer").append(Spock);
                $("#computerContainer").append(Lizard);
                $("#situation").text("Lizard poisons Spock")
                $("#verdict").text("You Lose")
                lose++

            }else if(choice == "Spock" && computerChoice == "Spock"){
                emptyContainer();
                $("#playerContainer").append(Spock);
                $("#computerContainer").append(Spock);
                $("#situation").text("Live Long and Prosper")
                $("#verdict").text("TIE")
            }
        }




        function emptyContainer(){
            $("#playerContainer").empty();
            $("#computerContainer").empty();
          }
        function choices(){
            $("#player").text(choice)
            $("#computer").text(computerChoice)
        }
        function scores(){
            $("#playerScore").text(win)
            $("#computerScore").text(lose)
        }



      });

   