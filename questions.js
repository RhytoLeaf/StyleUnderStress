var answeredTrue = [];
var answeredFalse = [];
var currentQuestion = 0;


//TEST RESULT PERCENTAGES
//silence
var masking_pct=0;
var avoiding_pct=0;
var look_pct=0;
var withdrawing_pct=0;
var heart_pct=0;
var look_pct=0;
var safe_pct=0;
var stories_pct=0;
//violence
var controlling_pct=0;
var labeling_pct=0;
var attacking_pct=0;
var state_pct=0;
var explore_pct=0;
var action_pct=0;



//
function startQuiz() {
  document.getElementById("begin-button").style.display = "none";
  document.getElementById("true-button").style.display = "block";
  document.getElementById("false-button").style.display = "block";

  //progress bar style style="width: 100%"

  //first question
  setQuestionText();
}

//
function setAnsweredTrueText() {
  document.getElementById("answered-true").innerHTML = answeredTrue.toString();

}

//
function setQuestionText() {
  currentQuestion++;

  //update quiz progress bar
  document.getElementById("quiz-progress").style.width =
    (currentQuestion / 33) * 100 + "%";

    //update trues
    setAnsweredTrueText();

  if (currentQuestion > 33) {
    endQuiz();
  } else {
    document.getElementById("question-text").innerHTML =
      questions[currentQuestion - 1];

    document.getElementById("question-number").innerHTML = 
      'Question '+currentQuestion;
  }
}

//
function pressTrue() {
  answeredTrue.push(currentQuestion);

  document.getElementById("q-"+currentQuestion).checked = true;

  //Checkbox marked
  //document.getElementById("Q" + currentQuestion + "-answer").checked = true;


  setQuestionText();
}

// 
function pressFalse() {
  setQuestionText();
}

// 
function endQuiz() {
  document.getElementById("begin-button").style.display = "none";
  document.getElementById("true-button").style.display = "none";
  document.getElementById("false-button").style.display = "none";

  document.getElementById("question-number").innerHTML ="End of quiz";
  document.getElementById("question-text").innerHTML =  "Please see your results below:"

}

// 
function showResults() {
  document.getElementById("results-panel").style.display = "none";
  
  document.getElementById("look-" + "pct").innerHTML = look_pct+"%";


}

const questions = [
  "At times I avoid situations that might bring me into contact with people I'm having problems with.",
  "I have put off returning phone calls or emails because I simply didn't want to deal with the person who sent them.",
  "Sometimes when people bring up a touchy or awkward issue, I try to change the subject.",
  "When it comes to dealing with awkward or stressful subjects, sometimes I hold back rather than give my full and candid opinion.",
  "Rather than tell people exactly what I think, sometimes I rely on jokes, sarcasm, or snide remarks to let them know I'm frustrated.",
  "When I've got something tough to bring up, sometimes I offer weak or insincere compliments to soften the blow.",
  "In order to get my point across, I sometimes exaggerate my side of the argument.",
  "If I seem to be losing control of a conversation, I might cut people off or change the subject in order to bring it back to where I think it should be.",
  "When others make points that seem stupid to me, I sometimes let them know it without holding back at all.",
  "When I'm stunned by a comment, sometimes I say things that others might take as forceful or attack-ing_-comments such as 'Give me a break!' or 'That's ridiculous!'",
  "Sometimes when things get heated, I move from arguing against others' points to saying things that might hurt them personally.",
  "If I get into a heated discussion, I've been known to be tough on the other person. In fact, the person might feel a bit insulted or hurt.",
  "When I'm discussing an important topic with others, sometimes I move from trying to make my point to trying to win the battle.",
  "In the middle of a tough conversation, I often get so caught up in arguments that I don't see how I'm coming across to others.",
  "When talking gets tough and I do something hurt-ful, I'm quick to apologize for mistakes.",
  "When I think about a conversation that took a bad turn, I tend to focus first on what I did that was wrong rather than focus on others' mistakes.",
  "When I've got something to say that others might not want to hear, I avoid starting out with tough conclusions, and instead start with facts that help them understand where I'm coming from.",
  "I can tell very quickly when others are holding back or feeling defensive in a conversation.",
  "Sometimes I decide that it's better not to give harsh feedback because I know that it's bound to cause real problems.",
  "When conversations aren't working, I step back from the fray, think about what's happening, and take steps to make it better.",
  "When others get defensive because they misunderstand me, I quickly get us back on track by clarifying what I do and don't mean.",
  "There are some people I'm rough on because, to be honest, they need or deserve what I give them",
  "I sometimes make absolute statements like 'The fact is ___ ' or 'It's obvious that ___ ' to be sure I get my point across.",
  "If others hesitate to share their views, I sincerely invite them to say what's on their mind, no matter what it is.",
  "At times I argue hard for my view--hoping to keep others from bringing up opinions that would be a waste of energy to discuss.",
  "Even when things get tense, I adapt quickly to how others are responding to me and try a new strategy.",
  "When I find that I'm at cross-purposes with some-one, I often keep trying to win my way rather than looking for common ground.",
  "When things don't go well, I'm more inclined to see the mistakes others made than notice my own role.",
  "After I share strong opinions, I go out of my way to invite others to share their views, particularly opposing ones.",
  "When others hesitate to share their views, I do whatever I can to make it safe for them to speak honestly.",
  "Sometimes I have to discuss things I thought had been settled because I don't keep track of what was discussed before.",
  "I find myself in situations where people get their feelings hurt because they thought they would have more of a say in final decisions than they end uphaving.",
  "I get frustrated sometimes at how long it takes some groups to make decisions because too many people are involved.",
];

console.log(questions.length);
