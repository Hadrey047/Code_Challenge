// Challenge 1: Student Grade Generator (Toy Problem)
const gradeCalculate = function(studentMark){
    if(studentMark > 79){
        console.log(`Your Grade is ${studentMark} "A"`)
    }else if(studentMark >= 60){
        console.log(`Your Grade is ${studentMark} "B"`)
    }else if(studentMark >= 50){
        console.log(`Your Grade is ${studentMark} "C"`)
    }else if(studentMark >= 40){
        console.log(`Your Grade is ${studentMark} "D"`)
    }else{
        console.log(`Your Grade is ${studentMark} "E"`)
    }
};

gradeCalculate(34);


// Challenge 2: Speed Detector (Toy Problem)
const speedLimit = 70;
const deLimitPoint = 5
const deLimitPointMax = 12

const speedDetector = function(speed){

    if(speed < speedLimit){
        console.log("OK");
    }else[result = (speed - speedLimit)/deLimitPoint];

    if(result > deLimitPointMax)
    console.log("License Suspended")
else
console.log("Bye")

}

speedDetector(150);


