import React from "react";

import Header from "@/shared/widgets/header/header";
import Banner from "@/modules/home/elements/banner";
import Branding from "@/modules/home/elements/branding";
import Benefits from "@/modules/home/elements/benefits";
import FeatureHighlight from "@/modules/home/elements/featureHighlight";
import Pricing from "@/modules/home/elements/pricing";
import Footer from "@/shared/widgets/footer/footer";

const Home = () => {
  return (
    <div>
      <Header />

      <Banner />

      <Branding />

      <Benefits />

      <FeatureHighlight />

      <Pricing />

      <Footer />
    </div>
  );
};

export default Home;
