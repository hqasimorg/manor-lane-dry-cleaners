import {
  Shirt,
  WashingMachine,
  Scissors,
  Bed,
  Building2,
  Sparkles,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Mail,
  Star,
  CheckCircle,
  Truck,
  Shield,
  Award,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  shirt: Shirt,
  "washing-machine": WashingMachine,
  scissors: Scissors,
  bed: Bed,
  "building-2": Building2,
  sparkles: Sparkles,
  phone: Phone,
  "message-circle": MessageCircle,
  "map-pin": MapPin,
  clock: Clock,
  mail: Mail,
  star: Star,
  "check-circle": CheckCircle,
  truck: Truck,
  shield: Shield,
  award: Award,
};

interface IconProps {
  name: string;
  className?: string;
}

export function Icon({ name, className }: IconProps) {
  const LucideIcon = iconMap[name] || Sparkles;
  return <LucideIcon className={className} />;
}

export { iconMap };
