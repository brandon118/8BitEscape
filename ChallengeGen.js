function ChallengeGen() {

    var rand = Math.floor(Math.random() * (9 - 0 + 1)) + 0;

    
    var ArrayOfQuestions = [
        Question1 = ["Two fathers and two sons sat down to eat eggs for breakfast. They ate exactly three eggs, each person had an egg, how?","One of the 'fathers' is also a grandfather. Therefore the other father is both a son and a father to the grandson."],
        Question2 = ["Davids father had 3 sons, snap, crackle and who?", "David"],
        Question3 = ["I have many keys but no locks, what am I?", "A keyboard"],
        Question4 = ["What is an aliens favorite place on a computer", "The spacebar"],
        Question5 = ["abc", "answesr1"],
        Question6 = ["itll buff", "answesaffr1"],
        Question7 = ["god i hope this works", "answfder1"],
        Question8 = ["sick", "answaser1"],
        Question9 = ["testing", "answfger1"],
        Question10 = ["Question", "answeefr1"],

    ];
    
    HolderArray = ArrayOfQuestions[rand];
    
    document.getElementById("Question").innerHTML = HolderArray[0];
    document.getElementById("answer").innerHTML = "";

}
function AnswerGen(){
    document.getElementById("answer").innerHTML = HolderArray[1];
}