function copyText() {
    
    //Var today could be useful in the future, leaving that here for reference
    //var today = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});

    var selected = [];
    for (var option of document.getElementById('products').options)
    {
        if (option.selected) {
            selected.push(option.value);
        }
    }
    alert(selected);

    for(i in selected){

        var x = x + 1;
        console.log(x + ".Product: " + selected[i]);

    }

    var win = window.open();
    win.document.write("Products: " + selected);

}