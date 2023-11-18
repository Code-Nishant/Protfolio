// typing annimation 
var typed= new Typed(".typing", {
    strings: ["","Web Devloper", "","Java Programmer","","Frontend Developer","","React Developer", "","UI Designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
});

var t=new Typed(".type",{
strings: ["","Web Devloper", "","Java Programmer","","Frontend Developer","","React Developer", "","UI Designer"],
typeSpeed:100,
BackSpeed:60,
loop:true
})

//side bar effect
const nav= document.querySelector(".nav");
const navList= nav.querySelectorAll("li");
const totalNavlist= navList.length;

const allSelection=document.querySelectorAll(".section");
const totalSelection= allSelection.length;
// console.log(totalNavlist);
for (let i=0; i<totalNavlist; i++){
    const a= navList[i].querySelector("a");
    // console.log(navList[i]);
    a.addEventListener("click", function(){
        removeBackSection();
        for(let j=0; j<totalNavlist; j++){
            if(navList[j].querySelector("a").classList.contains("active")){
                // allSelection[j].classList.add("back-section");
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if(window.innerWidth<1200){
            sideSectionTogglerBtn()
        }
    })
}
function removeBackSection(){
    for(let i =0;i<totalSelection;i++){
        allSelection[i].classList.remove("back-section");
    }

}
function addBackSection(num){
    allSelection[num].classList.add("back-section");
}
function showSection(element){

    for(let i =0;i<totalSelection;i++){
        allSelection[i].classList.remove("active");
    }
    const traget=element.getAttribute("href").split("#")[1];
    console.log(traget);
    document.querySelector("#"+traget).classList.add("active");
}




function updateNav(element){
    
    for(let i=0; i<totalNavlist; i++){
        navList[i].querySelector("a").classList.remove("active");
        
        const traget=element.getAttribute("href").split("#")[1];
        // console.log(navList[i].querySelector("a").getAttribute("herf").split("#")[1]);

        if (traget===navList[i].querySelector("a").getAttribute("href").split("#")[1]) {

            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function(){
    const sectionIndex = this.getAttribute("data-section-index");
    console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})


//nav bar toggling
const navTooglerbtn=document.querySelector(".nav-toggler");
const side=document.querySelector(".side");
navTooglerbtn.addEventListener("click",()=>{
    sideSectionTogglerBtn();
})
function sideSectionTogglerBtn(){
    side.classList.toggle("open");
    navTooglerbtn.classList.toggle("open");
    for(let i=0; i<totalSelection; i++){
        allSelection[i].classList.toggle("open");
    }
}


// mail form
const form_Button=document.getElementById("mail");
form_Button.addEventListener("click",()=>{
    sendMail();
})
function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_fn9w05d";
    const templateID = "template_k8lh9j1";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("subject").value= "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
}