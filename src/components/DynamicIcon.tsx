import React from "react";
import {
  WifiOff,
  Sparkles,
  Trophy,
  Mic,
  Zap,
  ShieldCheck,
  PieChart,
  Wallet,
  Smartphone,
  Layers,
  Code2,
  Lock,
  Download,
  ExternalLink,
  ChevronRight,
  Cat,
  CheckCircle2
} from "lucide-react";

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  WifiOff,
  Sparkles,
  Trophy,
  Mic,
  Zap,
  ShieldCheck,
  PieChart,
  Wallet,
  Smartphone,
  Layers,
  Code2,
  Lock,
  Download,
  ExternalLink,
  ChevronRight,
  Cat,
  CheckCircle2
};

export function DynamicIcon({ name, className, size = 24 }: DynamicIconProps) {
  const IconComponent = ICON_MAP[name] || Smartphone;
  return <IconComponent className={className} size={size} />;
}
