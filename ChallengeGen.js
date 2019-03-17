var counter = 0;

var ArrayOfQuestions = [
    Question1 = ["Two fathers and two sons sat down to eat eggs for breakfast. They ate exactly three eggs, each person had an egg, how?", "One of the 'fathers' is also a grandfather. Therefore the other father is both a son and a father to the grandson."],
    Question2 = ["Davids father had 3 sons, snap, crackle and who?", "David"],
    Question3 = ["I have many keys but no locks, what am I?", "A keyboard"],
    Question4 = ["What is an aliens favorite place on a computer", "The spacebar"],
    Question5 = ["I dance but i have no legs, I breath but I have no lungs", "fire"],
    Question6 = ["When the horse pets the cat the wood will sing", "Violin"],
    Question7 = ["First think of the person who lives in disquise who deals in secrets and tells not but lies, Next tell me whats always last to mend the middle of middle and the end of end, and finally give me the sound often heard durning the search for a hard to find word, now string them together and answer me this, which creature would you be unwilling to kiss?", "spider"],
    Question8 = ["With pointed fangs I sit and wait, with piercing force I serve out fate. Grabbing bloodless victims, proclaiming my might; physically joining with a single bite. What am I?", "stapler"],
    Question9 = ["what goes up but never comes down?", "age"],
    Question10 = ["It can be done to buttons and shopping carts, what is it?", "push"],
    Question11 = ["What part of a turkey has the most feathers?", "The outside"],
    Question12 = ["What travels around the world but stays in one corner", "A stamp"],
    Question13 = ["whats black white and red all over", "A Newspaper"],
    Question14 = ["I can make 2 people out of one, what am i?", "A mirror"],
    Question15 = ["what tastes better than it smells", "A tongue"],
    Question16 = ["What belongs to you but other people use it more than you?", "Your name"],
    Question17 = ["What man cannot live inside a house", "A snowman"],
    Question18 = ["Why did I throw the butter out the window", "To make butter fly"],
    Question19 = ["What rock group has 4 men that cant sing", "Mt.Rushmore"],
    Question20 = ["I defend without weapons, stand without legs, wound without force and am harder to fight than to kill. What am I?", "A wall"],
    Question21 = ["Though i should be unique, youve made most of us the same. i would be stronger if my characters were stranger. what am I?", "A password"],
    Question22 = ["Name 3 consecutive days without the days of the week", "Yesterday, today, tomorrow"],
    Question23 = ["Tall i am young short i am old, while with life i glow, wind is my foe. What am I?", "Candle"],
    Question24 = ["What do pandas have that no other animals have", "Baby pandas"],
    Question25 = ["I have legs, i have arms i have a back, i am not a back. What am I?", "Chairs / Skeleton"],
    Question26 = ["What was the presidents name in 1982", "Donald J. Trump"],
];

function QuestionRand() {

    if (counter > ArrayOfQuestions.length)
        counter = 0;

    console.log(ArrayOfQuestions)

    for (var index = 0; index < ArrayOfQuestions.length; index++) {
        var rand1 = Math.floor(Math.random() * (25 - 0 + 1)) + 0;
        var rand2 = Math.floor(Math.random() * (25 - 0 + 1)) + 0;
        var Holder;
        if (rand1 != rand2) {
            Holder = ArrayOfQuestions[rand1];
            ArrayOfQuestions[rand1] = ArrayOfQuestions[rand2];
            ArrayOfQuestions[rand2] = Holder;
        }

    }

}
function ChallengeGen() {

    if (counter == 0) {
        QuestionRand();
    }

    HolderArray = ArrayOfQuestions[counter];

    document.getElementById("Question").innerHTML = HolderArray[0];
    document.getElementById("answer").innerHTML = "";


}
function AnswerGen() {
    document.getElementById("answer").innerHTML = HolderArray[1];
}
function closeQuestion(){
    
}