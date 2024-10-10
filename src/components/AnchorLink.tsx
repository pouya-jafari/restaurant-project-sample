import { ReactNode } from "react";

type anchorComponents = {
  link: string;
  children: ReactNode;
};
export default function AnchorLink({ link, children }: anchorComponents) {
  return <a href={link}>{children}</a>;
}
