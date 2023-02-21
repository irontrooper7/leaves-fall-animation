import './styles/App.css';
import { useEffect } from 'react';
import { gsap, Linear, Sine } from 'gsap';

function App() {

  useEffect(() => {
    let total = 50;
    let container = document.getElementById('leave-container');
    let w = container.scrollWidth;
    let h = container.scrollHeight;
    for(let i = 1; i<total;i++) {
      let leave = document.createElement('div');
      leave.className = 'leave';
      gsap.set(leave, { x:randomRangeNumber(0,w),y:randomRangeNumber(-200,-150),z:randomRangeNumber(-200,200) });
      container.appendChild(leave);
      fallAnimation(leave, h);
    }
  })

  function fallAnimation(item, height) {
    let tl = gsap.timeline();
    tl.to(item, { y: height+100, ease: Linear.easeNone, repeat: -1,delay:-15, duration: randomRangeNumber(6,15) });
    tl.to(item, { x: '+=100', rotationZ: randomRangeNumber(0,180), repeat:-1, yoyo: true, ease: Sine.easeInOut, duration: randomRangeNumber(4,8)});
    tl.to(item, { rotationX: randomRangeNumber(0,360), rotationY: randomRangeNumber(0,360), repeat: -1, yoyo: true, ease: Sine.easeInOut, delay:-5, duration: randomRangeNumber(2,8) });
  }

  function randomRangeNumber(min, max) {
    return min+Math.random()*(max-min)
  }

  return (
    <div className="App">
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div id="leave-container"></div>
        </div>
      </section>      
    </div>
  );
}

export default App;
