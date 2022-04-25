// Code your solution in this file!

function distanceFromHqInBlocks(num){
    if (num === 42){
        console.log(`You are already on 42nd Street!`);
        let numOfBlocks = 0;
        return numOfBlocks;
    }
    else if(num < 42){
        let numOfBlocks = 42 - num;
        console.log(`You are ${numOfBlocks} blocks away from 42nd St.`);
        return numOfBlocks;
    }
    else if(num > 42){
    let numOfBlocks = num - 42;
    console.log(`You are ${numOfBlocks} blocks away from 42nd St.`);
    return numOfBlocks;
    }
}

function distanceFromHqInFeet(num){
    if (num === 42){
        console.log(`You are already on 42nd Street!`);
        let blocksInFeet = 0;
        return blocksInFeet;
    }
    else if(num < 42){
        let numOfBlocks = 42 - num;
        let blocksInFeet = numOfBlocks * 264;
        console.log(`You are ${numOfBlocks} feet away from 42nd St.`);
        return blocksInFeet;
    }
    else if(num > 42){
        let numOfBlocks = num - 42;
        let blocksInFeet = numOfBlocks * 264;
        console.log(`You are ${blocksInFeet} feet away from 42nd St.`);
        return blocksInFeet;
    }
}

function distanceTravelledInFeet(num1, num2){
    if (num1 > num2){
        let distanceTravelled = num1 - num2;
        let distanceInFeet = distanceTravelled * 264;
        console.log(distanceInFeet);
        return distanceInFeet;
    }
    else if (num2 > num1){
        let distanceTravelled = num2 - num1;
        let distanceInFeet = distanceTravelled * 264;
        console.log(distanceInFeet);
        return distanceInFeet;
    }
    else{
        return 0;
    }
}

function calculatesFarePrice(num1, num2){
    let distanceInFeet = distanceTravelledInFeet(num1, num2);
    if (distanceInFeet < 400){
        let farePrice = 0;
        console.log(`The fare is ${farePrice}`);
        return farePrice;
    }
    else if(distanceInFeet > 400 && distanceInFeet < 2000){
        let farePrice = ((distanceInFeet - 400) * .02);
        console.log(`The fare is ${farePrice}.`);
        return farePrice;
    }
    else if(distanceInFeet > 2000 && distanceInFeet < 2500){
        let farePrice = 25;
        console.log(`The fare is ${farePrice}.`);
        return farePrice;
    }
    else if (distanceInFeet > 2500){
        console.log(`cannot travel that far`);
        return "cannot travel that far";
    }
}

/*else if (distanceInFeet > 2500){
        let farePrice = "Cannot travel that far.";
        console.log(`Cannot travel that far`);
        return farePrice;
    }
    */
