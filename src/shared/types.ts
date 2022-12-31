export enum Sections {
  Home = "home",
  ContactUs = "contactus",
  Benefits = "benefits",
  OurClasses = "ourclasses",
}

export type BenefitType = {
  icon: JSX.Element;
  title: string;
  description: string;
};

export type DataType = {
  name: string;
  description?: string;
  image: string;
};
