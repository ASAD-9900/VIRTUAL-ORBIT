import React from "react";
import SpiralUp from "../../assets/agancy-girl.png";

// Marquee animation styles
const marqueeStyle = {
  whiteSpace: 'nowrap',
  display: 'inline-block',
  animation: 'marqueeLeft 30s linear infinite',
};
const marqueeStyleReverse = {
  ...marqueeStyle,
  animation: 'marqueeRight 30s linear infinite',
};

const SectionWithLayeredMarquees = () => (
  <section className=""
    style={{
      background: "linear-gradient(180deg, #b7e3f7, #82bad5)",
      position: "relative",
      width: "100%",
      height: "70vh",
      minHeight: "400px",
      overflow: "hidden",
    }}
  >
    {/* Top Marquee - behind the image */}
    <div
      style={{
        position: 'absolute',
        top: '12%',
        left: 0,
        width: '100%',
        zIndex: 0, // Under the image
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <div style={marqueeStyleReverse}>
        <span style={{
          fontSize: "8vw",
          fontWeight: 800,
          color: "#fff",
          letterSpacing: 1,
        }}>
          Virtual Orbit - SEO - Virtual Orbit - SEO - Virtual Orbit - SEO -
        </span>
      </div>
    </div>

    {/* Full-Height Image - covers the container */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        height: "100%",
        width: "auto",
        zIndex: 1,
      }}
    >
      <img
        src={SpiralUp}
        alt="Agency Girl"
        style={{
          height: "100%",
          width: "auto",
          objectFit: "cover",
        }}
      />
    </div>

    {/* Bottom Marquee - in front of the image */}
    <div
      style={{
        position: 'absolute',
        bottom: '22%',
        left: 0,
        width: '100%',
        zIndex: 2, // Above the image
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <div style={marqueeStyle}>
        <span style={{
          fontSize: "8vw",
          fontWeight: 900,
          color: "#fff",
          opacity: 0.98,
          letterSpacing: 2,
        }}>
          Local SEO - Local SEO - Local SEO - Local SEO ; 
        </span>
      </div>
    </div>

    {/* Marquee animations */}
    <style>{`
      @keyframes marqueeLeft {
        0% { transform: translate3d(0,0,0);}
        100% { transform: translate3d(-50%,0,0);}
      }
      @keyframes marqueeRight {
        0% { transform: translate3d(-50%,0,0);}
        100% { transform: translate3d(0,0,0);}
      }
    `}</style>
  </section>
);

export default SectionWithLayeredMarquees;
