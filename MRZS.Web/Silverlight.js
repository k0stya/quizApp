﻿//v2.0.30511.0
if (!window.Silverlight) window.Silverlight = { };
Silverlight._silverlightCount = 0;
Silverlight.__onSilverlightInstalledCalled = false;
Silverlight.fwlinkRoot = "http://go2.microsoft.com/fwlink/?LinkID=";
Silverlight.__installationEventFired = false;
Silverlight.onGetSilverlight = null;
Silverlight.onSilverlightInstalled = function() { window.location.reload(false); };
Silverlight.isInstalled = function(b) {
    if (b == undefined) b = null;
    var a = false, m = null;
    try {
        var i = null, j = false;
        if (window.ActiveXObject)
            try {
                i = new ActiveXObject("AgControl.AgControl");
                if (b === null) a = true;
                else if (i.IsVersionSupported(b)) a = true;
                i = null;
            } catch(l) {
                j = true;
            }
        else j = true;
        if (j) {
            var k = navigator.plugins["Silverlight Plug-In"];
            if (k)
                if (b === null) a = true;
                else {
                    var h = k.description;
                    if (h === "1.0.30226.2") h = "2.0.30226.2";
                    var c = h.split(".");
                    while (c.length > 3) c.pop();
                    while (c.length < 4) c.push(0);
                    var e = b.split(".");
                    while (e.length > 4) e.pop();
                    var d, g, f = 0;
                    do {
                        d = parseInt(e[f]);
                        g = parseInt(c[f]);
                        f++;
                    } while (f < e.length && d === g);
                    if (d <= g && !isNaN(d)) a = true;
                }
        }
    } catch(l) {
        a = false;
    }
    return a;
};
Silverlight.WaitForInstallCompletion = function() {
    if (!Silverlight.isBrowserRestartRequired && Silverlight.onSilverlightInstalled) {
        try {
            navigator.plugins.refresh();
        } catch(a) {
        }
        if (Silverlight.isInstalled(null) && !Silverlight.__onSilverlightInstalledCalled) {
            Silverlight.onSilverlightInstalled();
            Silverlight.__onSilverlightInstalledCalled = true;
        } else setTimeout(Silverlight.WaitForInstallCompletion, 3e3);
    }
};
Silverlight.__startup = function() {
    navigator.plugins.refresh();
    Silverlight.isBrowserRestartRequired = Silverlight.isInstalled(null);
    if (!Silverlight.isBrowserRestartRequired) {
        Silverlight.WaitForInstallCompletion();
        if (!Silverlight.__installationEventFired) {
            Silverlight.onInstallRequired();
            Silverlight.__installationEventFired = true;
        }
    } else if (window.navigator.mimeTypes) {
        var b = navigator.mimeTypes["application/x-silverlight-2"], c = navigator.mimeTypes["application/x-silverlight-2-b2"], d = navigator.mimeTypes["application/x-silverlight-2-b1"], a = d;
        if (c) a = c;
        if (!b && (d || c)) {
            if (!Silverlight.__installationEventFired) {
                Silverlight.onUpgradeRequired();
                Silverlight.__installationEventFired = true;
            }
        } else if (b && a)
            if (b.enabledPlugin && a.enabledPlugin)
                if (b.enabledPlugin.description != a.enabledPlugin.description)
                    if (!Silverlight.__installationEventFired) {
                        Silverlight.onRestartRequired();
                        Silverlight.__installationEventFired = true;
                    }
    }
    if (!Silverlight.disableAutoStartup)
        if (window.removeEventListener) window.removeEventListener("load", Silverlight.__startup, false);
        else window.detachEvent("onload", Silverlight.__startup);
};
if (!Silverlight.disableAutoStartup)
    if (window.addEventListener) window.addEventListener("load", Silverlight.__startup, false);
    else window.attachEvent("onload", Silverlight.__startup);
