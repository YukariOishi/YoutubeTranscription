window.onload = function () {
    const keyCode = 84; // t/T
    const insertval = 100;
    const openMenu = "#menu-container > #menu > ytd-menu-renderer > yt-icon-button";
    const openButton = "ytd-menu-popup-renderer paper-listbox paper-item";
    const closeButton = "ytd-engagement-panel-title-header-renderer ytd-button-renderer yt-icon-button";
    const transcriptionDom = "ytd-engagement-panel-section-list-renderer[visibility=ENGAGEMENT_PANEL_VISIBILITY_EXPANDED]";
    let id;

    document.addEventListener('keydown', (event) => {

        const isPressedShortcutKey = () => {
            return event.altKey && event.keyCode === keyCode;
        }
        const isDomShown = () => {
            return document.querySelector(transcriptionDom);
        }

        if (isPressedShortcutKey()) {
            if (isDomShown()) {

                // click close button
                document.querySelector(closeButton).click();
            } else {

                // open menu
                document.querySelector(openMenu).click();
                const fnc = () => {
                    if (document.querySelectorAll(openButton).length > 1) {
                        // click open button
                        document.querySelectorAll(openButton)[1].click();
                        clearInterval(id);
                    }
                };
                id = setInterval(fnc, insertval); // wait open button shown when menu open button pressed
            }
        }
    });

}
