"use strict";
exports.__esModule = true;
(function () {
    var icon = require('heatshrink').decompress(atob('ikggMAiEAgYIBmEAg4EB+EAh0AgPggEeCAIEBnwQBAgP+gEP//x///j//8f//k///H//4BYOP/4lBv4bDvwEB4EAvAEBwEAuA7DCAI7BgAQBhEAA'));
    var iconWidth = 18;
    function draw() {
        g.reset();
        if (Bangle.isCharging()) {
            g.setColor('#FD0');
            g.drawImage(icon, this.x + 1, this.y + 1, {
                scale: 0.6875
            });
        }
    }
    WIDGETS.chargingStatus = {
        area: 'tr',
        width: Bangle.isCharging() ? iconWidth : 0,
        draw: draw
    };
    Bangle.on('charging', function (charging) {
        if (charging) {
            Bangle.buzz();
            WIDGETS.chargingStatus.width = iconWidth;
        }
        else {
            WIDGETS.chargingStatus.width = 0;
        }
        Bangle.drawWidgets(); // re-layout widgets
        g.flip();
    });
})();
