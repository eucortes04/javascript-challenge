// from data.js
var tableData = data;

// YOUR CODE HERE!

//create variable for table in HTML
var table = d3.select("#tableBuild")
// Create variable for button in HTML
var button = d3.select("#build-btn");
// Create variable for input field in html file
var inputDate = d3.select("#datetime");



function filterButtonClick(){

    //grab the date from the input field
    var date = inputDate.property("value");
    
    // filter for the date
    //check to see if we got a date input
    if (date.length >0) {
        //if we have date input then create buildData for table building by filtering tableData with the date
        var buildData = tableData.filter(row => row.datetime == date);
    }
    else{
        //if we don't have date input set buildData for table building to all the data
        buildData = tableData;
    }

    //Build out table with buildData
    
    //clear out the table
    table.html("");

    //Loop through the data and add html tags and info
    buildData.forEach((sightingRow) => {
        //Add a row tag to the html table
        var row = table.append("tr");
        //Loop through each of the columns in the sightingRow
        Object.entries(sightingRow).forEach(([key,value]) => {
            //Add table data tag to html
            var cell = row.append("td");
            //Add value to the new row/column cell
            cell.text(value);
        });
    
    });
}

//Event listener for the button
button.on("click", filterButtonClick);