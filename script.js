// this is login.js file in this file i write logic for authentication of user in this i use  authentication api
//for check user vaild or not if user vaild then redirect to index.html page

let usermail = document.getElementById("usermail");
let password = document.getElementById("passwordinput");
let buttton = document.getElementById("submitbtn");




buttton.addEventListener("click" , (e) =>{
    e.preventDefault();
    let usermailvalue = usermail.value; 
    let passwordvalue = password.value;

    // if(!usermailvalue ||   !passwordvalue){
    //     alert("Please fill all fields");
    // }
   

    userdata = {
      email :   usermailvalue,
      password : passwordvalue,
    };

    fetch("https://instagram-express-app.vercel.app/api/auth/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userdata)


    })
    .then((response) => response.json())
    .then((data) => {
            console.log(data);
          if(data.success){
             location.href = "page/youtube.html"
             console.log("login successfull");
          }             
    })
      .catch(error => console.log(error))
})