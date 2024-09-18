setInterval(digitalTime, 1000);

function digitalTime(){
    const now = new Date();
    
    const seconds = now.getSeconds();
    const minutes=now.getMinutes();
    const hours=now.getHours();

    //Am or PM and morning evening
    let ampm='';
    let gm='';

    if(hours<12){ 
        ampm='AM';
        gm='Good Morning,';
    }
    else if (12<= hours & hours<3) {
        gm='Good Afternoon,';
    } 
    else{
        ampm='PM';
        gm='Good Evening,'
    }
    console.log(ampm);

    //display digital clock time
    h=hours>12 ? hours-12 :hours;
    m=minutes<10 ? '0' +minutes : minutes;
    s=seconds<10 ? '0' +seconds : seconds;

    document.querySelector(".time").textContent=`${h}:${m}:${s} ${ampm}`;
    
    document.getElementById("gm").textContent=gm;

    
    
}

//name text box
function Name(btn){
    if(btn.key === 'Enter'){
        let n=document.getElementById("nameinput");
        let d=document.getElementById("showname");

        let a=n.value;
        if(a.length > 0){
            n.style.display = 'none'; 
            d.textContent = a; 
            d.style.display = 'block';
        }
    }
};
    



// Background image changing
const quotes = [
    "I am capable of achieving my goals.",
    "Today is going to be a great day.",
    "I am doing my best, and that's good enough.",
    "Good things are coming my way.",
    "My thoughts and feelings matter.",
  ];


const bg=['assets/img/landing-bg-1.jpg',
    'assets/img/landing-bg-2.jpg',
    'assets/img/landing-bg-3.jpg',
    'assets/img/landing-bg-4.jpg',
    'assets/img/landing-bg-5.jpg'];

function bgchange(){
    const imgno=Math.floor (Math.random() * bg.length);
    const img=bg[imgno];
    document.body.style.background=`url(${img})`;


    //quotation
    const q=quotes[imgno];
    console.log(q);
    document.getElementById("quotation").innerHTML =q;
    

};
window.onload = bgchange;


//footer
function colour(color){
    const arrdiv=['header','clk','footer', 'div'];
    for(let i=0; i<arrdiv.length; i++){
        const a=document.getElementsByClassName(arrdiv[i]);
        for(let j=0; j<a.length; j++){
            a[j].style.backgroundColor=color;
        }
    }
}