import {
  ChooseExperience,
  ChooseIntelligence,
  ChooseTrust,
  Fackbook,
  GooglePay,
  Instagram,
  Linkedin,
  Twitter,
  YouTube,
} from "./Icon";

// nav bar links
export const navBarLink = [
  {
    path: "#",
    title: "Home",
    option: [
      { subLink: "#Practice1", subLink: "Practice1" },
      { subLink: "#Practice2", subLink: "Practice2" },
    ],
  },
  {
    path: "#",
    title: "About Us",
    option: [
      { subLink: "#about1", subPath: "about1" },
      { subLink: "#about2", subPath: "about2" },
    ],
  },
  {
    path: "#",
    title: "Attorneys",
    option: [
      { subLink: "#Attorneys1", subPath: "Attorneys1" },
      { subLink: "#Attorneys2", subPath: "Attorneys2" },
    ],
  },
  {
    path: "#",
    title: "Practice Areas",
    option: [
      { subLink: "#Practice1", subPath: "Practice1" },
      { subLink: "#Practice2", subPath: "Practice2" },
    ],
  },
  {
    path: "#",
    option: [
      { subLink: "#Practice1", subPath: "Practice1" },
      { subLink: "#Practice2", subPath: "Practice2" },
    ],
    title: "Results",
  },
  {
    path: "#",
    option: [
      { subLink: "#Practice1", subPath: "Practice1" },
      { subLink: "#Practice2", subPath: "Practice2" },
    ],
    title: "Media",
  },
  {
    path: "#",
    option: [
      { subLink: "#Practice1", subPath: "Practice1" },
      { subLink: "#Practice2", subPath: "Practice2" },
    ],
    title: "Contact",
  },
];
// featured card
export const featuredCard = [
  { path: "/assets/images/featured/fox.png", width: "max-w-[92px]" },
  { path: "/assets/images/featured/nbc.png", width: "max-w-[90px]" },
  { path: "/assets/images/featured/minutes.png", width: "max-w-[88px]" },
  { path: "/assets/images/featured/espn.png", width: "max-w-[144px]" },
];
// firm card
export const firmCard = [
  { path: "/assets/images/firm/time.png", width: "max-w-[169px]" },
  { path: "/assets/images/firm/new_york.png", width: "max-w-[141px]" },
  { path: "/assets/images/firm/today.png", width: "max-w-[120px]" },
  { path: "/assets/images/firm/minutes.png", width: "max-w-[88px]" },
  { path: "/assets/images/firm/wall.png", width: "max-w-[136px]" },
];
// global card
export const globalCard = [
  {
    number: "$1B",
    title: "Roman Catholic Arch Diocese Sex Abuse Cases",
    description:
      "Over $1B in recoveries against the Roman Catholic Church on behalf of victims of sexual abuse by priests, volunteers, religious and employees.",
  },
  {
    number: "$852M",
    title: " USG Dr. Georgga=e Tyndall Sex Abuse Case",
    description:
      "George Tyndall survivors and their attorneys announce a historic $852M global settlement in USC sec abuse case.",
  },
  {
    number: "$500M",
    title: "Micgigan State University, Larry Nassar Sx Abuse Case",
    description:
      "333 sex abuse claims against Michigan state University for the abuse of child and young adult athletes by former MSU and Olympic Team doctor Larry Nassar.",
  },
];
// choose card
export const chooseCard = [
  {
    icon: <ChooseExperience />,
    title: "Experience & Dedication",
    description:
      "We have represented thousands of victims of clerly and school sexual abuse and routinely achive the highest recoverise in the nation.",
  },
  {
    icon: <ChooseTrust />,
    title: "Compassion & Trust",
    description:
      "We carefully protect our client’s identities and maintain the highest possible standard of confidentiality when working with our clients.",
  },
  {
    icon: <ChooseIntelligence />,
    title: "Intelligence & Competence",
    description:
      "We are not afraid to stand up to any institution whether it is a school districts. religion fortune 500 companies or any other rich & powerful institution.",
  },
];
// choose card
export const brackingCard = [
  {
    path: "/assets/images/bracking/hand.png",
    title: "Los Angeles County Juvenile Probation Camp Sexual Assault",
  },
  {
    path: "/assets/images/bracking/girl.png",
    title: "California Schools Sexual Abuse",
  },
];
// pursueFeature
export const pursueFeature = [
  "The abuser who was directly responsible",
  "Any coworkers, staff members, or others who knew of the abuse but did not come forward to report it",
  "Any larger organizations or institutions who failed to take action against the abuse",
  "Any potential law enforcement officials who exercised negligence in allowing the abuse to occur",
];
// blogCard
export const blogCard = [
  {
    image: "/assets/images/blog/man.png",
    title:
      "At Manly Stewart & Finaldi, our attorneys routinely represent sexual assault victims in high-profile national cases.",
  },
  {
    image: "/assets/images/blog/law.png",
    title:
      "Riverside Country school principle Greg Anderson arrested for allegedly failing to report abuse.",
  },
  {
    image: "/assets/images/blog/women.png",
    title:
      "Former Anaheim elementary school teacher Richard O’ Connor sentenced to prison for possessing child pornography.",
  },
];
// contactCard
export const contactCard = [
  {
    title: "SOUTHERN CALIFORNIA OFFICE",
    description: " 19100 Von Karman Avenue, Suite 800, Irvine, CA 92612",
    phone: " (949) 252-9990",
    telephone: " (800) 700-8450",
  },
  {
    title: "NORTHERN CALIFORNIA OFFICE",
    description: "9621 Citation Court, Suite C ,Monterey, CA 93940",
    phone: "(831) 215-2150",
    telephone: "(800) 700-8450",
  },
  {
    title: "NEW YORK CITY OFFICE",
    description: "747 Third Avenue, 32nd Floor, Suite 32B, New York, NY 10017",
    phone: "(800) 700-2751",
    telephone: "(800) 700-8450",
  },
  {
    title: "NEW YORK CITY OFFICE",
    description: "140 Grand Street, White Plains, NY 10601",
    phone: "(800) 700-2751",
    telephone: "(800) 700-8450",
  },
  {
    title: "NEW YORK CITY OFFICE",
    description: "300 East Lombard Street Suite 1100 Baltimore, MD 21202",
    phone: "(800) 700-2751",
    telephone: "(800) 700-8450",
  },
];
export const cityInput = [
  { label: "country", value: "country" },
  { label: "india", value: "india" },
  { label: "usa", value: "usa" },
  { label: "brazil", value: "brazil" },
];
export const radioInput = [
  { label: "Church", value: "Church" },
  { label: "Hospital/Doctor", value: "Hospital/Doctor" },
  { label: "School", value: "School" },
  { label: "Youth/Sports Organization", value: "Youth/ Sports Organization" },
  { label: "Uber/Lyft", value: "Uber/Lyft" },
  { label: "Nursing/Assisted Living", value: "Nursing/Assisted Living" },
  { label: "Massage", value: "Massage" },
  { label: "Friends/Family", value: "Friends/Family" },
];
// footer icon
export const FooterLinks = [
  {
    title: "Links",
    link: [
      { links: "Home", path: "#Hogar" },
      { links: "About", path: "#Misión" },
      { links: "Attorneys", path: "#Tragamonedas" },
      { links: "Practice Areas", path: "#Porqué" },
      { links: "Results", path: "#Ofertas" },
      { links: "Media", path: "#Ofertas" },
    ],
  },
  {
    title: "Company",
    link: [
      { links: "Contact Us", path: "/" },
      { links: "Locations", path: "/" },
      { links: "Our Mission", path: "/" },
    ],
  },
  {
    title: "Services",
    link: [
      { links: "Privacy Policy", path: "#" },
      { links: "Terms of Services", path: "#" },
    ],
  },
];
export const FooterIcon = [
  {
    link: [
      { icon: <Fackbook />, path: "https://www.facebook.com/" },
      { icon: <Twitter />, path: "https://twitter.com/?lang=en" },
      {
        icon: <Instagram />,
        path: "https://www.instagram.com/accounts/login/",
      },
      { icon: <Linkedin />, path: "linkedin.com" },
      { icon: <YouTube />, path: "https://youtube.com/" },
      { icon: <GooglePay />, path: "https://pay.google.com/about/" },
    ],
  },
];
