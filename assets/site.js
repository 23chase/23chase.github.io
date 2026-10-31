/* markmukhin.com — a big spiral behind the page, and ornaments that draw in. No dependencies. */
(function () {
  'use strict';

  var TURNS = 4; /* kept in sync by _src/build.py: 2 + number of essays */

  var d = document;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var NS = 'http://www.w3.org/2000/svg';

  function spiralPath(turns) {
    var steps = Math.round(turns * 90), out = [], i, t, a, r;
    for (i = 0; i <= steps; i++) {
      t = i / steps;
      a = t * turns * 2 * Math.PI - Math.PI / 2;
      r = 98 * t;
      out.push((i ? 'L' : 'M') + (r * Math.cos(a)).toFixed(1) + ',' + (r * Math.sin(a)).toFixed(1));
    }
    return out.join('');
  }

  /* ---------- the spiral ----------
     data-spiral on <body>:  (none) = huge, behind the page, draws itself once (home, 404)
                             small  = small corner spiral, draws itself once (Texts list)
                             scroll = small corner spiral that winds as you read (essays) */

  var mode = d.body.getAttribute('data-spiral') || 'huge';
  var WIDE = 900; /* the corner spiral needs side margins; on narrower screens use the huge one */
  var small = false;

  var svg = d.createElementNS(NS, 'svg');
  var bar = d.createElementNS(NS, 'path');
  svg.setAttribute('class', 'spiral');
  svg.setAttribute('viewBox', '-100 -100 200 200');
  svg.setAttribute('aria-hidden', 'true');
  var dAttr = spiralPath(TURNS);
  if (mode === 'scroll') { /* the faint full spiral the line winds along */
    var track = d.createElementNS(NS, 'path');
    track.setAttribute('class', 'track');
    track.setAttribute('d', dAttr);
    svg.appendChild(track);
  }
  bar.setAttribute('d', dAttr);
  bar.setAttribute('pathLength', '1');
  svg.appendChild(bar);
  svg.style.setProperty('--s', Math.min(120, 36 + TURNS * 8) + 'px');
  d.body.insertBefore(svg, d.body.firstChild);

  function setWidth() { /* corner or huge by screen width; keep the line a constant ~1.3-1.5px */
    small = mode !== 'huge' && window.innerWidth >= WIDE;
    svg.classList.toggle('small', small);
    var px = svg.getBoundingClientRect().width || 1;
    svg.style.strokeWidth = ((small ? 1.5 : 1.3) * 200 / px).toFixed(3);
  }
  function show(p) {
    bar.style.strokeDashoffset = (1 - p).toFixed(4);
    bar.style.opacity = p < 0.003 ? '0' : ''; /* nothing, not a dot, before the first scroll */
  }

  setWidth();
  window.addEventListener('resize', setWidth);

  if (reduce) {
    show(1);
  } else if (mode === 'scroll') {
    /* essays: the line winds as you read */
    var cur = 0, target = 0, raf = 0;
    var measure = function () {
      var max = d.documentElement.scrollHeight - window.innerHeight;
      target = max > 8 ? Math.min(1, Math.max(0, window.pageYOffset / max)) : 1;
    };
    var tick = function () {
      raf = 0;
      cur += (target - cur) * 0.14;
      if (Math.abs(target - cur) < 0.0008) cur = target;
      show(cur);
      if (cur !== target) raf = window.requestAnimationFrame(tick);
    };
    var onScroll = function () {
      measure();
      if (!raf) raf = window.requestAnimationFrame(tick);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    window.addEventListener('load', onScroll);
    onScroll();
  } else {
    /* draws itself once */
    svg.classList.add('draw');
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () { show(1); });
    });
  }

  /* ---------- ornaments draw in when they scroll into view ---------- */

  var marks = d.querySelectorAll('.break, .end-mark');
  if (!reduce && 'IntersectionObserver' in window && marks.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.9 });
    Array.prototype.forEach.call(marks, function (m) {
      if (m.getBoundingClientRect().top > window.innerHeight) { /* only those below the fold */
        m.classList.add('pre');
        io.observe(m);
      }
    });
  }
})();
