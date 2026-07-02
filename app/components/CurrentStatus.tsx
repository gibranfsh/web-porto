import {
  AcademicCapIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/solid";
import type { ReactNode } from "react";
import Badge from "./ui/Badge";

interface StatusRowProps {
  readonly icon: ReactNode;
  readonly primary: ReactNode;
  readonly secondary: ReactNode;
}

function StatusRow({ icon, primary, secondary }: StatusRowProps) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 items-start w-full text-left p-2.5 sm:p-3 rounded-sm border border-red-600/20 bg-black/40">
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-red-600/15 border border-red-600/25 flex-shrink-0">
        {icon}
      </div>
      <div className="min-w-0 space-y-1 leading-snug">
        <div className="text-white font-semibold text-sm sm:text-base break-words">
          {primary}
        </div>
        <div className="text-zinc-400 text-sm break-words font-body">
          {secondary}
        </div>
      </div>
    </div>
  );
}

export default function CurrentStatus() {
  return (
    <div className="w-full min-w-0 space-y-3">
      <StatusRow
        icon={<BriefcaseIcon className="h-5 w-5 text-red-500" />}
        primary={
          <Badge variant="accent">
            Lead Fullstack AI Engineer
          </Badge>
        }
        secondary="@ Saakuru Labs & SiloTech.xyz"
      />
      <StatusRow
        icon={<AcademicCapIcon className="h-5 w-5 text-red-500" />}
        primary="Graduated IST Student"
        secondary={
          <>
            @{" "}
            <span className="text-white font-semibold">
              Institut Teknologi Bandung
            </span>
          </>
        }
      />
    </div>
  );
}
