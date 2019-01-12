function ChallengeGen() {
    
    RngQuestion = Math.random() * 10;
    var QuestionHolder = [
        Question1 = ["Question", "answer1", "answer2", "answer3", "answer4", 2, 1],
        Question2 = ["Question", "answer1", "answer2", "answer3", "answer4", 4, 2],
        Question3 = ["Question", "answer1", "answer2", "answer3", "answer4", 1, 3],
        Question3 = ["Question", "answer1", "answer2", "answer3", "answer4", 3, 4]
    ];
    for (var i = 0; i < 4; i++) {
        if (RngQuestion == QuestionHolder[6]) {
            document.getElementById("chal").innerHTML = QuestionHolder[0] + QuestionHolder[1] + QuestionHolder[2] + QuestionHolder[3] + QuestionHolder[4];
        }
    }
}
