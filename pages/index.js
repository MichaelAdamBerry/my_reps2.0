import Layout from "../components/MyLayout";
import HomeCard from "../components/HomeCard";
import Title from "../components/Title";
export default () => (
  <Layout>
    <Title name="mainTitle" text={"Congress_Works_For_You"} />

    <HomeCard
      src={"../static/rep-img.png"}
      col={"4 / 6"}
      row={"2 / 4"}
      zIndex={1}
      route={"/search"}
    />

    <HomeCard
      src={"../static/policy-cloud.jpg"}
      col={"4 / 6"}
      row={"4 / 6"}
      zIndex={1}
      route={"/issues"}
    />
    <HomeCard
      src={"../static/freshman_class.jpg"}
      col={"3 / 5"}
      row={"3 / 5"}
      zIndex={-1}
      route={"/new_members"}
    />
  </Layout>
);
