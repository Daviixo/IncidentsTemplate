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

    // This was previously used, which will be commented in case something here's needed.

    /*

    var winPrint = window.open('Incidents Template', '', 'left=0,top=0,width=450,height=800,toolbar=0,scrollbars=0,status=0');
    winPrint.document.write('<title>Incidents Templates</title><br><strong> External Status Page Template</strong><br><br>' + selected + ' - ' + cTittle
    
    //This is the start of our second template:
    //External Status Page Template:
    //We are actively investigating reports that some [PRODUCT] customers might be [ISSUE].
    //Our engineers are working to resolve the issue and will provide another update shortly.

    + '<br><br>We are actively investigating reports that some ' + selected + ' customers may be '
    + cImpact + '. <br><br>Our engineers are working to resolve the issue and will provide another update shortly.' +  

    //This will be our 3rd template:
    // Internal Status Page Template:
    // Product Impact
    // Timeline - If needed later on: '<br>Timeline - ' + utcStr.replace("GMT","UTC")
    // Customer Reports
    // Customer Impact
    // Slack Channel
    // Conf. Bridge

    '<br><br><strong>Internal Status Page Template:</strong><br><br>' + finalTitle + '<br><br></bnr>Product Impact - ' + selected +
    '<br>Customer Reports - ' + cReports + '<br>Customer Impact - Customers may be ' + cImpact + '<br>Slack Channel - ' + cSlackChannel + '<br>Conf. Bridge - ' + 
    confBridge + ' ' + '<a href="https://www.uberconference.com/cloudsupport">https://www.uberconference.com/cloudsupport</a>' +

    //This will be the 4th and last template:
    // Comms Response Template:
    // We are currently having a [SEVERITY] incident for [PRODUCTs] where users [ISSUE].
    // Status pages are being sent at this moment. Please thread the questions in this message.
    // Slack incident channel [SLACK CHANNEL]

    '<br><br><strong>Comms Response Template:</strong><br><br>We are currently having a ' + cIncidentType + ' incident for ' + selected + ' where users are ' + cImpact + '.' +
    '<br>Status pages are being sent at this moment. Please thread the questions in this message.<br>Slack incident channel ' + cSlackChannel + 

    '<br><br>Your friends:<br><img src="images/lminoclogo.png" alt="NOC_Logo" width="124" height="150">' +

    '<br><br><strong>DONT FORGET TO SEND THE SLACK UPDATES</strong>'
    
    ); */

    console.log(today);

}

function createDraft(){

    var tab = window.open('about:blank', '_blank');

    html = '<title>Results - Incidents Templates</title>'
    + '<h1>Identified</h1>'
    + 'Our engineers believe to have identified the issue and are now actively working towards a resolution.<br><br>'
    + 'We will provide another update shortly.'
    + '<br><h1>Monitoring</h1>'
    + 'Our engineer have corrected the issue and we are confirming that all services are functional.<br><br>'
    + 'We will continue to monitor the situation and will provide a final update shortly.'
    + '<br><h1>Resolved</h1>'
    + 'We have confirmed that the issue has been resolved and all systems are 100% operational at this time.<br><br>'
    + 'We will conduct an internal investigation of this issue and make appropriate improvement to our system to help prevent or minimize future recurrence.';

    tab.document.write(html);
    tab.document.close(); 

}