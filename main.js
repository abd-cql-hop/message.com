let username;

document.getElementById("Mybutton").onclick = function(){

    username = document.getElementById("data").value;
    console.log(username);
    document.getElementById("text").innerHTML = username;

}