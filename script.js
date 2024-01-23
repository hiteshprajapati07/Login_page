// function legendsignup(){
//     const para = document.createElement("legend");
//     const node = document.createTextNode("| SignUp |");
//     para.appendChild(node);
//     const element = document.getElementById("fieldset");
//     element.appendChild(para);
//     document.getElementById("fieldset").style.color = "wheat";
//     document.getElementById("fieldset").style.fontSize = "30px";
//     document.getElementById('signupbtn').style.position = "relative";
//     document.getElementById('signupbtn').style.visibility = "hidden";
//     document.getElementById('signupbtn').style.transition = "0.5";
//     document.getElementById('signupbtn').style.transition = "0.5";
//     document.getElementsByClassName('frm-input').style.
// }

function passwordmatch(elem){
    var password = document.getElementById('password');
    // var confirm_password = document.getElementById('Confirm_password');
    if(elem.value.length > 0){
        if(elem.value != password.value)
        {
            document.getElementById('alertmatchpassword').innerText = "password doesn't match";
            document.getElementById('alertmatchpassword').style.fontSize = "16px";
        }
        else{
            document.getElementById('alertmatchpassword').innerText = null;
        }
    } 
    else{
        document.getElementById('alertmatchpassword').innerText = null;

    }
}