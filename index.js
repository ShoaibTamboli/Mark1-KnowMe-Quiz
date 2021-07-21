  //markTwo_ cricket Quiz using Chalk.
  //imported packages for readlineSync and Chalk.


  var readlineSync = require('readline-sync');
  const chalk = require('chalk');

  var userName=readlineSync.question("Enter your name ");//Intake Username
  console.log(chalk.italic.bold.cyanBright("Welcome "+ userName + "!"));//Display user name also used chalk.

  var score=0; //score to track

//Array of objects.key value pair.
    var list= [{ question:`
  Which one of these is not a way you can be out in cricket? 
  a: Stumped
  b: Bowled
  c: Bailed
  d: Caught \n`,
  answer:"c"},
  { question: `On what surface is cricket traditionally played?
  a: Ice
  b: Astroturf
  c: Grass
  d: Sand\n`,
  answer:"c"},
  { question:`How many balls or deliveries are bowled in one over?
  a: 22
  b: 2
  c: 6
  d: 13 \n`,
  answer: "c" },
  {  question:`Which colour of cricket ball has not been used in an official cricket match?
  a: Pink
  b: Red
  c: Green
  d: White\n`,
  answer: "c"},
  {  question:`What does the term "LBW" stand for in cricket?
  a: Lift Bat and Whack
  b: Let's Behave Wickedly
  C: Launch Ball Wicketwards
  d: Leg Before Wicket\n`,
  answer: "d"},
  {  question:`Which two countries compete for cricket's "Ashes"?
  a: England & Australia
  b: South Africa& India
  c: India & Pakistan
  d: India & England\n`,
  answer: "a"},
  {  question:`If a batsman is out on the very first ball he faced, what is it called?
  a: Mallard Duck
  b: Golden Fleece
  c: Golden Duck
  d: Golden Elephant\n`,
  answer: "c"} ]

  //Loop
  for(var i=0; i<list.length;i++){
    var currentlist=list[i];
    quiz(currentlist.question,currentlist.answer)
  }
    //Quiz function
  function quiz(question,answer){

    var userAnswer=readlineSync.question(question)
  if(userAnswer===answer){

    console.log("You answered: ",chalk.bold.cyanBright(userAnswer));
    console.log(chalk.bold.greenBright("Your answer "+userAnswer,"is right!"));
  score=score+1;
  console.log(chalk.bold("Your current score is: "+ score, "\n"))
  }
  else{
    console.log("You answered: ",chalk.bold.cyanBright( userAnswer))
    console.log(chalk.bold.redBright("Your answer "+ userAnswer, "is wrong!"));
    score=score-1;
    console.log(chalk.bold("Your current score is: "+ score,"\n"))
  }
 }
//Print final score
 console.log(chalk.bold.underline.blackBright.bgYellowBright("Your Final Score is:"),chalk.bold.cyanBright(+score));

//Good Bye Message
 console.log(chalk.whiteBright.bold ("Thank you for participating!...See you soon"),chalk.cyanBright(userName)+"!");
//==================================