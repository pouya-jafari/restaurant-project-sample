import { ReactNode } from "react";

type anchorComponents = {
  children: ReactNode;
};
export default function AnchorLink({ children }: anchorComponents) {
  return <a href="#">{children}</a>;
}
