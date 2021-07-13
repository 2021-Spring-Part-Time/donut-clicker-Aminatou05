 export default class DonutMaker {
    constructor(numDonuts,numAutoClickers,autoClickersCost,numMultipliers,multiplierCost){
    this.numDonuts = numDonuts;
    this.numAutoClickers = numAutoClickers;
    this.autoClickersCost = autoClickersCost;
    this.numMultipliers = numMultipliers;
    this.multiplierCost = multiplierCost;
   
    }
    addDonut() {
    this.numDonuts+= Math.round(1.2,this.numMultipliers);
    }
    addAutoClicker() {
    if (this.numDonuts >= this.autoClickersCost) {
    this.numAutoClickers++;
    this.numDonuts -= this.autoClickersCost;
    this.autoClickersCost = Math.round(this.autoClickersCost *1.1);
   
    
    }
    }
    activateAutoClickers() {
    if (this.numAutoClickers > 0) {
    this.numDonuts += this.numAutoClickers;
    }

    }
    addMultipliers(){
        if (this.numDonuts >= this.multiplierCost){
            this.numMultipliers++;
            this.numDonuts -= this.multiplierCost;
            this.multiplierCost = Math.round(this.multiplierCost *1.1);

        }
    }
}
    
  