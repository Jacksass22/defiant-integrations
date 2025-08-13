interface DefiantLogoProps {
  className?: string;
  size?: number;
}

export function DefiantLogo({ className = "", size = 32 }: DefiantLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* White outer arc forming the right curve of the D */}
      <path
        d="M20 10
           L55 10
           Q80 10 80 35
           Q80 50 80 65  
           Q80 90 55 90
           L20 90
           Z"
        fill="#FFFFFF"
      />
      
      {/* Blue angular Z-shaped shard cutting into the left side */}
      <path
        d="M20 10
           L40 10
           L30 30
           L50 40
           L35 50
           L55 60
           L40 80
           L25 70
           L35 50
           L25 30
           Z"
        fill="#0072CE"
      />
    </svg>
  );
}