function getRandom(min, max){
  return Math.random() * (max - min) + min;
}

var isSafari = /constructor/i.test(window.HTMLElement);
var isFF = !!navigator.userAgent.match(/firefox/i);

if (isSafari) {
  document.getElementsByTagName('html')[0].classList.add('safari');
}

// Remove click on button for demo purpose
Array.prototype.slice.call(document.querySelectorAll('.button'), 0).forEach(function(bt) {
  bt.addEventListener('click', function(e) {
    e.preventDefault();
  });
});

initBt4();


// Button 4
function initBt4() {
  var bt = document.querySelectorAll('#component-4')[0];
  var bg = document.querySelectorAll('#component-4 .button')[0];
  var blob = document.querySelectorAll('#component-4 .blob');
  var filter = document.querySelector('#filter-goo-4 feGaussianBlur');

  bt.addEventListener('mousemove', function(e) {
    var x = (e.pageX - bt.offsetLeft - bt.offsetWidth / 2) * 0.6;
    var y = (e.pageY - bt.offsetTop - bt.offsetHeight / 2) * 0.6;

    TweenLite.to(blob[1], 4.2, { x: x, y: y, ease: Elastic.easeOut.config(1, 0.1) });
    TweenLite.to(blob[2], 2.8, { x: x, y: -y, ease: Elastic.easeOut.config(1, 0.1) });
    TweenLite.to(blob[3], 2.8, { x: -x, y: -y, ease: Elastic.easeOut.config(1, 0.1) });
    TweenLite.to(filter, 5, { onUpdate: function() { filter.setAttribute('x', 0); }});
  });

  bt.addEventListener('mouseup', function(e) {
    var x = e.pageX - bt.offsetLeft - blob[0].offsetWidth / 2;
    var y = e.pageY - bt.offsetTop - blob[0].offsetHeight / 2;

    var dirX = Math.random() > 0.5 ? -1 : 1;
    var dirY = Math.random() > 0.5 ? -1 : 1;
    var r = getRandom(60, 80);
    
    Array.prototype.slice.call(blob, 1).forEach(function(bt) {
      var tl = new TimelineLite();
      tl.to(bt, 1.2, { x: dirX * r * Math.random() + '%', y: dirY * r * Math.random() + '%', ease: Elastic.easeOut.config(1, 0.2) });
      tl.to(bt, 1.2, { x: '0%', y: '0%', ease: Elastic.easeOut.config(1, 0.2) }, '-=1.1');
    });
  });
}

// Button 5
function initBt5() {
  var bt = document.querySelectorAll('#component-5')[0];
  var turbVal = { val: 0.000001 };
  var turb = document.querySelectorAll('#filter-glitch-1 feTurbulence')[0];
  var btTl = new TimelineLite({
    paused: true,
    onStart: function() {
      bt.style.filter = 'url(#filter-glitch-1)';
    },
    onUpdate: function() {
      turb.setAttribute('baseFrequency', turbVal.val);
    },
    onComplete: function() {
      bt.style.filter = 'none';
    } });

  btTl.to(turbVal, 0.2, { val: 0.04 });
  btTl.to(turbVal, 0.2, { val: 0.000001 });

  bt.addEventListener('click', function() {
    btTl.restart();
  });
}

// Button 6
function initBt6() {
  var bt = document.querySelectorAll('#component-6')[0];
  var turbVal = { val: 0.000001 };
  var turb = document.querySelectorAll('#filter-glitch-2 feTurbulence')[0];
  var btTl = new TimelineLite({ paused: true, onUpdate: function() {
    turb.setAttribute('baseFrequency', '0.00001 ' + turbVal.val); // Firefox bug is value is 0
  },
  onStart: function() {
    bt.style.filter = 'url(#filter-glitch-2)';
  },
  onComplete: function() {
    bt.style.filter = 'none';
  }});

  btTl.to(turbVal, 0.2, { val: 0.06 });
  btTl.to(turbVal, 0.2, { val: 0.000001 });

  bt.addEventListener('click', function() {
    btTl.restart();
  });
}

