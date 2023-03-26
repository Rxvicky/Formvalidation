const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const password2=document.getElementById("password2");

form.addEventListener('submit',e =>{
    e.preventDefault();
    checkInput();
});

function checkInput()
{
    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const passwordvalue=password.value.trim();
    const password2=password2.value.trim();

    if(usernameValue==='')
    {
      setError(username,'Username Cannot be Blank');
    }
    else
    {
        setSucces(username);
    }


    if(emailValue==='')
    {
        setError(email,'Email cannot be Blank');
    }
    else if(!isEmail(emailValue))
    {
        setError(email,'Not a valid Email');
    }
    else
    {
        setSucces(email);
    }
    

    if(passwordvalue==='')
    {
        setError(password,'Password cannot Be Blank');
    }
    else
    {
        setSucces(password);
    }


    if(password2value==='')
    {
        setError(password2,'Password cannot Be Blank');
    }
    elseif(passwordvalue !== password2value)
    {
        setError(password2,'password Does not match')
    }
    else
     {
        setSucces(password2);
    }    
    
    
}


function isEmail(email){
    return  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}

function setError(input,message){
    const formControl=input.parentElement;
    const small =formControl.querySelector('small');
    formControl.className='form-control error';
    small.innerText=message;
}

function setSucces(){
    const formControl= input.parrentElement;
    formControl.className='form-control success';
}
