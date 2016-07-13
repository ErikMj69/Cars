/* * * * * * * * * * *  JITTER.JS  * * * * * * * * * * * #
 *
 *  @todo
 *    Library for control over objects. It's game oriented.
 *
 *  @author
 *    Erik Martinez <erik.mj69@gmail.com>
 *
 *  @license
 *    Copyright (C) 2016 Erik Martinez
 *
 *    This program is free software: you can redistribute it and/or modify
 *    it under the terms of the GNU General Public License as published by
 *    the Free Software Foundation, either version 3 of the License, or
 *    (at your option) any later version.
 *
 *    This program is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU General Public License for more details.
 *
 *    You should have received a copy of the GNU General Public License
 *    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

(function() {

  // DEFINE ELEMENTS
  var bodyMain = document.getElementsByClassName('bodyMain')[0],
      gameBox = document.getElementById('gameBox'),
      car_1 = document.getElementById('car_1'),
      car_2 = document.getElementById('car_2'),

      // MENUS
      mainMenu = document.getElementById("gameMainMenu"),
      pauseMenu = document.getElementById("gamePauseMenu"),
      goMenu = document.getElementById("gameGOMenu"),
      statsMenu = document.getElementById("gameStatsMenu"),

      // NON-STATIC BUTTONS
      homeBtn = document.getElementsByClassName("homeButton"),
      statsBtn = document.getElementsByClassName("statsButton"),
      downloadBtn = document.getElementsByClassName("downloadButton"),
      nsButtonArr = [homeBtn, statsBtn, downloadBtn],

      // STATIC BUTTONS
      playBtn = document.getElementById("playButton"),
      resumeBtn = document.getElementById("resumeButton"),
      pauseBtn = document.getElementById("pauseButton"),
      resetBtn = document.getElementById("resetButton"),
      twitterBtn = document.getElementById("twitterButton"),
      bgSoundBtn = document.getElementById("bgSoundButton"),
      fxSoundBtn = document.getElementById("fxSoundButton")
  
      // ASSETS
      bgSound = document.getElementById("bgSound"),
      fxSound = document.getElementById("fxSound");

  // Configuration
  var config = {
    bgSound: 1,
    fxSound: 1
  };
  
  // FUNCTION FOR RESIZING
  function resizeElm() {
    var h = bodyMain.clientHeight,
        dw = h / 1.77,
        hlf = Math.round(dw / 2),
        qtr = Math.round(dw / 4),
        csz = Math.round(qtr * 0.60);

    gameBox.style.width = Math.round(dw) + "px";

    car_1.style.width = csz + "px";
    car_1.style.height = Math.round(csz * 1.5) + "px";
    car_2.style.width = csz + "px";
    car_2.style.height = Math.round(csz * 1.5) + "px";
    car_1.style.left = Math.round(qtr * 0.2) + "px";
    car_2.style.left = Math.round((qtr * 3) + (qtr * 0.2)) + "px";
  };
  
  // EVENT FOR RESIZING
  window.addEventListener("resize", resizeElm);
  
  // INITIALIZATION
  resizeElm();
  
  // EVENTS
  nsButtonArr.forEach(function(item, index) {
    for(var sitem in item) {

      if (!item.hasOwnProperty(sitem)) continue;

      item[sitem].addEventListener("click", function() {
        switch(item[0].className) {
          case 'homeButton':
            mainMenu.style.display = "block";
            statsMenu.style.display = "none";
            goMenu.style.display = "none";
            pauseMenu.style.display = "none";
            
            // App.gameStop();
            break;
          case 'statsButton':
            mainMenu.style.display = "none";
            statsMenu.style.display = "block";
            goMenu.style.display = "none";
            pauseMenu.style.display = "none";
            
            Canvas.draw([
              ['2016-06-02', 50],
              ['2016-06-13', 30]
            ]);
            break;
          case 'downloadButton':
            location.href = "https://play.google.com/store/apps/details?id=com.ketchapp.twocars";
            break;
        }
      });

    }
  });
  
  
  playBtn.addEventListener("click", function() {
    mainMenu.style.display = "none";
    statsMenu.style.display = "none";
    goMenu.style.display = "none";
    pauseMenu.style.display = "none";

    // App.initGame();
  });

  resumeBtn.addEventListener("click", function() {
    mainMenu.style.display = "none";
    statsMenu.style.display = "none";
    goMenu.style.display = "none";
    pauseMenu.style.display = "none";

    // App.resumeGame();
  });

  pauseBtn.addEventListener("click", function() {
    mainMenu.style.display = "none";
    statsMenu.style.display = "none";
    goMenu.style.display = "none";
    pauseMenu.style.display = "block";

    // App.pauseGame();
  });
  
  resetBtn.addEventListener("click", function() {
    mainMenu.style.display = "none";
    statsMenu.style.display = "none";
    goMenu.style.display = "none";
    pauseMenu.style.display = "none";

    // App.resetGame();
  });
  
  twitterBtn.addEventListener("click", function() {
    var score = 100,
        text = "OMG I scored " + score + " points in the #2Cars game on Android https://play.google.com/store/apps/details?id=com.ketchapp.twocars";

    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(text), "Twitter", "height=300,width=600");
  });
  
  bgSoundBtn.addEventListener("click", function() {
    if(config.bgSound) {
      bgSound.pause();
      config.bgSound = 0;
    } else {
      bgSound.play();
      config.bgSound = 1;
    }
  });

  fxSoundBtn.addEventListener("click", function() {
    if(config.fxSound) {
    fxSound.pause();
      config.fxSound = 0;
    } else {
      fxSound.play();
      config.fxSound = 1;
    }
  });


})();