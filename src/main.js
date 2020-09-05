window.onload = function () {
    const menuSelector = "#menu-container > #menu > ytd-menu-renderer > yt-icon-button";
    const buttonSelector = "ytd-menu-popup-renderer paper-listbox paper-item";
    let id;

    document.addEventListener('keyup', (event) => {

        if (event.shiftKey && (event.key === 'a' || event.key === 'A')) {
            // open menu
            document.querySelector(menuSelector).click();

            const fnc = () => {
                if (document.querySelectorAll(buttonSelector).length > 1) {
                    // click button
                    document.querySelectorAll(buttonSelector)[1].click();
                    clearInterval(id);
                }
            };

            id = setInterval(fnc, 100);
        }
    });

}
