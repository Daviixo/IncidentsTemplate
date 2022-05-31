function copyText() {
    
    //Var today could be useful in the future, leaving that here for reference
    //var today = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});

    var startTime = document.getElementById("startTime").value;
    var newStartTime = startTime.split("T");

    var endTime = document.getElementById("endTime").value;
    var newEndTime = endTime.split("T");


    var cImpact = document.getElementById("impact").value;
    var cResolution = document.getElementById("resolution").value;
    var slackChannel = document.getElementById("slackChannel").value;
    var cCustomerReports = document.getElementById("customerReports").value;

    document.getElementById("temp").value =
        "Start - Date/Time (Year/Month/Day): " + newStartTime[0] + " // Time: " + newStartTime[1] +
        "\nEnd- Date/Time (Year/Month/Day): " + newEndTime[0] + " // Time: " + newEndTime[1] +
        "\nImpact: " + cImpact + 
        "\nResolution: " + cResolution +
        "\nSlack Channel: " + slackChannel +
        "\nCustomer Reports: " + cCustomerReports;

    var copyText = document.getElementById("temp");

    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

    console.log("Copy button was clicked. All actions worked accordingly!")
    alert("Text copied successfully! Remember to either refresh or reset ;)");

}