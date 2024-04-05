let signup = document.getElementById("sign-up");
let signin = document.getElementById("sign-in");
let title = document.getElementById("title");
let submit = document.getElementById("btn-submit")
let name = document.getElementById("name-field");
let name1 = document.getElementById("name");
let username = document.getElementById("username");
let password = document.getElementById("password");
let formBox =document.getElementById('form-box')
let message = document.getElementById('message')
let back = document.getElementById('back')

let login=0;

signin.onclick=function(){
    name.style.maxHeight='0';
    title.innerHTML="Sign In";
    signin.classList.remove("diasable")
    signup.classList.add("diasable")
    name1.remove.requriment
    login=1;
    errorMessage.innerHTML=''
    name1.value=""
    username.value=""
    password.value=""
}

signup.onclick=function(){
    name.style.maxHeight='65px';
    title.innerHTML="Sign Up";
    signin.classList.add("diasable")
    signup.classList.remove("diasable")
    login=0;
    errorMessage.innerHTML=''
    name1.value=""
    username.value=""
    password.value=""
}



const user={
    name:["Jeet Ladani"],
    username:["jeet"],
    password:["1234"]
}





let errorMessage=document.getElementById('errorMessage')

let form=document.getElementById("form");


// signin / sign up
form.addEventListener('submit',(e) =>{
    e.preventDefault()
    

// signup    
if(!login){
    if(name1.value!="" && username.value!="null" && password.value!="null"){
        let x=1;
        for(i=0;i<user.username.length;i++)
        {
            if(user.username[i]==username.value)
            {
                x=0
            }
        }
        if(x){
            user.name.push(name1.value)
            user.username.push(username.value)
            user.password.push(password.value)
            name1.value=""
            username.value=""
            password.value=""
        }
        else{
            errorMessage.innerHTML='Username already exist'
        }

    }
    
}


// signin
    if(login)
    {
        if(username.value!="null" && password.value!="null"){
            for(let i=0;i<user.name.length;i++){
                if(user.username[i]==username.value && user.password[i]==password.value)
                {
                    formBox.style.display="none"
                    afterMessage.style.display="block"
                    message.innerHTML=`${user.name[i]} you have succesfully Login`
                    errorMessage.innerHTML=''
                }
                else
                {
                    errorMessage.innerHTML='Incorrect Username or Password'
                }
            }
        }
    }
})

let afterMessage=document.getElementById('afterMessage')

back.onclick=function(){
    formBox.style.display="block"
    name1.value=""
    username.value=""
    password.value=""
    afterMessage.style.display="none"

}