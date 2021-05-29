class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

 async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
      }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    background('yellow');
    //write code to show a heading for showing the result of Quiz
    textSize(30);
    text("Result Of The Quiz",350, 0);
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();
    //write condition to check if contestantInfo is not undefined
    if(allContestants !== undefined){
      var correctAnswer = "2";
      var displayPosition = 300;
      for(var ctnt in allContestants){
        if(correctAnswer=== allContestants[ctnt].answer){
          fill('green');
        }
          else{
            fill('red');
          }
          displayPosition = displayPosition + 30;
          textSize(15);
          text(allContestants[ctnt].name + ":" + allContestants[ctnt].answer, 200, displayPosition);   
    } 
  }
    //write code to add a note here
    textSize(19);
    text("*Note : Contestants who answered correct are highlighted in green colour",190,250);
    //write code to highlight contest who answered correctly
  
  

}
}