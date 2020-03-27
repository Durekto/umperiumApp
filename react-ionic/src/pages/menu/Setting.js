window.onload = function() {
var tabSettings = document.querySelectorAll(".wrapperAllSettingHeader .tabSetting");
var tabPanels = document.querySelectorAll(".tabsPanel");

if(tabSettings && tabPanels){
    for (let setting of tabSettings) {
        setting.addEventListener("click", e =>  {

            e.preventDefault();

            document.querySelector(".wrapperAllSettingHeader .current").classList.remove("current");
            document.querySelector(".tabsPanel.active").classList.remove("active");




            var parentListItem = setting.parentElement;
            parentListItem.classList.add("current");
            var index = [...parentListItem.parentElement.children].indexOf(parentListItem);

            var panel = [...tabPanels].filter(setting => setting.getAttribute("data-index") == index);

            panel[0].classList.add("active");

        });
    }
}

};


























