const items=document.querySelectorAll(".timeline li");
document.addEventListener("DOMContentLoaded",()=>
{
     isElementInViewport;
     getCallBackFun;
     window.addEventListener("load", getCallBackFun);
     window.addEventListener("resize", getCallBackFun);
     window.addEventListener("scroll", getCallBackFun);
});
function isElementInViewport(element)
{
    const react=element.getBoundingClientRect();
    return(react.top>=0 && react.left>=0 && react.bottom<=(window.innerHeight || document.documentElement.clientHeight) && react.right<=(window.innerWidth || document.documentElement.clientWidth));
}
function getCallBackFun()
{
    for(let i=0;i<items.length;i++)
    {
        if(isElementInViewport(items[i]))
        {
            items[i].classList.add("in-view");
        }
        else
        {
            items[i].classList.remove("in-view");
        }
    }
}