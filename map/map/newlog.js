var arr=[]

document.getElementById("btn").addEventListener("click",goto)
function goto(){
    var newvalue= document.getElementById("input").value;
    //  console.log(newvalue);
     arr.push(newvalue)
     console.log(arr)
     document.getElementById("h2tag").innerText="";
     arr.map(function(e){
        var p=document.createElement("p")
        p.innerText=e;
        document.querySelector("#h2tag").append(p)
     })
    
     document.getElementById("input").value=""
     
}