function ChallengeGen() {

    RngQuestion = Math.round(Math.random() * 10);
    var QuestionHolder = [
        Question1 = ["what time is it", "answer1", "answer2", "answer3", "answer4", 2, 1],
        Question2 = ["why am i doing this", "answer1", "answer2", "answer3", "answer4", 4, 2],
        Question3 = ["what is the point", "answer1", "answer2", "answer3", "answer4", 1, 3],
        Question4 = ["this is fine", "answer1", "answer2", "answer3", "answer4", 3, 4],
        Question5 = ["im not even writing questions now", "answer1", "answer2", "answer3", "answer4", 3, 4],
        Question6 = ["itll buff", "answer1", "answer2", "answer3", "answer4", 3, 4],
        Question7 = ["god i hope this works", "answer1", "answer2", "answer3", "answer4", 3, 4],
        Question8 = ["sick", "answer1", "answer2", "answer3", "answer4", 3, 4],
        Question9 = ["testing", "answer1", "answer2", "answer3", "answer4", 3, 4],
        Question10 = ["Question", "answer1", "answer2", "answer3", "answer4", 3, 4],

    ];
    for (var i = 0; i < 4; i++) {
        if (RngQuestion = QuestionHolder[6]) {
            console.log(RngQuestion);
            document.getElementById("chal").innerHTML = QuestionHolder[1];
        }
        else {
            document.getElementById("chal").innerHTML = "that didnt work" + RngQuestion;
        }
    }
    RngQuestion = null;
}
