function reproduzirSom() {
    var som = document.getElementById("meuSom");
    som.play();
  }



  document.addEventListener("DOMContentLoaded", function () {
    var hoverContent = document.getElementById("hoverContent");
    var imagemHover = document.getElementById("88fortunes");
    var videoHover = document.getElementById("videoHover");
  
    hoverContent.addEventListener("mouseover", function () {
      imagemHover.style.display = "none";
      videoHover.style.display = "block";
      videoHover.play();
    });
  
    hoverContent.addEventListener("mouseout", function () {
      imagemHover.style.display = "block";
      videoHover.style.display = "none";
      videoHover.pause();
      videoHover.currentTime = 0;
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    var hoverContent = document.getElementById("hoverContent1");
    var imagemHover = document.getElementById("buffalo");
    var videoHover = document.getElementById("videoHover1");
  
    hoverContent.addEventListener("mouseover", function () {
      imagemHover.style.display = "none";
      videoHover.style.display = "block";
      videoHover.play();
    });
  
    hoverContent.addEventListener("mouseout", function () {
      imagemHover.style.display = "block";
      videoHover.style.display = "none";
      videoHover.pause();
      videoHover.currentTime = 0;
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    var hoverContent = document.getElementById("hoverContent2");
    var imagemHover = document.getElementById("cleopatra");
    var videoHover = document.getElementById("videoHover2");
  
    hoverContent.addEventListener("mouseover", function () {
      imagemHover.style.display = "none";
      videoHover.style.display = "block";
      videoHover.play();
    });
  
    hoverContent.addEventListener("mouseout", function () {
      imagemHover.style.display = "block";
      videoHover.style.display = "none";
      videoHover.pause();
      videoHover.currentTime = 0;
    });
  });
  