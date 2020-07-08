// STEP 1


// You should visually review this file and understand the arrays and variables included.
// We will be using them extensively in our examples.



console.log(data);


// I just use it to make the information presented
// in the console window of the Google Chrome browser easier to read.

// STEP 2
// Use the .map() method to create a new array that contains the team name and the length of the team name.

const taskList = data.map(function(item){
    const obj = {
        "step": item.step,
        "order": item.order,
        "url": item.url,
        "assigned": item.assigned,
        "note": item.note.length ? "Yes" : "No",
        "Complete": item.complete ? "Yes" : "No"
    };
    return obj;
});



taskList.sort((a, b) => (a.order > b.order) ? 1 : -1);


// console log our sorted array for visual proofing.

// This should give us index, team name, and team name length sorted ascending.



// STEP 4
// We know that when numbers are sorted lowest to highest in an array,
// The last number in the array is the largest.
// In this step we will get the last item in the array.
// First, lets find the length of our array.
// const arrayLength = teamNameLength.length;
// console.log("arrayLength: "+ arrayLength);



// Calculate the index of the last item in the array
// The last index in my array should be the length minus 1.
// const indexOfLastElement = (arrayLength - 1);
// console.log("indexOfLastElement: " + indexOfLastElement);



// STEP 5 
// Display the value
// console.log("How many characters are in the longest team name? ");
// console log the array object stored at the last index position
// console.log(teamNameLength[indexOfLastElement]);
// console log the key/value pair stored at the last index position
// console.log(teamNameLength[indexOfLastElement].l);




// STEP 6
// const r = taskList.filter(item => item.isComplete === false);
//
// const result = taskList.filter(item => item.isComplete === false);
// console.table(teamNameLength);

// console.log(`This is the filtered (isComplete=false) list: ${taskList}`);

