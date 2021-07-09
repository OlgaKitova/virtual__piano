window.addEventListener('DOMContentLoaded', () => {

// Получаем кнопки нот/букв
const pianoKey = document.querySelectorAll('.piano-key'),
      btnNoteC = document.querySelector('[data-note="c"]'),
      btnNoteD = document.querySelector('[data-note="d"]'),
      btnNoteE = document.querySelector('[data-note="e"]'),
      btnNoteF = document.querySelector('[data-note="f"]'),
      btnNoteG = document.querySelector('[data-note="g"]'),
      btnNoteA = document.querySelector('[data-note="a"]'),
      btnNoteB = document.querySelector('[data-note="b"]'),
      btnNoteCUPPER = document.querySelector('[data-note="c♯"]'),
      btnNoteDUPPER = document.querySelector('[data-note="d♯"]'),
      btnNoteFUPPER = document.querySelector('[data-note="f♯"]'),
      btnNoteGUPPER = document.querySelector('[data-note="g♯"]'),
      btnNoteAUPPER = document.querySelector('[data-note="a♯"]'),
      letters = document.querySelector('.btn-letters'),
      notes = document.querySelector('.btn-notes');
// Получаем проигрыватель
const audioPause = document.querySelectorAll('.pause'),
      audioCupper = document.querySelector('.audio__cupper'),
      audioDupper = document.querySelector('.audio__dupper'),
      audioFupper = document.querySelector('.audio__fupper'),
      audioGupper = document.querySelector('.audio__gupper'),
      audioAupper = document.querySelector('.audio__aupper'),
      audioC = document.querySelector('.audio__c'),
      audioD = document.querySelector('.audio__d'),
      audioE = document.querySelector('.audio__e'),
      audioF = document.querySelector('.audio__f'),
      audioG = document.querySelector('.audio__g'),
      audioA = document.querySelector('.audio__a'),
      audioB = document.querySelector('.audio__b');
// Изменение цвета кнопки переключателя при нажатии и изменение названий нот и букв
 function changeBtnSwitch (one_btn, two_btn, notes) {
one_btn.addEventListener('click', () => {
 two_btn.classList.remove('btn-active'); 
 one_btn.classList.add('btn-active'); 
 [notes.dataset.note, notes.dataset.letter] = [notes.dataset.letter, notes.dataset.note];
});
two_btn.addEventListener('click', () => {
 one_btn.classList.remove('btn-active'); 
 two_btn.classList.add('btn-active'); 
[notes.dataset.note, notes.dataset.letter] = [notes.dataset.letter, notes.dataset.note];
});
 };
 changeBtnSwitch(letters, notes, btnNoteC);
 changeBtnSwitch(letters, notes, btnNoteD);
 changeBtnSwitch(letters, notes, btnNoteE);
 changeBtnSwitch(letters, notes, btnNoteF);
 changeBtnSwitch(letters, notes, btnNoteG);
 changeBtnSwitch(letters, notes, btnNoteA);
 changeBtnSwitch(letters, notes, btnNoteB);
 changeBtnSwitch(letters, notes, btnNoteCUPPER);
 changeBtnSwitch(letters, notes, btnNoteDUPPER);
 changeBtnSwitch(letters, notes, btnNoteFUPPER);
 changeBtnSwitch(letters, notes, btnNoteGUPPER);
 changeBtnSwitch(letters, notes, btnNoteAUPPER);

 //Функция по проигрыванию звука
function playMusic(note) {
   audioPause.forEach(item => {
       item.pause();
    });
     note.currentTime = 0;
     note.play();
}

//Функция по вызову звука
function playNotes(btn,note) {

  function playNote() {
          pianoKey.forEach(item => item.classList.remove('active'));
          playMusic(note);
          btn.classList.add('active');
         setTimeout(() => {
           btn.classList.remove('active');
          }, 300);
  }
     btn.addEventListener('click', playNote);

     document.querySelector('.piano').addEventListener('mousedown', () => {
       btn.addEventListener('mouseover', playNote);  
     });  

    document.querySelector('.piano').addEventListener('mouseup', () => {
         btn.removeEventListener('mouseover',playNote);
         btn.classList.remove('active');
       }); 
  }

 playNotes(btnNoteC, audioC);
 playNotes(btnNoteD, audioD);
 playNotes(btnNoteE, audioE);
 playNotes(btnNoteF, audioF);
 playNotes(btnNoteG, audioG);
 playNotes(btnNoteA, audioA);
 playNotes(btnNoteB, audioB);
 playNotes(btnNoteCUPPER, audioCupper);
 playNotes(btnNoteDUPPER, audioDupper);
 playNotes(btnNoteFUPPER, audioFupper);
 playNotes(btnNoteGUPPER, audioGupper);
 playNotes(btnNoteAUPPER, audioAupper);

 //События клавиатуры
function playLetters (e) {
   switch(e.code) {
     case 'KeyR':
               pianoKey.forEach(item => item.classList.remove('active'));
          btnNoteCUPPER.classList.add('active');
          setTimeout(() => {
            btnNoteCUPPER.classList.remove('active');
          }, 300);
       playMusic(audioCupper);
     break;
     case 'KeyT':
               pianoKey.forEach(item => item.classList.remove('active'));
          btnNoteDUPPER.classList.add('active');
          setTimeout(() => {
              btnNoteDUPPER.classList.remove('active');
          }, 300);
       playMusic(audioDupper);
     break;
     case 'KeyU':
               pianoKey.forEach(item => item.classList.remove('active'));
          btnNoteFUPPER.classList.add('active');
          setTimeout(() => {
            btnNoteFUPPER.classList.remove('active');
          }, 300);
       playMusic(audioFupper);
     break;
     case 'KeyI':
               pianoKey.forEach(item => item.classList.remove('active'));
          btnNoteGUPPER.classList.add('active');
          setTimeout(() => {
             btnNoteGUPPER.classList.remove('active');
          }, 300);
       playMusic(audioGupper);
     break;
     case 'KeyO':
               pianoKey.forEach(item => item.classList.remove('active'));
          btnNoteAUPPER.classList.add('active');
          setTimeout(() => {
            btnNoteAUPPER.classList.remove('active');
          }, 300);
       playMusic(audioAupper);
     break;
     case 'KeyD':
               pianoKey.forEach(item => item.classList.remove('active'));
          btnNoteC.classList.add('active');
          setTimeout(() => {
            btnNoteC.classList.remove('active');
          }, 300);
       playMusic(audioC);
     break;
     case 'KeyF':
                pianoKey.forEach(item => item.classList.remove('active'));
          btnNoteD.classList.add('active');
          setTimeout(() => {
            btnNoteD.classList.remove('active');
          }, 300);
       playMusic(audioD);
     break;
     case 'KeyG':
               pianoKey.forEach(item => item.classList.remove('active'));
          btnNoteE.classList.add('active');
          setTimeout(() => {
             btnNoteE.classList.remove('active');
          }, 300);
       playMusic(audioE);
     break;
     case 'KeyH':
               pianoKey.forEach(item => item.classList.remove('active'));
          btnNoteF.classList.add('active');
          setTimeout(() => {
            btnNoteF.classList.remove('active');
          }, 300);
       playMusic(audioF);
     break;
     case 'KeyJ':
               pianoKey.forEach(item => item.classList.remove('active'));
          btnNoteG.classList.add('active');
          setTimeout(() => {
             btnNoteG.classList.remove('active');
          }, 300);
       playMusic(audioG);
     break;
     case 'KeyK':
                pianoKey.forEach(item => item.classList.remove('active'));
          btnNoteA.classList.add('active');
          setTimeout(() => {
            btnNoteA.classList.remove('active');
          }, 300);
       playMusic(audioA);
     break;
     case 'KeyL':
               pianoKey.forEach(item => item.classList.remove('active'));
          btnNoteB.classList.add('active');
          setTimeout(() => {
           btnNoteB.classList.remove('active');
          }, 300);
       playMusic(audioB);
     break;
   }
    } 
    addEventListener("keydown", playLetters);

    //Fullscreen

    const fullscreenBtn = document.querySelector('.fullscreen');

    document.addEventListener('click', function(e) {
      if(e.target == fullscreenBtn) {
         toggleFullScreen();
      }
    });
    function toggleFullScreen() {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
});
