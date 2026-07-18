import { Award, Clock, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants/site";

const badges = [
  {
    icon: Award,
    label: "Years of Experience",
    value: `Since ${SITE_CONFIG.establishedYear}`,
  },
  {
    icon: Clock,
    label: "Turnaround Time",
    value: "48 Hours",
  },
  {
    icon: MapPin,
    label: "Areas Covered",
    value: "25+ Locations",
  },
];

export function TrustBadgeRow() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
      {badges.map((badge) => (
        <div key={badge.label} className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
            <badge.icon className="w-5 h-5 text-secondary" />
          </div>
          <div>
            <p className="text-white font-semibold text-sm">{badge.value}</p>
            <p className="text-white/60 text-xs">{badge.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
