var tablinks = document.getElementsByClassName('tabLinks');
var tabcontents = document.getElementsByClassName('tabContent');

function opentab(tabname) {
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }

    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("activeTab");
    }

    event.currentTarget.classList.add("active-link");

    var selectedTabContent = document.getElementById(tabname);
    if (selectedTabContent) {
        selectedTabContent.classList.add("activeTab");
    }
}
