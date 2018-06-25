// var compCheck = app.project.item.length;
var exist = app.project.item.length > 0;


// alert(projName)
// var projName = app.project.file
// projName.replace("/", "done")
// alert(projName)
// .replace(/%20/g, "_")
// .replace(/\.(.{3,4}$)/, "");

// alert(exist)

function doesExist() {
  if (app.project.file !== null)
    return true;
  else
    return false;
}
// var aepName = app.project.fullPath.split($.os.indexOf("Windows") > -1 ? "\\" : "/").pop();

// alert(app.project.fullPath)


function docName() {
  var data = [];
  // alert(aepName)
  if (exist) {
    data.push("project name");
    data.push("path to");
    return data;
  }
}
