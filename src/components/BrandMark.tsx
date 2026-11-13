import React from 'react';

interface BrandMarkProps {
  className?: string;
}

export const BrandMark: React.FC<BrandMarkProps> = ({ className = 'h-6 w-12' }) => {
  return (
    <svg
      viewBox="0 0 120 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 36L28 15L42 25L61 7L79 23L93 13L116 36H4Z"
        fill="url(#serraGrad)"
        fillOpacity="0.22"
      />
      <path
        d="M4 36L28 15L42 25L61 7L79 23L93 13L116 36"
        stroke="url(#serraGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M47 21L61 7L72 17"
        stroke="#FDE68A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      <defs>
        <linearGradient id="serraGrad" x1="4" y1="7" x2="116" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F5B942" />
          <stop offset="0.5" stopColor="#E59A28" />
          <stop offset="1" stopColor="#F5B942" />
        </linearGradient>
      </defs>
    </svg>
  );
};
