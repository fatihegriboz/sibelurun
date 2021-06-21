export default function Hamburger({ isOpen }) {
  return (
    <>
      <div className="hamburger">
        <div className="burger burger1" />
        {/* <div className="burger burger2" /> */}
        <div className="burger burger3" />
      </div>

      <style jsx>{`
        .hamburger {
          width: 30px;
          height: 20px;
          display: flex;
          justify-content: space-around;
          flex-flow: column nowrap;
          z-index: 10;
        }

        .burger {
          width: 30px;
          height: 2px;
          background-color: black;
          transform-origin: 10px;
          transition: all 0.3s linear;
        }

        // .burger1 {
        //   transform: ${isOpen ? 'rotate(45deg)' : 'rotate(0)'};
        // }
        // .burger2 {
        //   transform: ${isOpen ? 'translateX(100%)' : 'translateX(0)'};
        //   opacity: ${isOpen ? 0 : 1};
        // }
        // .burger3 {
        //   transform: ${isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
        // }
      `}</style>
    </>
  )
}