Silverlight.createObject = function(m, f, e, k, l, h, j) {
    var d = { }, a = k, c = l;
    d.version = a.version;
    a.source = m;
    d.alt = a.alt;
    if (h) a.initParams = h;
    if (a.isWindowless && !a.windowless) a.windowless = a.isWindowless;
    if (a.framerate && !a.maxFramerate) a.maxFramerate = a.framerate;
    if (e && !a.id) a.id = e;
    delete a.ignoreBrowserVer;
    delete a.inplaceInstallPrompt;
    delete a.version;
    delete a.isWindowless;
    delete a.framerate;
    delete a.data;
    delete a.src;
    delete a.alt;
    if (Silverlight.isInstalled(d.version)) {
        for (var b in c)
            if (c[b]) {
                if (b == "onLoad" && typeof c[b] == "function" && c[b].length != 1) {
                    var i = c[b];
                    c[b] = function(a) { return i(document.getElementById(e), j, a); };
                }
                var g = Silverlight.__getHandlerName(c[b]);
                if (g != null) {
                    a[b] = g;
                    c[b] = null;
                } else throw "typeof events." + b + " must be 'function' or 'string'";
            }
        slPluginHTML = Silverlight.buildHTML(a);
    } else slPluginHTML = Silverlight.buildPromptHTML(d);
    if (f) f.innerHTML = slPluginHTML;
    else return slPluginHTML;
};
Silverlight.buildHTML = function(a) {
    var b = [];
    b.push('<object type="application/x-silverlight" data="data:application/x-silverlight,"');
    if (a.id != null) b.push(' id="' + Silverlight.HtmlAttributeEncode(a.id) + '"');
    if (a.width != null) b.push(' width="' + a.width + '"');
    if (a.height != null) b.push(' height="' + a.height + '"');
    b.push(" >");
    delete a.id;
    delete a.width;
    delete a.height;
    for (var c in a) if (a[c]) b.push('<param name="' + Silverlight.HtmlAttributeEncode(c) + '" value="' + Silverlight.HtmlAttributeEncode(a[c]) + '" />');
    b.push("</object>");
    return b.join("");
};
Silverlight.createObjectEx = function(b) {
    var a = b, c = Silverlight.createObject(a.source, a.parentElement, a.id, a.properties, a.events, a.initParams, a.context);
    if (a.parentElement == null) return c;
};
Silverlight.buildPromptHTML = function(b) {
    var a = "", d = Silverlight.fwlinkRoot, c = b.version;
    if (b.alt) a = b.alt;
    else {
        if (!c) c = "";
        a = "<a href='javascript:Silverlight.getSilverlight(\"{1}\");' style='text-decoration: none;'><img src='{2}' alt='Get Microsoft Silverlight' style='border-style: none'/></a>";
        a = a.replace("{1}", c);
        a = a.replace("{2}", d + "108181");
    }
    return a;
};
Silverlight.getSilverlight = function(e) {
    if (Silverlight.onGetSilverlight) Silverlight.onGetSilverlight();
    var b = "", a = String(e).split(".");
    if (a.length > 1) {
        var c = parseInt(a[0]);
        if (isNaN(c) || c < 2) b = "1.0";
        else b = a[0] + "." + a[1];
    }
    var d = "";
    if (b.match( /^\d+\056\d+$/ )) d = "&v=" + b;
    Silverlight.followFWLink("149156" + d);
};
Silverlight.followFWLink = function(a) { top.location = Silverlight.fwlinkRoot + String(a); };
Silverlight.HtmlAttributeEncode = function(c) {
    var a, b = "";
    if (c == null) return null;
    for (var d = 0; d < c.length; d++) {
        a = c.charCodeAt(d);
        if (a > 96 && a < 123 || a > 64 && a < 91 || a > 43 && a < 58 && a != 47 || a == 95) b = b + String.fromCharCode(a);
        else b = b + "&#" + a + ";";
    }
    return b;
};
Silverlight.default_error_handler = function(e, b) {
    var d, c = b.ErrorType;
    d = b.ErrorCode;
    var a = "\nSilverlight error message     \n";
    a += "ErrorCode: " + d + "\n";
    a += "ErrorType: " + c + "       \n";
    a += "Message: " + b.ErrorMessage + "     \n";
    if (c == "ParserError") {
        a += "XamlFile: " + b.xamlFile + "     \n";
        a += "Line: " + b.lineNumber + "     \n";
        a += "Position: " + b.charPosition + "     \n";
    } else if (c == "RuntimeError") {
        if (b.lineNumber != 0) {
            a += "Line: " + b.lineNumber + "     \n";
            a += "Position: " + b.charPosition + "     \n";
        }
        a += "MethodName: " + b.methodName + "     \n";
    }
    alert(a);
};
Silverlight.__cleanup = function() {
    for (var a = Silverlight._silverlightCount - 1; a >= 0; a--) window["__slEvent" + a] = null;
    Silverlight._silverlightCount = 0;
    if (window.removeEventListener) window.removeEventListener("unload", Silverlight.__cleanup, false);
    else window.detachEvent("onunload", Silverlight.__cleanup);
};
Silverlight.__getHandlerName = function(b) {
    var a = "";
    if (typeof b == "string") a = b;
    else if (typeof b == "function") {
        if (Silverlight._silverlightCount == 0)
            if (window.addEventListener) window.addEventListener("onunload", Silverlight.__cleanup, false);
            else window.attachEvent("onunload", Silverlight.__cleanup);
        var c = Silverlight._silverlightCount++;
        a = "__slEvent" + c;
        window[a] = b;
    } else a = null;
    return a;
};
Silverlight.onRequiredVersionAvailable = function() {
};
Silverlight.onRestartRequired = function() {
};
Silverlight.onUpgradeRequired = function() {
};
Silverlight.onInstallRequired = function() {
};
Silverlight.IsVersionAvailableOnError = function(d, a) {
    var b = false;
    try {
        if (a.ErrorCode == 8001 && !Silverlight.__installationEventFired) {
            Silverlight.onUpgradeRequired();
            Silverlight.__installationEventFired = true;
        } else if (a.ErrorCode == 8002 && !Silverlight.__installationEventFired) {
            Silverlight.onRestartRequired();
            Silverlight.__installationEventFired = true;
        } else if (a.ErrorCode == 5014 || a.ErrorCode == 2106) {
            if (Silverlight.__verifySilverlight2UpgradeSuccess(a.getHost())) b = true;
        } else b = true;
    } catch(c) {
    }
    return b;
};
Silverlight.IsVersionAvailableOnLoad = function(b) {
    var a = false;
    try {
        if (Silverlight.__verifySilverlight2UpgradeSuccess(b.getHost())) a = true;
    } catch(c) {
    }
    return a;
};
Silverlight.__verifySilverlight2UpgradeSuccess = function(d) {
    var c = false, b = "2.0.31005", a = null;
    try {
        if (d.IsVersionSupported(b + ".99")) {
            a = Silverlight.onRequiredVersionAvailable;
            c = true;
        } else if (d.IsVersionSupported(b + ".0")) a = Silverlight.onRestartRequired;
        else a = Silverlight.onUpgradeRequired;
        if (a && !Silverlight.__installationEventFired) {
            a();
            Silverlight.__installationEventFired = true;
        }
    } catch(e) {
    }
    return c;
};