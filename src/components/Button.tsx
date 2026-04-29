import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  href,
  children,
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`px-8 py-4 text-lg font-bold text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-purple-600 to-blue-600 shadow-purple-500/25 hover:shadow-purple-500/50 hover:scale-105 ${className}`}
    >
      {children}
    </Link>
  );
}
