

//Login
loginData = document.querySelector('#btn-login');
userlocalstorage = localStorage.getItem('userId');
console.log(userlocalstorage);
if(loginData != null)
{
    loginData.addEventListener('click',function(){
        let namevar = document.getElementById('name').value;
        let pwdvar = document.getElementById('pwd').value;
        fetch('http://localhost/api/login_get_method?username='+namevar+'&&password='+pwdvar).then(res=>res.json())
        .then((Response)=>{
            console.log(Response);
            if(Response.Code == 1)
            {
                localStorage.setItem('userId',Response.Data.id);
                window.location.href="dashbord.html";
                console.log("Login Done");
            }
            else{
                alert("Something Went Wrong");
            }
        })
    })
}
//registeration
function Reg_API()
{
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let pwd = document.getElementById('pwd').value;
    let mobile = document.getElementById('mobile').value;
    const AllData = {username:name,email:email,password:pwd,mobile:mobile}
    console.log(AllData);

    fetch('http://localhost/api/registration_api',{method:'POST',headers:{
        'Content-Type':'application/json','Accept':'application/json'
    },body:JSON.stringify({allData:AllData})}).then(res=>res.json()).then((Response)=>{
        console.log(Response);
        if(Response.Code == 1)
        {
            localStorage.setItem('userId',Response.Data);
        }
        else{
            console.log("Something Went Wrong");
        }
    })
}
