document.getElementById("create").addEventListener("click", createpara);
function createpara() {
    var content = document.getElementById("new");
    var newcontent = document.createElement("p");
    newcontent.textContent = "this is new content";
    content.appendChild(newcontent);
}

document.getElementById("modify").addEventListener("click", modifyele);
function modifyele() {
    var content = document.getElementById("new");
    var para = content.querySelector("p");
    if (para) {
        para.textContent = "this is modified content";
    } else {
        alert("no content over there");
    }
}

document.getElementById("delete").addEventListener("click", delele);
function delele() {
    var content = document.getElementById("new");
    var para = content.querySelector("p");
    if (para) {
        content.removeChild(para);
    } else {
        alert("no content over there");
    }
}
