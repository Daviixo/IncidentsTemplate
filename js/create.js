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
    '<br>Status pages are being sent at this moment. Please thread the questions in this message.<br>Slack incident channel ' + cSlackChannel + 
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

    var getTimeline = document.getElementById("timeline").value;

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

    html = '<title>Results - Comms Response (FINAL)</title>'
    + '<b>Comms Response - Closing Statement</b>'
    + '<br><br><b>' + isProductPlural + ' Impact: </b>' + selected
    + '<br><b>Timeline: </b>' + getTimeline
    + '<br><b>Customer Impact: </b>' + cImpact
    + '<br><b>Customer Reports: </b>' + cReports
    + '<br><b>Root Cause: </b>' + getRootCause
    + '<br><b>Incident Status Update </b> - Resolved'
    + '<br><b>What was done to resolve the issue? </b>\n' + getFix
    + '<br><b>RFO</b> - Upon request, RFO for external customer communication will be published to the RFO distribution list within 48-72 hours.'
    + '<br><b>PostMortem/RCA</b> - A detailed technical doc will be shared in the incident Slack Channel ' + cSlackChannel;

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
    + 'We will conduct an internal investigation of this issue and make appropriate improvement to our system to help prevent or minimize future recurrence.';

    tab.document.write(html);
    tab.document.close(); 

}