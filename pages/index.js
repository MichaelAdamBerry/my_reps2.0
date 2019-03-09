import Layout from "../components/MyLayout";
import Title from "../components/Title";
import Link from "next/link";
import HomeCard from "../components/HomeCard";

function Index() {
  return (
    <Layout>
      <Title name="mainTitle" text="Congress_Works_For_You" />
      <div className="card1">
        <Link href="/search">
          <a>search</a>
        </Link>
        <HomeCard src="/static/rep-img.png" alt="representative search" />
      </div>
      <div className="card2 right">
        <Link href="/issues">
          <a>issues</a>
        </Link>
        <HomeCard
          src="static/policy-cloud.jpg"
          alt="political issues word cloud"
        />
      </div>
      <div className="card3">
        <Link href="/new_members">
          <a>freshman class</a>
        </Link>
        <HomeCard
          src="static/freshman_class.jpg"
          alt="headshots of new congress members"
        />
      </div>
      <style jsx>
        {`
          .card1 card2 card3 {
            opacity: 0.085;
          }

          a {
              display: block
          }
          .card 1 .card 3 a{
              text-align: left;
          }

          .right{
              text-align: right;
          }

          .card1 {
            grid-column: 4 / 6;
            grid-row: 2 / 4;
            z-index: 1;
          }
          .card2 {
            grid-column: 4 / 6;
            grid-row: 4 / 6;
            z-index: 1;
          }
          .card3 {
            grid-column: 3 /5;
            grid-row: 3 / 5;
            z-index: -1:
          }
        `}
      </style>
    </Layout>
  );
}

export default Index;
