var csInterface = new CSInterface();
var appName = csInterface.hostEnvironment.appName;
var logPath = csInterface.getSystemPath(SystemPath.EXTENSION) + "/log/";
var isFlipped = false;

  var menuXML = '<Menu> \
    <MenuItem Id="refresh" Label="Refresh panel" Enabled="true" Checked="false"/> \
    <MenuItem Id="sendMsg" Label="Message Skin" Enabled="true" Checked="false"/> \
    <MenuItem Id="scribe" Label="Scribe" Enabled="true" Checked="false"/> \
    \
    <MenuItem Label="---" /> \
    \
  </Menu>';

csInterface.setPanelFlyoutMenu(menuXML);
csInterface.addEventListener("com.adobe.csxs.events.flyoutMenuClicked", setPanelCallback);



function setPanelCallback(event) {
  if (event.data.menuId == "refresh") {
    location.reload();
  } else if (event.data.menuId == "sendMsg") {
    // csInterface.evalScript(`getMsg()`, msgData);
    logSkin();
  } else if (event.data.menuId == "scribe") {
    var path = logPath + "scribe.js";
    var data = "This is a test";
    console.log(path + ", " + data);
    var result = window.cep.fs.writeFile(path, data);
    // var result = window.cep.fs.readFile(path);
    if (0 == result.err) {
         console.log("Success");
         console.log(result);
    } else {
         console.log(`Error ${result.err}`);
    }
  } else {
    console.log(`Nothing happened.`);
  }
}
