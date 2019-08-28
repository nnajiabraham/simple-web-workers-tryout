window.onload=init;
function init(){
      var numOfWorkers=8;
      var workers=[];
      for(var i=0;i<numOfWorkers;i++){
          var worker=new Worker("worker.js");
       worker.id=(i+1);
          worker.onmessage=function(event){
              
              var ul=document.getElementById("output");
              var li=document.createElement("li");
              var date= new Date();
              li.innerHTML=date+" Worker "+event.target.id +" says: "+event.data;
              ul.appendChild(li);
          };
          workers.push(worker);
      }
      for(var i=0;i<10;i++){
          var randNum=Math.random()*20000;
          workers[i].postMessage(randNum);
      }
}
