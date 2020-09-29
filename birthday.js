(function () {
    function $(id) {
      return document.getElementById(id);
    }

    function play() {
      var audio = document.getElementById("audio");
      audio.play();
    }
    function stop() {
      var audio = document.getElementById("audio");
      audio.pause();
    }

    var bodyy = document.getElementById("bodyyy");	
    var card = $("card"),
      openB = $("open"),
      closeB = $("close"),
      timer = null;
    console.log("wat", card);
    openB.addEventListener("click", function () {
      card.setAttribute("class", "open-half");
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        card.setAttribute("class", "open-fully");
        timer = null;
      }, 1000);
      play();
    bodyy.style.background = "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)";
    });
    
    
  
    closeB.addEventListener("click", function () {
      card.setAttribute("class", "close-half");
      if (timer) clearTimerout(timer);
      timer = setTimeout(function () {
        card.setAttribute("class", "");
        timer = null;
      }, 1000);
      stop();
      bodyy.style.background = "url('bday.jpg')";
    });
    
  })();
  