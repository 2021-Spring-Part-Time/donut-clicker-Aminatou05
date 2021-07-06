import DonutMaker from "./DonutMaker";

 let jellyDonutMaker = new DonutMaker(0,0,100,0,10);
 
    
  console.log(jellyDonutMaker);

 let createDonutBtn = (document.getElementById('createDonutBtn'))
  createDonutBtn.addEventListener('click',() => {
    jellyDonutMaker.addDonut();
    console.log(jellyDonutMaker.numDonuts);
    document.getElementById('donutsCount').innerHTML = jellyDonutMaker.numDonuts;
  });
  let createAutoClickerBtn = (document.getElementById('createAutoClickerBtn'))
  createAutoClickerBtn.addEventListener('click',() => {
    jellyDonutMaker.addAutoClicker();
    jellyDonutMaker.activateAutoClickers();
    console.log(jellyDonutMaker.numAutoClickers);
    document.getElementById('autoClickersCost').innerHTML = jellyDonutMaker.autoClickersCost;
    document.getElementById('autoClickers').innerHTML = jellyDonutMaker.numAutoClickers;
    document.getElementById('donutsCount').innerHTML = jellyDonutMaker.numDonuts;


    setInterval(function(){
      jellyDonutMaker.activateAutoClickers();
      document.getElementById('donutsCount').innerHTML = jellyDonutMaker.numDonuts;
    },1000);
    })
  



