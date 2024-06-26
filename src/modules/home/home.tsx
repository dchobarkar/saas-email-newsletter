import React from "react";

import Header from "@/shared/widgets/header/header";
import Banner from "@/modules/home/features/banner";
import Branding from "@/modules/home/features/branding";
import Benefits from "@/modules/home/features/benefits";
import FeatureHighlight from "@/modules/home/features/featureHighlight";
import Pricing from "@/modules/home/features/pricing";
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
