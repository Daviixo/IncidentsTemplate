function createTemplate(){
    
    //Var today could be useful in the future, leaving that here for reference
    var today = new Date().toLocaleDateString('en-us', { hour:"2-digit", minute:"2-digit", weekday:"long", year:"numeric", month:"short", day:"numeric"});

    var cTittle = document.getElementById("sptittle").value;

    const utcStr = new Date().toUTCString();
    console.log(utcStr);

    var cImpact = document.getElementById("impact").value;

    var cReports = document.getElementById("customerReports").value;

    var cSlackChannel = document.getElementById("slackChannel").value;

    var e = document.getElementById("incidentType");
    var cIncidentType = e.value;

    var confBridge = "(805) 416-0601 Pin: 13554";

    var selected = [];
    for (var option of document.getElementById('products').options)
    {
        if (option.selected) {
            selected.push(" " + option.value);
        }
    }

    var finalTitle = cIncidentType + " - " + selected + " - " + cTittle;

    //alert("Creating templates for: " + selected);


    //FYI: IMPACT == ISSUE!

    // This will be our first template - External Status Page Template:
    //[PRODUCT] - [ISSUE]

    var tab = window.open('about:blank', '_blank');

    html = '<title>Results - Incidents Templates</title><br><strong> External Status Page Template</strong><br><br>' + selected + ' - ' + cTittle
    + '<br><br>We are actively investigating reports that some ' + selected + ' customers may be '
    + cImpact + '. <br><br>Our engineers are working to resolve the issue and will provide another update shortly.' +  

    '<br><br><strong>Internal Status Page Template:</strong><br><br>' + finalTitle + '<br><br></bnr>Product Impact - ' + selected +
    '<br>Customer Reports - ' + cReports + '<br>Customer Impact - Customers may be ' + cImpact + '<br>Slack Channel - ' + cSlackChannel + '<br>Conf. Bridge - ' + 
    confBridge + ' ' + '<a href="https://www.uberconference.com/cloudsupport">https://www.uberconference.com/cloudsupport</a>' +
    '<br><br><strong>Comms Response Template:</strong><br><br>We are currently having a ' + cIncidentType + ' incident for ' + selected + ' where users are ' + cImpact + '.' +
    '<br>Status pages are have been sent. Please thread the questions in this message.<br>Slack incident channel ' + cSlackChannel + 
    '<br><br>Your friends:<br><img src="images/lminoclogo.png" alt="NOC_Logo" width="124" height="150">' +
    '<br><br><strong>DONT FORGET TO SEND THE SLACK UPDATES</strong>'

    tab.document.write(html);
    tab.document.close(); 

}

function createTemplateComms(){

    var selected = [];

    for (var option of document.getElementById('products').options)
    {
        if (option.selected) {
            selected.push(" " + option.value);
        }
    }

    var cSlackChannel = document.getElementById("slackChannel").value;

    // Lets get our Start and End time

    var getStartTime = document.getElementById("startDateTime").value;

    console.log("My getStartTime BEFORE: " + getStartTime);

    var newStartTime = fixDate(getStartTime);

    console.log('New start time: ' +  newStartTime);

    // Now let's get our End time
    
    var getEndTime = document.getElementById("endDateTime").value;

    console.log("End Time BEFORE: " + getEndTime);

    var newEndTime = fixDate(getEndTime);

    console.log('New end time: ' +  newEndTime);

    // For example: 10/25/2022 9:00 AM UTC - 10/26/2022 04:39 PM UTC

    var finalTimeline = newStartTime + " UTC - " + newEndTime + " UTC";

    // End of fixing date format

    var cImpact = document.getElementById("impact").value;

    var cReports = document.getElementById("customerReports").value;

    var getRootCause = document.getElementById("rootcause").value;

    var getFix = document.getElementById("fix").value;

    var productsLenght = selected.length;
    
    console.log("Lenght: " + productsLenght);

    isProductPlural = "Product";

    if (productsLenght > 1){

        isProductPlural = "Products";

    }


    var tab = window.open('about:blank', '_blank');

    html = '<title>Results - Internal Status Page & Comms Response</title>'
    + '<h1><b>Comms Response - Closing Statement</b></h1>'
    + '<b>' + isProductPlural + ' Impact: </b>' + selected
    + '<br><b>Timeline: </b>' + finalTimeline
    + '<br><b>Customer Impact: </b>' + cImpact
    + '<br><b>Customer Reports: </b>' + cReports
    + '<br><b>Root Cause: </b>' + getRootCause
    + '<br><b>Incident Status Update </b> - Resolved'
    + '<br><b>What was done to resolve the issue? </b>\n' + getFix
    + '<br><b>RFO</b> - Upon request, RFO for external customer communication will be published to the RFO distribution list within 48-72 hours.'
    + '<br><b>PostMortem/RCA</b> - A detailed technical doc will be shared in the incident Slack Channel ' + cSlackChannel
    
    + '<h1><b>Internal Status Page - Closing Statement</b></h1>'
    + 'On ' + finalTimeline + ',' + selected 
    + ' customers may have been ' + cImpact 
    + '. This was identified to have been caused due to ' + getRootCause + '.'
    + ' To mitigate the issue, ' + getFix
    + '<br><br><b>RFO</b> - Upon request, RFO for external customer communication will be published to the RFO distribution list within 48-72 hours.'
    + '<br><br><b>PostMortem/RCA</b> - A detailed technical doc will be shared in the incident Slack Channel ' + cSlackChannel;


    tab.document.write(html);
    tab.document.close();

}

function createDraft(){

    var tab = window.open('about:blank', '_blank');

    html = '<title>Results - Incidents Templates</title>'
    + '<h1>Identified</h1>'
    + 'Our engineers believe to have identified the issue and are now actively working towards a resolution.<br><br>'
    + 'We will provide another update shortly.'
    + '<br><h1>Monitoring</h1>'
    + 'Our engineers have corrected the issue and we are confirming that all services are functional.<br><br>'
    + 'We will continue to monitor the situation and will provide a final update shortly.'
    + '<br><h1>Resolved</h1>'
    + 'We have confirmed that the issue has been resolved and all systems are 100% operational at this time.<br><br>'
    + 'We will conduct an internal investigation of this issue and make appropriate improvements to our system to help prevent or minimize future recurrence.';

    tab.document.write(html);
    tab.document.close(); 

}

function fixDate(getDate){

    var date = new Date(getDate);

    getJustMonth = date.getMonth();

    date = date.toString();

    splitDate = date.split(" ");

    // Splitting the date

    splitWeekDay = splitDate[0].replace(",","");
    splitMonth = splitDate[1];
    splitDay = splitDate[2];
    splitYear = splitDate[3];
    splitTime = splitDate[4];
    splitTimezone = splitDate[5];

    //Let's now divide our time

    finalTime = splitDate[4].split(":");
    splitHour = finalTime[0];
    splitMinutes = finalTime[1];
    splitMinutesOne = splitMinutes[0];
    splitMinutesTwo = splitMinutes[1];

    finalSplitMinutes = splitMinutesOne + splitMinutesTwo;

    var d = new Date(splitYear,getJustMonth,splitDay,splitHour,finalSplitMinutes);
    var ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    var mo = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(d);
    var da = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(d);
    var wd = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(d);
    var ti = new Intl.DateTimeFormat('en', { hour: 'numeric', hour12: true, minute: '2-digit'}).format(d);

    // For example: 10/25/2022 9:00 AM UTC - 10/26/2022 04:39 PM UTC

    var fixedFormattedDate = mo + '/' + da + '/' + ye + ' ' + ti;

    return fixedFormattedDate;

}