// Button 7
function initBt7() {
  var bt = document.querySelectorAll('#component-7')[0];
  var turbVal = { val: 0.000001 };
  var turb = document.querySelectorAll('#filter-glitch-3 feTurbulence')[0];
  var btTl = new TimelineLite({ paused: true, onUpdate: function() {
    turb.setAttribute('baseFrequency', '0.00001 ' + turbVal.val); // Firefox bug is value is 0
  },
  onStart: function() {
    bt.style.filter = 'url(#filter-glitch-3)';
  },
  onComplete: function() {
    bt.style.filter = 'none';
  } });

  btTl.to(turbVal, 0.4, { val: 0.4 });
  btTl.to(turbVal, 0.2, { val: 0.000001 });

  bt.addEventListener('click', function() {
    btTl.restart();
  });
}

// Button 8
function initBt8() {
  var bt = document.querySelectorAll('#component-8')[0];
  var turb = document.querySelectorAll('#filter-ripple-1 feImage')[0];
  var dm = document.querySelectorAll('#filter-ripple-1 feDisplacementMap')[0];

  bt.addEventListener('click', function(e) {
    TweenLite.set(turb, { attr: { x: isFF ? e.offsetX : e.offsetX + 10, y: isFF ? e.offsetY : e.offsetY + 10, width: 0, height: 0 } });
    TweenLite.to(turb, 3, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
    TweenLite.fromTo(dm, 2, { attr: { scale: 30 } }, { attr: { scale: 0 } });
  });
}

// Button 9
function initBt9() {
  var bt = document.querySelectorAll('#component-9')[0];
  var turb = document.querySelectorAll('#filter-ripple-2 feImage')[0];
  var dm = document.querySelectorAll('#filter-ripple-2 feDisplacementMap')[0];

  bt.addEventListener('click', function(e) {
    TweenLite.set(turb, { attr: { x: isFF ? e.offsetX : e.offsetX + 20, y: isFF ? e.offsetY : e.offsetY + 20, width: 0, height: 0 } });
    TweenLite.to(turb, 5, { attr: { x: '-=300', y: '-=300', width: 600, height: 600 } });
    TweenLite.fromTo(dm, 3, { attr: { scale: 30 } }, { attr: { scale: 0 } });
  });
}

// Button 10
function initBt10() {
  var bt = document.querySelectorAll('#component-10')[0];
  var btTxt = bt.querySelector('.button__text');
  var btBg = bt.querySelector('.button__bg');
  var isPlaying = false;
  var turbVal = { val: 0.000001 };
  var turbValX = { val: 0.000001 };
  var turb = document.querySelectorAll('#filter-music feTurbulence')[0];
  var btTl = new TimelineLite({ paused: true, onUpdate: function() {
    turb.setAttribute('baseFrequency', turbVal.val + ' ' + turbValX.val);
  },
  onComplete: function() {
    btTl.reverse();
  }, onReverseComplete: function() {
    btTl.restart();
  } });

  btTl.to(turbValX, 0.4, { val: 0.04, ease: Power0.easeNone }, 0);
  btTl.to(turbVal, 0.1, { val: 0.2 ,ease: Power0.easeNone }, 0);

  bt.addEventListener('click', function() {
    if(isPlaying) {
      btTxt.textContent = 'Play';
      btTl.pause()
      var btTl2 = new TimelineLite({ onUpdate: function() {
        turb.setAttribute('baseFrequency', turbVal.val + ' ' + turbValX.val);
      } });
      btTl2.to(turbVal, 0.1, { val: 0.000001 });
      btTl2.to(turbValX, 0.1, { val: 0.000001 }, 0);
      isPlaying = false;
      btBg.style.filter = 'none';
    } else {
      btTxt.textContent = 'Pause';
      btTl.play();
      isPlaying = true;
      btBg.style.filter = 'url(#filter-music)';
    }
  });
}