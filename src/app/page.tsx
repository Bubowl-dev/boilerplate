import { type Metadata } from "next";
import { type ReactNode } from "react";
import { HomeTemplate } from "@/templates/home";

export const metadata: Metadata = {
  title: "Home",
  description: "Description Home",
};

const Home = (): ReactNode => {
  return <HomeTemplate />;
};

export default Home;
