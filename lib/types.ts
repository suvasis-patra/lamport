import { JSX } from "react";

export type THeroAction = {
  title: string;
  description: string;
  actionBtnContent: string;
  actionBtnType: string;
  icon: JSX.Element;
  iconBgColor: string;
};

export type TWhySol = {
  title: string;
  description: string;
  icon: JSX.Element;
};
