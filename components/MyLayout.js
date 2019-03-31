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
      <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:700|Sura"
        rel="stylesheet"
      />
    </Head>
    <div className="main" style={layoutStyle}>
      {props.children}
    </div>
    <style global="true">
      {`
       :root {
        --main-blue: #304154;
        --dark-blue: #0f2237;
        --site-black: #00070f;
        --site-white: #e5e6e7;
        --red-accent: #B60031;
        --light-blue: #627285;
        --gold-accent: #a38c78;
       }


        html {
          color: rgba(12, 12, 10, 0.8);
          line-height: 1.3;
          font-weight: 300;
          text-rendering: optimizeLegibility;
          font-kerning: normal;
          text-size-adjust: 100%;
          font-family: 'Sura', serif;
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
        
        
      }
      .bold {
        font-family: 'Roboto', sans-serif;
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
