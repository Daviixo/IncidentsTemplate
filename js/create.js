function createTemplate(){
    
    //Var today could be useful in the future, leaving that here for reference
    var today = new Date().toLocaleDateString('en-us', { hour:"2-digit", minute:"2-digit", weekday:"long", year:"numeric", month:"short", day:"numeric"});

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

    //alert("Creating templates for: " + selected);


    //FYI: IMPACT == ISSUE!

    // This will be our first template - External Status Page Template:
    //[PRODUCT] - [ISSUE]

    var winPrint = window.open('TEST', '', 'left=0,top=0,width=450,height=800,toolbar=0,scrollbars=0,status=0');
    winPrint.document.write('<title>Incidents Templates</title><br /><br /> <strong> External Status Page Template</strong><br>' + selected + ' - ' + cImpact
    
    //This is the start of our second template:
    //External Status Page Template:
    //We are actively investigating reports that some [PRODUCT] customers might be [ISSUE].
    //Our engineers are working to resolve the issue and will provide another update shortly.

    + '<br><br><strong>External Status Page Template</strong><br>We are actively investigating reports that some ' + selected + ' customers might be '
    + cImpact + '.' +

    //This will be our 3rd template:
    // Internal Status Page Template:
    // Product Impact
    // Timeline
    // Customer Reports
    // Customer Impact
    // Slack Channel
    // Conf. Bridge

    '<br><br><strong>Internal Status Page Template:</strong><br>Product Impact - ' + selected + '<br>Timeline - ' + utcStr +
    '<br>Customer Reports - ' + cReports + '<br>Customer Impact - ' + cImpact + '<br>Slack Channel - ' + cSlackChannel + '<br>Conf. Bridge - ' + confBridge + 

    //This will be the 4th and last template:
    // Comms Response Template:
    // We are currently having a [SEVERITY] incident for [PRODUCTs] where users [ISSUE].
    // Status pages are being sent at this moment. Please thread the questions in this message.
    // Slack incident channel [SLACK CHANNEL]

    '<br><br><strong>Comms Response Template:</strong><br>We are currently having a ' + cIncidentType + ' incident for ' + selected + ' where users ' + cImpact + '.' +
    '<br>Status pages are being sent at this moment. Please thread the questions in this message.<br>Slack incident channel ' + cSlackChannel + 

    '<br><br>Your friends:<br><img src="images/lminoclogo.png" alt="NOC_Logo" width="124" height="150">'
    
    );

    console.log(today);

}