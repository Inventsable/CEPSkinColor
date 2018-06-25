var cs = new CSInterface();
var sysPath = cs.getSystemPath(SystemPath.EXTENSION);
var aSystem = document.getElementById('textSystem');
var aAppName = document.getElementById('textAppName');
var aAppVersion = document.getElementById('textAppVersion');
var aDoc = document.getElementById('textDoc');
var aPath = document.getElementById('textPath');
var aColor = document.getElementById('textColor');
var aTheme = document.getElementById('textTheme');
var aPanelBG = document.getElementById('textPanelBG');
var aBorderColor = document.getElementById('textBorder');
var aHighlight = document.getElementById('textHighlight');
var aSelect = document.getElementById('textSelected');
var aDisable = document.getElementById('textDisabled');
var aActive = document.getElementById('textActive');
var aInputBGIdle = document.getElementById('textInputBGIdle');
var aInputBGActive = document.getElementById('textInputBGActive');
var aFont = document.getElementById('textFont');
var aFontSize = document.getElementById('textFontSize');
var aFontColor = document.getElementById('textFontColor');
var aDisabledColor = document.getElementById('textDisabledColor');
var aInput1 = document.getElementById('input1');
// var aUpDown = document.getElementById('upDown');
// var aUpDownUp = document.getElementById('upDownUp');
// var aUpDownDown = document.getElementById('upDownDown');
var aInput2 = document.getElementById('input2');
var aInput3 = document.getElementById('input3');
var aBtn1 = document.getElementById('btn1');
var aBtn1Drop = document.getElementById('triangle');
var aBtn2 = document.getElementById('btn2');
var aBtn3 = document.getElementById('btn3');
var aBtn4 = document.getElementById('btn4');
var info = document.getElementById('infoList');

function reSkinUI(){
    aBtn2.style.backgroundColor = appInfo.highlightColor;
    aBtn2.style.borderColor = appInfo.borderColor;
    aBtn3.style.backgroundColor = appInfo.selectColor;

    if ((appInfo.name === 'PHXS') && (appInfo.theme === 'Light')) {
      aInput3.style.borderColor = appInfo.borderDisabledColor;
      aBtn3.style.borderColor = appInfo.borderActiveColor;
      aBtn4.style.borderColor = appInfo.borderDisabledColor;
    } else {
      aInput3.style.borderColor = "transparent";
      aBtn3.style.borderColor = appInfo.borderColor;
      aBtn4.style.borderColor = appInfo.disableColor;
    }

    if ((appInfo.name === 'PHXS') && (appInfo.theme === 'Lightest')) {
      aInput3.style.borderColor = appInfo.borderDisabledColor;
      aInput3.style.backgroundColor = "#fafafa";
      aBtn3.style.borderColor = appInfo.borderActiveColor;
      aBtn4.style.borderColor = appInfo.borderDisabledColor;
    } else {
      aInput3.style.borderColor = "transparent";
      aBtn3.style.borderColor = appInfo.borderColor;
      aBtn4.style.borderColor = appInfo.disableColor;
    }

    aBtn4.style.backgroundColor = "transparent";
    aBtn4.style.color = appInfo.baseFontDisabledColor;
}

function reSkinText() {
    aSystem.textContent = appInfo.system;
    aAppName.textContent = appInfo.name;
    aAppVersion.textContent = appInfo.version;

    aTheme.textContent = appInfo.theme;
    aColor.textContent = appInfo.color;
    aPanelBG.textContent = appInfo.panelBG;
    aBorderColor.textContent = appInfo.borderColor;
    aHighlight.textContent = appInfo.highlightColor;
    aSelect.textContent = appInfo.selectColor;
    aDisable.textContent = appInfo.disableColor;
    aActive.textContent = appInfo.activeColor;
    aInputBGIdle.textContent = appInfo.inputBGColorIdle;
    aInputBGActive.textContent = appInfo.inputBGColorActive;
    aFont.textContent = appInfo.baseFont;
    aFontSize.textContent = appInfo.baseFontSize;
    aFontColor.textContent = appInfo.baseFontColor;
    aDisabledColor.textContent = appInfo.baseFontDisabledColor;
    aDisabledColor.style.color = appInfo.baseFontDisabledColor;
}

// aUpDownUp.addEventListener("mouseover", function(event){
//   this.style.backgroundColor = appInfo.disabledColor;
// }, false)
// aUpDownUp.addEventListener("mouseout", function(event){
//   this.style.backgroundColor = appInfo.inputBGColorIdle;
// }, false)
