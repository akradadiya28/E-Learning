"use client";
import { ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa";

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function PrimaryButton({
  children,
  onClick,
  className = "",
}: PrimaryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-2 bg-[#5751E1] text-white font-semibold rounded-full hover:brightness-110 active:scale-95 transition-all duration-150 focus:outline-none ${className}`}
      style={{ boxShadow: "4px 5px 0px 0px #050071" }}
    >
      <span>{children}</span>
      <FaArrowRight className="ml-1 text-base" />
    </button>
  );
}
