import Head from "next/head";
import { GKEY } from "../keys";

const G_KEY = GKEY();

const layoutStyle = {
  gridTemplate: ""
};

const Layout = props => (
  <>
    <Head>
      <title>My_Reps2.0</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:700|Suranna|Noto+Serif+TC"
        rel="stylesheet"
      />
    </Head>
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
          font-family: 'Suranna', serif;
      }
      body {
        display: block;
        margin: 0;
      }

      a {
        text-decoration: none;
      }

      .gold{
        color: #eae4df
      }
      .main {
          display: grid;
          width: 100%;
          min-height: 90vh;
          align-content: center;
          justify-items: center;
          align-items: center;
        
          background: #dfd7d0;
      }
      .bold {
        font-family: 'Roboto', sans-serif;
      }
      
      .gradientA {
        background: rgba(212,228,239,1);
background: -moz-radial-gradient(center, ellipse cover, rgba(212,228,239,1) 0%, rgba(134,174,204,1) 100%);
background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%, rgba(212,228,239,1)), color-stop(100%, rgba(134,174,204,1)));
background: -webkit-radial-gradient(center, ellipse cover, rgba(212,228,239,1) 0%, rgba(134,174,204,1) 100%);
background: -o-radial-gradient(center, ellipse cover, rgba(212,228,239,1) 0%, rgba(134,174,204,1) 100%);
background: -ms-radial-gradient(center, ellipse cover, rgba(212,228,239,1) 0%, rgba(134,174,204,1) 100%);
background: radial-gradient(ellipse at center, rgba(212,228,239,1) 0%, rgba(134,174,204,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#d4e4ef', endColorstr='#86aecc', GradientType=1 );
      }
      @media (min-width: 320px) and (max-width: 600px) {
          display: block
      }
  

      `}
    </style>
    <script
      type="text/javascript"
      src={`https://maps.googleapis.com/maps/api/js?key=${G_KEY}&libraries=places`}
    />
  </>
);

export default Layout;
