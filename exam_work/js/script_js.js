var up = document.querySelector(".arrow-up");
var login = document.querySelector("#login");
var bgLayer = document.createElement("div");
var mainDiv = document.createElement("div");
var logTitle = document.createElement("p"); 
var username = document.createElement("input");
var password = document.createElement("input");
var lastDiv = document.createElement("div"); 
var insideLastDiv = document.createElement("div"); 
var closeBtnDiv = document.createElement("div"); 
var closeBtn = document.createElement("button");
var keepSignedSpan = document.createElement("span");
var btnSignIn = document.createElement("button");
var leftSlide = document.querySelector(".left-arrow");
var rightSlide = document.querySelector(".right-arrow");
var bgSlide = document.querySelector(".mid-bg");
var checkedPoint = document.querySelectorAll(".butt>input");
function showModal()
{
    bgLayer.style.width="100%";
    bgLayer.style.height="100%";
    bgLayer.style.position = "fixed";
    bgLayer.style.top="0%";
    bgLayer.style.background="rgb(37,36,34,0.8)";
    bgLayer.style.zIndex = "1";
    bgLayer.style.display = "block";
    document.body.appendChild(mainDiv);
    document.body.appendChild(bgLayer);

    var mainDivWidth = 304;
    var mainDivHeight = 215;
    mainDiv.style.boxSizing="border-box";
    mainDiv.style.borderBottom="3px solid rgb(235,235,235)";
    mainDiv.style.height = mainDivHeight+"px";
    mainDiv.style.width = mainDivWidth+"px";
    mainDiv.style.background = "#fff";
    mainDiv.style.display = "block";
    mainDiv.style.display = "inline-block";
    mainDiv.style.zIndex = "3";
    mainDiv.style.padding="27px 32px";
    mainDiv.style.top = (document.documentElement.clientHeight-mainDivHeight)/2+"px";
    mainDiv.style.left = (document.documentElement.clientWidth-mainDivWidth)/2+"px";
    mainDiv.style.position = "fixed";
    mainDiv.appendChild(logTitle);
    mainDiv.appendChild(username);
    mainDiv.appendChild(password);
    mainDiv.appendChild(lastDiv);
    
    logTitle.innerText="SIGN IN";
    logTitle.style.color="rgb(240,157,102)";
    logTitle.style.fontFamily="Homizio Nova";
    logTitle.style.fontSize="15px";
    logTitle.style.marginBottom="20px";
    
    username.className=password.className="log-input";
    var input = document.querySelectorAll(".log-input");
    username.placeholder="   username";
    input[1].placeholder="   password";
    input.forEach(function(elem){
        elem.style.background="pink";
        elem.style.width="100%";
        elem.style.boxSizing="border-box"; 
        elem.style.borderWidth="0 0 0 3px";
        elem.style.borderColor="#f09d66";
        elem.style.marginBottom="13px";
        elem.style.height="30px";
        elem.style.background="rgb(235,235,235)";
        elem.style.fontStyle="italic";
        elem.style.fontFamily="Homizio Nova";
        elem.type="text";});

        lastDiv.style.width="100%";
        lastDiv.style.height="24px";
        lastDiv.style.position="relative";
        lastDiv.appendChild(btnSignIn);
        lastDiv.appendChild(insideLastDiv);
        
        insideLastDiv.style.position="relative";
        insideLastDiv.style.width="110px%";
        insideLastDiv.style.height="12px";
        insideLastDiv.appendChild(closeBtn);
        insideLastDiv.appendChild(keepSignedSpan);
        
        closeBtn.innerText="x";
        closeBtn.style.border="none";
        closeBtn.style.width="10px";
        closeBtn.style.height="12px";
        closeBtn.style.fontSize="10px";
        closeBtn.style.padding="0";
        closeBtn.style.verticalAlign="top";
        closeBtn.style.textAlign="center";
        closeBtn.style.color="rgb(117,117,117)";
        closeBtn.style.background="rgb(235,235,235)";

        keepSignedSpan.innerText="Keep me signed in.";
        keepSignedSpan.style.height="12px";
        keepSignedSpan.style.fontSize="12px";
        keepSignedSpan.style.verticalAlign="top";
        keepSignedSpan.style.fontFamily="monospace";
        keepSignedSpan.style.color="rgb(170,170,170)";
        keepSignedSpan.style.fontWeight="100";
        keepSignedSpan.style.margin="5px";

        btnSignIn.innerText="SIGN IN";
        btnSignIn.style.border="none";
        btnSignIn.style.background="rgb(240,157,102)";
        btnSignIn.style.color="#fff";
        btnSignIn.style.width="62px";
        btnSignIn.style.height="24px";
        btnSignIn.style.fontSize="10px";
        btnSignIn.style.position="absolute";
        btnSignIn.style.right="0";
        btnSignIn.style.fontFamily="Homizio Nova";
    }
    
    function hideAll()
    {
        mainDiv.style.display = "none";
        bgLayer.style.display = "none";
    }
    
    function toTop()
    {
        window.scrollTo({top:0, behavior: 'smooth'});
    }

    var slideIndex=1;

    function slideToRight()
    {
        slideIndex++;
        if(slideIndex>checkedPoint.length)
        {
            slideIndex=1;
        } 
        switch(slideIndex)
        {
            case 1: bgSlide.style.backgroundImage ="url(../exam_work/images/women.png)"; checkedPoint[0].checked="true"; break;
            case 2: bgSlide.style.backgroundImage ="url(../exam_work/images/women2.png)"; checkedPoint[1].checked="true"; break;
            case 3: bgSlide.style.backgroundImage ="url(../exam_work/images/women3.png)"; checkedPoint[2].checked="true"; break;
        }
    }

    function slideToLeft()
    {
        slideIndex--;
        if(slideIndex<1)
        {
            slideIndex=3;
        } 
        switch(slideIndex)
        {
            case 1: bgSlide.style.backgroundImage ="url(../exam_work/images/women.png)"; checkedPoint[0].checked="true"; break;
            case 2: bgSlide.style.backgroundImage ="url(../exam_work/images/women2.png)"; checkedPoint[1].checked="true"; break;
            case 3: bgSlide.style.backgroundImage ="url(../exam_work/images/women3.png)"; checkedPoint[2].checked="true"; break;
        }
    }

    function pointSlide()
    {
        for(var i=0; i<checkedPoint.length;i++){
            if(checkedPoint[i].checked==1) 
            {
                slideIndex=i+2; 
                slideToLeft();
            }
        }
    }

    login.addEventListener("click", showModal);
    bgLayer.addEventListener("click", hideAll);
    closeBtn.addEventListener("click", hideAll);
    up.addEventListener("click", toTop);
    leftSlide.addEventListener("click", slideToLeft);
    rightSlide.addEventListener("click", slideToRight);
    checkedPoint.forEach(elem => elem.addEventListener("click", pointSlide));