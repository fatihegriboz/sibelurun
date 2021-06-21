export default function Hamburger({ isOpen }) {
  return (
    <>
      {/* <div className="hamburger">
        <div className="burger burger1" />
        <div className="burger burger2" />
        <div className="burger burger3" />
      </div> */}
      <div id="burger">
        <div className="bar topBar"></div>
        <div className="bar btmBar"></div>
      </div>
      <style jsx>{`
        #burger {
          width: 28px;
          height: 8px;
          position: relative;
          display: block;
          // margin: 0px auto 0;
          margin: 10px;
          top: 50%;
          cursor: pointer;
        }
        #burger .bar {
          width: 100%;
          height: 2px;
          display: block;
          position: relative;
          background: #000;
          transition: all 0.3s cubic-bezier(0.4, 0.01, 0.165, 0.99);
          transition-delay: ${isOpen ? '0.2s' : '0.0s'};
        }
        #burger .bar.topBar {
          transform: ${isOpen
            ? 'translateY(4px) rotate(45deg)'
            : 'translateY(0px) rotate(0deg)'};
        }
        #burger .bar.btmBar {
          transform: ${isOpen
            ? 'translateY(3px) rotate(-45deg)'
            : 'translateY(6px) rotate(0deg)'};
        }
      `}</style>
      {/* 
      <style jsx>{`
        .hamburger {
          width: 30px;
          height: 30px;
          display: flex;
          // justify-content: space-around;
          justify-content: center;
          // justify-content: space-evenly;
          // align-items: center;
          flex-flow: column;
          z-index: 10;
        }

        .burger {
          width: 30px;
          height: 4px;

          // transform-origin: 10px;
          // transform-origin: center;
          transition: all 0.3s linear;
        }

        .burger1 {
          transform: ${isOpen ? 'rotate(45deg)' : 'rotate(180)'};
          transform-origin: center center;
          border-top: 1px solid black;
        }
        // .burger2 {
        //   transform: ${isOpen ? 'translateX(100%)' : 'translateX(0)'};
        //   opacity: ${isOpen ? 0 : 1};
        // }
        .burger3 {
          transform: ${isOpen ? 'rotate(-45deg)' : 'rotate(180)'};
          transform-origin: center center;
          border-bottom: 1px solid black;
        }
      `}</style> */}
    </>
  )
}
