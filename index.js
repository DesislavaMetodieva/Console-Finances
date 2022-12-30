'use strict';

var finances = [
['Jan-2010', 867884],
['Feb-2010', 984655],
['Mar-2010', 322013],
['Apr-2010', -69417],
['May-2010', 310503],
['Jun-2010', 522857],
['Jul-2010', 1033096],
['Aug-2010', 604885],
['Sep-2010', -216386],
['Oct-2010', 477532],
['Nov-2010', 893810],
['Dec-2010', -80353],
['Jan-2011', 779806],
['Feb-2011', -335203],
['Mar-2011', 697845],
['Apr-2011', 793163],
['May-2011', 485070],
['Jun-2011', 584122],
['Jul-2011', 62729],
['Aug-2011', 668179],
['Sep-2011', 899906],
['Oct-2011', 834719],
['Nov-2011', 132003],
['Dec-2011', 309978],
['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000], 
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099]
];

console.log("Financial Analysis");

console.log("----------------------------");

// Declare all variables: totalMonthCount; net total amount of Profit/losses over the entire period 



// totalMonthCount

var totalMonthCount;
totalMonthCount = finances.length;
console.log ("Total Months: " + totalMonthCount);

// How to split the first data set and the second data set, so we console.log the sum of all Profile/Losses

var financeMonths = [];
var netTotal = 0;
var months = [];
var changeObj = [];
var dateMonth = [];
var totalDateMonth = 0;

for (var i = 0; i < finances.length; i++) {
    dateMonth.push(finances[i][1]);
    months.push(finances[i][0]);
};

// How to sum the total of all values within array dateMonth //

var totalDateMonth = 0;

for (var i = 0; i < dateMonth.length; i++){
    totalDateMonth += dateMonth[i];
};

console.log("Total: $" + totalDateMonth);

// 

// How to track what the total change in profits is from month to month and then find the average. -> (Total/Number of months) 

function difference(dateMonth) 
{
 var newArray = [];
  for (var i = 1; i < dateMonth.length; i++){
    newArray.push(dateMonth[i] - dateMonth[i - 1]);
    changeObj[months[i]] = newArray[i - 1];
  }
 
 return newArray;
};


// Declaring the total sum of changes in profits from month to month 

var totalSumDiff = 0;

for (var i = 0; i < difference(dateMonth).length; i++) {
 totalSumDiff += difference(dateMonth)[i];
};


// Next step is to calculate the difference between every two months and then devide by the total number of calculations. I calculate the Average Profit Loss number by dividing the months from the array without the first one as I believe this one should not be part of the calculations.

var averageProfitLoss = totalSumDiff / (dateMonth.length - 1);

console.log("Average  Change: $" + Number(averageProfitLoss).toFixed(2));


const logResults = () =>
{
    const resultValues = Object.values(changeObj);

    // finding the largest number from the array with differences for every pair of months

    const max = Math.max(...resultValues);
    const min = Math.min(...resultValues);

    //Loop key value pairs to find min and max values

    for (let [monthName, monthResult] of Object.entries(changeObj))
    {
        switch (monthResult) 
        {
            // Logging to the console the greatest increase & decrease in Profits
            
            case max:
                console.log("Greatest Increase in Profits: " + monthName + " ($" + monthResult + ")");
                break;
            case min:
                console.log("Greatest Decrease in Profits: " + monthName + " ($" + monthResult + ")");
                break;
        }
    }
};

logResults();