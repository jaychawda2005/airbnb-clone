type IconProps = { size?: number; className?: string };

const base = (size = 24) => ({
  width: size,
  height: size,
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
});

export const IconShare = ({ size, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M16 3l6 6h-4v12h-4V9h-4l6-6z" />
    <path d="M6 18v9a2 2 0 002 2h16a2 2 0 002-2v-9" strokeLinecap="round" />
  </svg>
);

export const IconHeart = ({ size, className, filled }: IconProps & { filled?: boolean }) => (
  <svg {...base(size)} className={className} fill={filled ? "currentColor" : "none"}>
    <path d="M16 28s-11-6.8-11-15a6.5 6.5 0 0111-4.7A6.5 6.5 0 0127 13c0 8.2-11 15-11 15z" strokeLinejoin="round" />
  </svg>
);

export const IconGrid = ({ size, className }: IconProps) => (
  <svg {...base(size)} className={className} fill="currentColor" stroke="none">
    {[0, 1, 2].map((r) =>
      [0, 1, 2].map((c) => <rect key={`${r}-${c}`} x={4 + c * 9} y={4 + r * 9} width={6} height={6} rx={1.5} />)
    )}
  </svg>
);

export const IconClose = ({ size, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M6 6l20 20M26 6L6 26" strokeLinecap="round" />
  </svg>
);

export const IconChevronLeft = ({ size, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M20 4L10 16l10 12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconChevronRight = ({ size, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M12 4l10 12-10 12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconChevronDown = ({ size, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M4 12l12 10 12-10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IconStar = ({ size, className }: IconProps) => (
  <svg {...base(size)} className={className} fill="currentColor" stroke="none">
    <path d="M16 3l3.7 8.4 9.1.9-6.9 6.1 2 8.9L16 22.8 7.9 27.3l2-8.9-6.9-6.1 9.1-.9L16 3z" />
  </svg>
);

export const IconSearch = ({ size, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <circle cx="14" cy="14" r="8" />
    <path d="M25 25l-5.5-5.5" strokeLinecap="round" />
  </svg>
);

export const IconGlobe = ({ size, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <circle cx="16" cy="16" r="12" />
    <path d="M4 16h24M16 4c3.5 3.4 5.5 7.7 5.5 12S19.5 24.6 16 28c-3.5-3.4-5.5-7.7-5.5-12S12.5 7.4 16 4z" />
  </svg>
);

export const IconMenu = ({ size, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M5 10h22M5 16h22M5 22h22" strokeLinecap="round" />
  </svg>
);

export const IconHouse = ({ size, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M5 15L16 5l11 10" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 13v13h16V13" strokeLinejoin="round" />
  </svg>
);

export const IconLaurelBranch = ({ size, className, flip }: IconProps & { flip?: boolean }) => (
  <svg
    width={size ?? 22}
    height={(size ?? 22) * 1.8}
    viewBox="0 0 40 72"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    style={flip ? { transform: "scaleX(-1)" } : undefined}
  >
    <path d="M30 4C18 14 12 30 12 44c0 10 4 18 10 24" strokeLinecap="round" />
    {[0, 1, 2, 3, 4, 5].map((i) => {
      const y = 12 + i * 10;
      const x1 = 12 + i * 0.6;
      return <path key={i} d={`M${x1} ${y} Q${x1 - 14} ${y - 4} ${x1 - 20} ${y - 10}`} strokeLinecap="round" />;
    })}
  </svg>
);

export const IconCalendarBlocked = ({ size, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <rect x="5" y="7" width="22" height="20" rx="2" />
    <path d="M5 13h22M10 4v6M22 4v6" strokeLinecap="round" />
    <path d="M10 20l6-6" strokeLinecap="round" />
  </svg>
);

export const IconSearchDoc = ({ size, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <circle cx="13" cy="13" r="7" />
    <path d="M22 22l-4.3-4.3" strokeLinecap="round" />
  </svg>
);

export const IconShield = ({ size, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M16 4l10 4v9c0 7-5 11-10 13-5-2-10-6-10-13V8l10-4z" strokeLinejoin="round" />
  </svg>
);

export const IconUmbrella = ({ size, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M4 16a12 12 0 0124 0z" />
    <path d="M16 16v10a3 3 0 003-3" strokeLinecap="round" />
    <path d="M16 4v3" strokeLinecap="round" />
  </svg>
);

export const IconFan = ({ size, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <circle cx="16" cy="16" r="2.4" />
    <path d="M16 14c0-5 4-9 8-8 1 4-2 8-8 8z" />
    <path d="M16 18c0 5-4 9-8 8-1-4 2-8 8-8z" />
    <path d="M14 16c-5 0-9-4-8-8 4-1 8 2 8 8z" />
    <path d="M18 16c5 0 9 4 8 8-4 1-8-2-8-8z" />
  </svg>
);

export const IconDoor = ({ size, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <rect x="9" y="4" width="14" height="24" rx="1" />
    <circle cx="19" cy="16" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

export const IconKitchen = ({ size, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M6 12h20l-2 14H8L6 12z" strokeLinejoin="round" />
    <path d="M10 12V8a6 6 0 0112 0v4" />
  </svg>
);

export const IconWifi = ({ size, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M6 13a14 14 0 0120 0" strokeLinecap="round" />
    <path d="M10 17a9 9 0 0112 0" strokeLinecap="round" />
    <path d="M14 21a4 4 0 014 0" strokeLinecap="round" />
    <circle cx="16" cy="25" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

export const IconWorkspace = ({ size, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <rect x="4" y="8" width="24" height="14" rx="1.5" />
    <path d="M4 26h24" strokeLinecap="round" />
  </svg>
);

export const IconParking = ({ size, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <rect x="5" y="4" width="22" height="24" rx="2" />
    <path d="M13 22V10h4.5a4 4 0 010 8H13" strokeLinejoin="round" />
  </svg>
);

export const IconPool = ({ size, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M4 22c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2" strokeLinecap="round" />
    <path d="M8 8l16 6M22 6l-14 8" strokeLinecap="round" />
  </svg>
);

export const IconHotTub = ({ size, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <rect x="5" y="12" width="22" height="12" rx="4" />
    <circle cx="12" cy="18" r="1" fill="currentColor" stroke="none" />
    <circle cx="16" cy="18" r="1" fill="currentColor" stroke="none" />
    <circle cx="20" cy="18" r="1" fill="currentColor" stroke="none" />
    <path d="M9 12V9M23 12V9" strokeLinecap="round" />
  </svg>
);

export const IconPets = ({ size, className }: IconProps) => (
  <svg {...base(size)} className={className} fill="currentColor" stroke="none">
    <circle cx="10" cy="10" r="2.6" />
    <circle cx="22" cy="10" r="2.6" />
    <circle cx="6" cy="17" r="2.2" />
    <circle cx="26" cy="17" r="2.2" />
    <ellipse cx="16" cy="21" rx="7" ry="6" />
  </svg>
);

export const IconCamera = ({ size, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <rect x="4" y="10" width="24" height="16" rx="2" />
    <circle cx="16" cy="18" r="5" />
    <path d="M11 10l2-3h6l2 3" strokeLinejoin="round" />
  </svg>
);

export const IconPin = ({ size, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M16 28s9-9.5 9-16a9 9 0 10-18 0c0 6.5 9 16 9 16z" strokeLinejoin="round" />
    <circle cx="16" cy="12" r="3" />
  </svg>
);

export const IconMinus = ({ size, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M7 16h18" strokeLinecap="round" />
  </svg>
);

export const IconPlus = ({ size, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M16 7v18M7 16h18" strokeLinecap="round" />
  </svg>
);

export const IconCarbonMonoxide = ({ size, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <circle cx="16" cy="16" r="12" />
    <text x="16" y="20" fontSize="11" textAnchor="middle" fill="currentColor" stroke="none" fontWeight="700">
      CO
    </text>
  </svg>
);

export const IconSmokeAlarm = ({ size, className }: IconProps) => (
  <svg {...base(size)} className={className}>
    <circle cx="16" cy="14" r="10" />
    <path d="M9 24h14" strokeLinecap="round" />
    <circle cx="16" cy="14" r="3" />
  </svg>
);
