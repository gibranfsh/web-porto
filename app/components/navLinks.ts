import type { ComponentType } from "react";
import {
  UserCircleIcon,
  CpuChipIcon,
  FolderOpenIcon,
  BriefcaseIcon,
  TrophyIcon,
} from "@heroicons/react/24/solid";

export type NavIcon = ComponentType<{ className?: string }>;

export type NavLinkItem = {
  readonly href: `#${string}`;
  readonly title: string;
  readonly icon: NavIcon;
  readonly sectionId: string;
};

export const navLinks: NavLinkItem[] = [
  { href: "#about", title: "About", icon: UserCircleIcon, sectionId: "about" },
  {
    href: "#tech_stacks",
    title: "Stacks",
    icon: CpuChipIcon,
    sectionId: "tech_stacks",
  },
  {
    href: "#projects",
    title: "Projects",
    icon: FolderOpenIcon,
    sectionId: "projects",
  },
  {
    href: "#experiences",
    title: "Experiences",
    icon: BriefcaseIcon,
    sectionId: "experiences",
  },
  { href: "#awards", title: "Awards", icon: TrophyIcon, sectionId: "awards" },
];

export const navSectionIds = navLinks.map((link) => link.sectionId);
