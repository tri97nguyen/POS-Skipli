
/**
 * * toggle order panel in mobile view
 * 
 */
export function toggleOrderPanel(e) {
    e.stopPropagation();
    var orderPanel = document.getElementById("order-history-panel");
    var menu = document.getElementById("menu");
    var style = orderPanel.style;
    console.log("button clicked ", style.display);

    if (orderPanel.style.display == "grid") {
        orderPanel.style.display = "none";
        menu.style.gridColumn = "1 / 13";
    }
    else {
        style.display = "grid";
        style.gridColumn = "3 / 13";
        menu.style.gridColumn = "1 / 3";
    }

}

export function toggleOrderPanelFromMenu(e) {
    var orderPanel = document.getElementById("order-history-panel");
    if (orderPanel.style.display === "grid") toggleOrderPanel(e);
}
