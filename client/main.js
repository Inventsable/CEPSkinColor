var csInterface = new CSInterface();
var appSkin = csInterface.hostEnvironment.appSkinInfo;
// var appUI = UIColor();
// appInfo.docPath = csInterface.evalScript(`getPath()`)
var sysPath = csInterface.getSystemPath(SystemPath.EXTENSION);
// var appId = csInterface.hostEnvironment.appId;
callDoc();
buildUI();
logSkin(appSkin);
loadBorderWidth();
loadJSX(`json2.jsx`);
loadJSX(`${appInfo.name}.jsx`);
console.log(`Loading for ${appInfo.name}`);
console.log(appInfo);
