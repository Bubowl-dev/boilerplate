import { CustomBr } from "@/components/atoms/custom-br";
import { FacebookIcon } from "@/components/svgs/facebook";
import { HomeIcon } from "@/components/svgs/home";
import { InstagramIcon } from "@/components/svgs/instagram";
import { TwitterIcon } from "@/components/svgs/twitter";

export default {
  data: {
    navigation: [
      { title: "Home", href: "/", icon: HomeIcon },
      { title: "Dienstleistungen", href: "/dienstleistungen" },
      { title: "Portfolio", href: "/portfolio" },
      { title: "Kontakt", href: "/kontakt" },
    ],
    contact: [
      {
        text: "Telefon",
        content: "+41 76 539 87 50",
        link: "tel:+41765398750",
      },
      {
        text: "E-Mail",
        content: "info@fiberweb.ch",
        link: "mailto:info@fiberweb.ch",
      },
    ],
    social_share: [
      {
        title: "Instagram",
        link: "https://www.instagram.com/",
        icon: InstagramIcon,
      },
      {
        title: "Facebook",
        link: "https://www.facebook.com/",
        icon: FacebookIcon,
      },
      {
        title: "Twitter",
        link: "https://x.com/home",
        icon: TwitterIcon,
      },
    ],
    services: [
      {
        title: "Webdesign",
      },
      {
        title: "Marketing",
      },
      {
        title: "Intelligenz",
      },
      {
        title: "Mobile Apps",
      },
    ],
  },
  header: {
    title: (
      <>
        <span>Creative</span> Webseiten <CustomBr byViewport="desktop" />
        Effektives <span>Marketing </span>
        <CustomBr byViewport="desktop" /> <span>Smarte</span> KI Lösungen
      </>
    ),
  },
};
