import { ReactNode } from "react";

export interface FooterContent {
  title: string;
  content: {
    image?: ReactNode;
    textCombination?: {
      initiator: string;
      text: string;
    }[];
    text?: string;
  }[];
}