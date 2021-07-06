class DonutMaker {
    constructor(numDonuts,numAutoClickers,autoClickersCost,numMultipliers,multiplierCost){
    this.numDonuts = numDonuts;
    this.numAutoClickers = numAutoClickers;
    this.autoClickersCost = autoClickersCost;
    this.numMultipliers = numMultipliers;
    this.multiplierCost = multiplierCost;
    }
    addDonut() {
    this.numDonuts++;
    }
    addAutoClicker() {
    if (this.numDonuts >= 100) {
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
}
    
    export default DonutMaker;