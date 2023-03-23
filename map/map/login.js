// var btn = document.getElementById("btn");
// btn.addEventListener("click",myFun)

var arr = [];
console.log(arr)
document.getElementById("btn").addEventListener("click", myFun);
function myFun() {
    var inputValue = document.getElementById("inputData").value
    arr.push(inputValue)
    console.log(arr)
    document.querySelector(".h2Tag").innerText = ""
    arr.map(function (e) {
        var p = document.createElement("p")
        p.innerText = e;
        document.querySelector(".h2Tag").append(p)
    })

    document.getElementById("inputData").value = ""

}
