// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    if(mass<=0 || height<=0){
        var res="INVALID INPUT"
        return res
    }
    return  mass / (height * height)
    // Write your code here
}

module.exports = BMICalculator;
