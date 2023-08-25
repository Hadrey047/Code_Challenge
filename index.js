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


//Challenge 3: Net Salary Calculator (Toy Problem)

function calculateTaxableIncome(grossSalary, benefits) {
    return grossSalary + benefits;
}

const payee = function calculatePayee(taxableIncome) {
    if (taxableIncome <= 24000) {
        return 0;
    } else if (taxableIncome <= 32333) {
        return (taxableIncome - 24000) * 0.1;
    } else if (taxableIncome <= 40385) {
        return 833.33 + (taxableIncome - 32333) * 0.15;
    } else if (taxableIncome <= 57585) {
        return 2083.33 + (taxableIncome - 40385) * 0.2;
    } else if (taxableIncome <= 70833) {
        return 4166.67 + (taxableIncome - 57585) * 0.25;
    } else {
        return 6250 + (taxableIncome - 70833) * 0.3;
    }
}

const nhifDeductions = function calculateNHIFDeductions(grossSalary) {
    if (grossSalary <= 5999) {
        return 150;
    } else if (grossSalary <= 7999) {
        return 300;
    } else if (grossSalary <= 11999) {
        return 400;
    } else if (grossSalary <= 14999) {
        return 500;
    } else if (grossSalary <= 19999) {
        return 600;
    } else if (grossSalary <= 24999) {
        return 750;
    } else if (grossSalary <= 29999) {
        return 850;
    } else if (grossSalary <= 34999) {
        return 900;
    } else if (grossSalary <= 39999) {
        return 950;
    } else {
        return 1000;
    }
}

const nssfDeductions = function calculateNSSF(grossSalary) {
    return Math.min(grossSalary * 0.06, 2000);
}


function main() {
    const basicSalary = parseFloat(prompt("Enter your basic salary: "));
    const benefits = parseFloat(prompt("Enter the value of benefits: "));

    const grossSalary = basicSalary + benefits;
    const taxableIncome = calculateTaxableIncome(grossSalary, benefits);
    const payee = calculatePayee(taxableIncome);
    const nhifDeductions = calculateNHIFDeductions(grossSalary);
    const nssfDeductions = calculateNSSF(grossSalary);

    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

    console.log("\nSalary Breakdown:");
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`Tax (PAYE): ${payee}`);
    console.log(`NHIF Deductions: ${nhifDeductions}`);
    console.log(`NSSF Deductions: ${nssfDeductions}`);
    console.log(`Net Salary: ${netSalary}`);
}

main();
