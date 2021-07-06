import DonutMaker from "./DonutMaker";

 let jellyDonutMaker = new DonutMaker(0,0);
    
  console.log(jellyDonutMaker);

 let createDonutBtn = (document.getElementById('createDonutBtn'))
  createDonutBtn.addEventListener('click',() => {
    jellyDonutMaker.addDonut();
    console.log(jellyDonutMaker.numDonuts);
    document.getElementById('donutsCount').innerHTML = jellyDonutMaker.numDonuts;
  });


