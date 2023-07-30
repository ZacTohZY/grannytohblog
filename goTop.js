let mybutton = document.getElementById("myBtn");

/* when user scroll down 20px*/
window.onscroll = function()
{
    scrollFunction();
}
function scrollFunction()
{
    if(document.documentElement.scrollTop > 20) 
    {
        mybutton.style.display = "block";
    }
    else
    {
        mybutton.style.display = "none";
    }
}

function goTopFunction()
{
    document.documentElement.scrollTop = 0; 
    /* for windows only but for safari (document.body.scrollTop = 0;)*/
}
