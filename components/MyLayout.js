const layoutStyle = {
  gridTemplate: ""
};

const Layout = props => (
  <>
    <div className="main" style={layoutStyle}>
      {props.children}
    </div>
    <style global="true">
      {`html {
          color: rgba(12, 12, 10, 0.8);
          line-height: 1.3;
          font-weight: 300;
          text-rendering: optimizeLegibility;
          font-kerning: normal;
          text-size-adjust: 100%;
      }
      body {
        display: block;
        margin: 8px;
      }
      .main {
          display: grid;
          width: 100%;
          min-height: 90vh;
          align-content: center;
          justify-items: center;
          align-items: center;
          grid-gap: 1rem;
      }
      `}
    </style>
  </>
);

export default Layout;
