const characters = [
  {
    job:"hero",
    gender:"Male",
    imgSrc:"https://recursionist.io/img/dashboard/lessons/quickstart/male-hero.png"
  },
  {
    job:"hero",
    gender:"Female",
    imgSrc:"https://recursionist.io/img/dashboard/lessons/quickstart/female-hero.png"
  },
  {
    job:"warrior",
    gender:"Male",
    imgSrc:"https://recursionist.io/img/dashboard/lessons/quickstart/male-warrior.png"
  },
  {
    job:"warrior",
    gender:"Female",
    imgSrc:"https://recursionist.io/img/dashboard/lessons/quickstart/female-warrior.png"
  },
  {
    job:"mage",
    gender:"Male",
    imgSrc:"https://recursionist.io/img/dashboard/lessons/quickstart/male-mage.png"
  },
  {
    job:"mage",
    gender:"Female",
    imgSrc:"https://recursionist.io/img/dashboard/lessons/quickstart/female-mage.png"
  }
];
const traits = ["everyman","bat out of hell","brave","lucky devil","tomboy"];
const jobs = ["hero","warrior","mage"];

var app = new Vue({
  el : "#app",
  data(){
    return {
      name : "Unknown",
      jobs : jobs,
      // characterStatus:characterStatus,
      traits : traits,
      characters :characters,
      selectedJob : 0,
      selectedTrait : "everyman",
      picked : "Male",
      initialStatusValue : 10,
      status : {
        strength : 10,
        agility : 10,
        resilience : 10,
        wisdom : 10,
        luck : 10
      }
    }
  },
  methods : {
    calculateStatus: function(trait){
      switch(trait){
        case "everyman" :
          for(var key in this.status){
            this.status[key] = this.initialStatusValue;
          }
          break;
        case "bat out of hell" :
          for(var key in this.status){
            if(key === "agility"){
              this.status[key] = this.initialStatusValue * 1.4;
            }else{
              this.status[key] = this.initialStatusValue
            }
          }
          break;
        case "brave" :
          for(var key in this.status){
            if(key === "strength" || key === "agility"){
              this.status[key] = this.initialStatusValue * 1.1;
            }else if(this.status[key] === "luck"){
              this.status[key] = this.initialStatusValue * 1.2;
            }else{
              this.status[key] = this.initialStatusValue
            }
          }
          break;
        case "lucky devil" :
          for(var key in this.status){
            if(key === "luck"){
              this.status[key] = this.initialStatusValue * 1.5;
            }else{
              this.status[key] = this.initialStatusValue
            }
          }
          break;
        case "tomboy" :
          for(var key in this.status){
            if(key === "strength" || key === "agility"){
              this.status[key] = this.initialStatusValue * 1.1;
            }else{
              this.status[key] = this.initialStatusValue
            }
          }
          break;
      }
      return this.status;
    }
  },
  computed : {
    matched :function(){
      var results = [];
      for(var i = 0; i < this.characters.length; i++){
        var result = this.characters[i];
        if(result.job === jobs[this.selectedJob] && result.gender === this.picked){
          results.push(result);
        }
      }
      return results;
    },
    traitRegulation: function(){
      var traitsResult = [];
      traitsResult.push(this.traits[0],this.traits[1]);
      if(this.picked === "Male"){
        traitsResult.push(this.traits[3]);
      }else{
        traitsResult.push(this.traits[4]);
      }
      if(this.selectedJob === 0){
        traitsResult.splice(2,0,this.traits[2]);
      }
      return traitsResult;
    }
  }
});
