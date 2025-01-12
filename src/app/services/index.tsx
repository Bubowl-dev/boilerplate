import { type Metadata } from "next";
import { type ReactNode } from "react";
import { ServicesTemplate } from "@/templates/services";

export const metadata: Metadata = {
  title: "Fiber web - Creative Webseiten",
  description: "Creative Webseiten Effektives Marketing Smarte KI Lösungen",
};

const Services = (): ReactNode => {
  return <ServicesTemplate />;
};

export default Services;
