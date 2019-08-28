onmessage= sleep;
function sleep(event)
{
      var date = new Date();
      var curDate = null;
      do {
      curDate = new Date();
      }
      while(curDate-date < event.data);
      var diff=curDate-date;
      postMessage("Slept for "+diff+" ms");
}
