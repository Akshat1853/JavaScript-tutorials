// Control flow statements

// Write a function getGrade(score) that:
//   Takes a student's marks (0  to  100)
//   Returns the grade based oon this logic:

// 90 to 100 A+
// 80 to 89 A
// 70 to 79 B
// 60 to 69 C
// 33 to 59 D
// 0 to 32 Fail
// Anything else    Invalid marks


function getGrade(score) {
    if(score >= 90 && score <= 100){
        return 'A+';
    }
    else if(score >= 80 && score < 90){
        return 'A';
    }
    else if(score >= 70 && score < 80){
        return 'B';
    }
    else if(score >= 60 && score < 70){
        return 'C'
    }
    else if(score >= 33 && score < 60){
        return 'D'
    }
    else if(score >= 0 && score < 33){
        return "Fail";
    }
    else return "Invalid Marks";
}

console.log(getGrade(78));


// Rock paper scissors logic

function rps(user, computer){
    if(user === computer){
        return "draw";
    }

    if(user === "rock" && computer === "scissor") return "user";
    if(user === "scissor" && computer === "paper") return "user";
    if(user === "paper" && computer === "rock") return "user";

    return "computer"
}

console.log(rps("rock", "paper"));


let x = 2;

switch(x) {
    case 2:
        console.log("Two");
    case 3:
        console.log("Three");
}

// output: two, three (bug if the break is missing)