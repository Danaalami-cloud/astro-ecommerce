import React, { useEffect } from 'react';

interface Props {
  title: string;
  full_description: string;
  pageHeaderBgImg: string;
  pageHeaderMinVh: string;
  pageHeaderRadius: string;
}

export default function TestimonialsFade({
  title,
  full_description,
  pageHeaderBgImg,
  pageHeaderMinVh,
  pageHeaderRadius,
}: Props) {

  const styles = {
    pageHeader: {
      // backgroundImage: 'url(' + pageHeaderBgImg + ')',
      minHeight: pageHeaderMinVh,
      borderRadius: pageHeaderRadius
    },
  } as const;
  useEffect(() => {
    const loadScript = (src: string, onLoad: () => void) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = onLoad;
      document.body.appendChild(script);
    };

    const initParticlesJS = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#dc3545" },
            shape: {
              type: "star",
              stroke: { width: 0, color: "#000000" },
              polygon: { nb_sides: 9 },
              image: { src: "img/github.svg", width: 100, height: 100 }
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
            },
            size: {
              value: 3,
              random: true,
              anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#dc3545",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
              resize: true
            },
            modes: {
              grab: { distance: 400, line_linked: { opacity: 1 } },
              bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
              repulse: { distance: 200, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 }
            }
          },
          retina_detect: true
        });

        const stats = new (window as any).Stats();
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        document.body.appendChild(stats.domElement);

        const countParticles = document.querySelector('.js-count-particles') as HTMLElement;
        const update = () => {
          stats.begin();
          stats.end();
          if ((window as any).pJSDom && (window as any).pJSDom[0].pJS.particles.array) {
            countParticles.innerText = (window as any).pJSDom[0].pJS.particles.array.length.toString();
          }
          requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
      }
    };


    loadScript('http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js', initParticlesJS);
    loadScript('http://threejs.org/examples/js/libs/stats.min.js', () => {});

    return () => {
      const scripts = document.querySelectorAll('script[src="http://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"], script[src="http://threejs.org/examples/js/libs/stats.min.js"]');
      scripts.forEach(script => script.remove());
    };
  }, []);
  
  
  





  return (
    <>
      <section className="mb-8">
        <div className="page-header py-5 py-md-0" style={styles.pageHeader}>
          {/* <span className="mask bg-black opacity-6"></span> */}
          <div id="particles-js"></div>
          <div className="count-particles"> <span className="js-count-particles"></span> </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-sm-9 text-center mx-auto">
                <h1 className="text-white mb-4">{title}</h1>
                <p className="lead text-white mb-sm-6 mb-4">{full_description}</p>
                <button className="btn btn-white btn-lg">Explore Our Services</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


