function repositionOSD(window) {
    if (!window.onScreenDisplay) {
        return;
    }

    const screenGeo = workspace.clientArea(KWin.FullScreenArea, window);
    const geo = window.frameGeometry;

    const x = Math.round(screenGeo.x + (screenGeo.width - geo.width) / 2);
    const y = Math.round(screenGeo.y + screenGeo.height * 0.9 - geo.height / 2);

    window.frameGeometry = { x: x, y: y, width: geo.width, height: geo.height };
}

workspace.windowAdded.connect(repositionOSD);
