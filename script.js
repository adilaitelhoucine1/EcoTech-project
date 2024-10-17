function ToDarkMode(){
    document.body.classList.toggle("dark-mode");
    var links=document.querySelectorAll("a");
    var ftr=document.querySelector("footer");
    var titlecard=document.querySelectorAll("h6");
    var contacttitle=document.querySelectorAll("h1");
    var paragraphs=document.querySelectorAll("p");
    var section2=document.querySelector(".section-2");
    var section4=document.querySelector(".section-4");
    ftr.classList.toggle("footer-dark");
    links.forEach((element) => element.classList.toggle("dark-header"));
    titlecard.forEach((element) => element.classList.toggle("dark-header")); 
    paragraphs.forEach((element) => element.classList.toggle("white-text"));
    section2.classList.toggle("dark-header");
    section4.classList.toggle("dark-header");
    //titlecontact.classList.replace("dark-header"); 
}


