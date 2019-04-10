var personalData = document.getElementById("identity");

var mainDiv = document.createElement("h3");
personalData.appendChild(mainDiv);

var imgDiv = document.createElement("div");
var image = document.createElement("img");
image.setAttribute("src" , "image.jpg");
mainDiv.appendChild(image);

var heading = document.createElement("p");
heading.setAttribute("id" , "idName");
mainDiv.appendChild(heading);

var breaks = document.createElement("br");
mainDiv.appendChild(breaks);
var breaks1 = document.createElement("br");
mainDiv.appendChild(breaks1);


var rollNum = document.createElement("p");
var rollNumData = document.createTextNode("Roll No:");
rollNum.appendChild(rollNumData);
mainDiv.appendChild(rollNum);
var inpt1 = document.createElement("input");
inpt1.setAttribute("type" , "text");
inpt1.setAttribute("id" , "one");
rollNum.appendChild(inpt1);

var nam = document.createElement("p");
var nameData = document.createTextNode("Name:");
nam.appendChild(nameData);
mainDiv.appendChild(nam);
var inpt2 = document.createElement("input");
inpt2.setAttribute("type" , "text");
inpt2.setAttribute("id" , "two");

nam.appendChild(inpt2);

var fName = document.createElement("p");
var fNameData = document.createTextNode("Father's Name:");
fName.appendChild(fNameData);
mainDiv.appendChild(fName);
var inpt3 = document.createElement("input");
inpt3.setAttribute("type" , "text");
inpt3.setAttribute("id" , "three");
fName.appendChild(inpt3);

var batch = document.createElement("p");
var batchData = document.createTextNode("Batch:");
batch.appendChild(batchData);
mainDiv.appendChild(batch);
var inpt4 = document.createElement("input");
inpt4.setAttribute("type" , "text");
inpt4.setAttribute("id" , "four");
batch.appendChild(inpt4);


var sign = document.createElement("p");
var singData = document.createTextNode("Authorized By:");
sign.appendChild(singData);
mainDiv.appendChild(sign);
var inpt5 = document.createElement("input");
inpt5.setAttribute("type" , "text");
inpt5.setAttribute("id" , "five");
sign.appendChild(inpt5);


var myIdentity = {
info : "IDENTITY CARD",
data1: prompt("Enter your roll number"),
data2: prompt("Enter your Name"),
data3: prompt("Enter your father's Name"),
data4: prompt("Enter your Batch"),
data5: prompt("Authorized by"),
}


document.getElementById("one").value= myIdentity.data1;
document.getElementById("two").value= myIdentity.data2;
document.getElementById("three").value= myIdentity.data3;
document.getElementById("four").value= myIdentity.data4;
document.getElementById("five").value= myIdentity.data5;
document.getElementById("idName").innerHTML = myIdentity.info;


