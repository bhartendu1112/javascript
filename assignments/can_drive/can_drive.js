function CanDrive(hasDrivingLiscence, isTired, isSober) {
    if(hasDrivingLiscence === false){
        console.log("You cannot drive")

    }else if (isTired === true || isSober === false){
        console.log(" You shouldn't drive ")

    }else {
        console.log("You can drive")
    }
    // Write you code here
}

module.exports = CanDrive;
