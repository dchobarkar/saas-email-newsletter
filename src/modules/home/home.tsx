import React from "react";

import Header from "@/shared/widgets/header/header";
import Banner from "@/modules/home/features/banner";
import Branding from "@/modules/home/features/branding";
import Benefits from "@/modules/home/features/benefits";

const Home = () => {
  return (
    <div>
      <Header />

      <Banner />

      <Branding />

      <Benefits />
    </div>
  );
};

export default Home;
