/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. 
     * I think the scanned text obj is what i am reading with search term
     * 
     * */

    // The total length of all books + Content
    //let totalLength = scannedTextObj.

    var result = {
        "SearchTerm": searchTerm,
        "Results": []
    };

    let regexSearchTerm = searchTerm;
    let searchTermPattern = new RegExp(regexSearchTerm,"g");
    
    for(let l = 0; l < scannedTextObj.length; l++){
        for(let c = 0; c < scannedTextObj[l].Content.length;c++){
            if(searchTermPattern.test(scannedTextObj[l].Content[c].Text)){
                let occurrences = scannedTextObj[l].Content[c].Text.indexOf(searchTerm,0);
                for(let o = 0; o < scannedTextObj[l].Content[c].Text.split(searchTerm).length-1;o++){
                    if(occurrences == 0 && scannedTextObj[l].Content[c].Text[0+searchTerm.length] == " "){
                        let newData = {"ISBN":scannedTextObj[l].ISBN,"Page":scannedTextObj[l].Content[c].Page,"Line":scannedTextObj[l].Content[c].Line};
                        result.Results.push(newData);
                    }
                    else if(scannedTextObj[l].Content[c].Text[occurrences-1] == " " && scannedTextObj[l].Content[c].Text[occurrences+searchTerm.length] == " "){
                        let newData = {"ISBN":scannedTextObj[l].ISBN,"Page":scannedTextObj[l].Content[c].Page,"Line":scannedTextObj[l].Content[c].Line};
                        result.Results.push(newData);
                    }
                    else if(occurrences+searchTerm.length == scannedTextObj[l].Content[c].Text.length && scannedTextObj[l].Content[c].Text[occurrences-1] == " "){
                        let newData = {"ISBN":scannedTextObj[l].ISBN,"Page":scannedTextObj[l].Content[c].Page,"Line":scannedTextObj[l].Content[c].Line};
                        result.Results.push(newData);
                    }
                    occurrences = scannedTextObj[l].Content[c].Text.indexOf(searchTerm,occurrences+1);
                }
            }
        }
    }
    
    return result; 
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ]
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}
const twentyLeaguesOut2 = {
    "SearchTerm": "The",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        }
    ]
}
const twentyLeaguesOut3 = {
    "SearchTerm": "is",
    "Results": [
        
    ]
}

const twentyLeaguesOut4 = {
    "SearchTerm": "and",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        },
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 10
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
// let searchTerm = "the";
// let occurrences = twentyLeaguesIn[0].Content[1].Text.indexOf(searchTerm,0);
// for(let o = 0; o < twentyLeaguesIn[0].Content[1].Text.split(searchTerm).length-1;o++){
//     console.log(occurrences);
//     //console.log(twentyLeaguesIn[0].Content[1].Text.length);
//     if(occurrences == 0 && twentyLeaguesIn[0].Content[1].Text[0+searchTerm.length] == " "){
//         console.log("B");
//     }
//     else if(twentyLeaguesIn[0].Content[1].Text[occurrences-1] == " " && twentyLeaguesIn[0].Content[1].Text[occurrences+searchTerm.length] == " "){
//         console.log("M");
//     }
//     else if(occurrences+searchTerm.length == twentyLeaguesIn[0].Content[1].Text.length && twentyLeaguesIn[0].Content[1].Text[occurrences-1] == " "){
//         console.log("E");
//     }
//     occurrences = twentyLeaguesIn[0].Content[1].Text.indexOf(searchTerm,occurrences+1);
    
// }


const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}
const test3result = findSearchTermInBooks("The", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut2) === JSON.stringify(test3result)) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", twentyLeaguesOut2);
    console.log("Received:", test3result);
}

const test4result = findSearchTermInBooks("is", twentyLeaguesIn);
if(JSON.stringify(twentyLeaguesOut3) === JSON.stringify(test4result)){
    console.log("PASS: Test 4");
}
else{
    console.log("FAIL: Test 4");
    console.log("Expected:", twentyLeaguesOut3);
    console.log("Received:", test4result);
}

const test5result = findSearchTermInBooks("is", twentyLeaguesIn);
if(JSON.stringify(twentyLeaguesOut3) != JSON.stringify(test5result)){
    console.log("FAIL: Test 5");
    console.log("Expected:", twentyLeaguesOut3);
    console.log("Received:", test5result);
}
else{
    console.log("PASS: Test 5");
}

const test6result = findSearchTermInBooks("and", twentyLeaguesIn);
if(JSON.stringify(twentyLeaguesOut4) === JSON.stringify(test6result)){
    console.log("PASS: Test 6");
}
else{
    console.log("FAIL: Test 6");
    console.log("Expected:", twentyLeaguesOut4);
    console.log("Received:", test6result);
}