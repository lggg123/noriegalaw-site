"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import HomeSection from '../components/HomeSection';
import PracticeAreasHighlight from '../components/PracticeAreasHighlight';
import GoogleReviews from '../components/GoogleReviews';
import AIChatAssistant from '@/components/AIChatAssistant';
import BlogSection from '@/components/BlogSection';

const NoriegaLogo = ({ className = "", showText = true, size = "md" }) => {
const sizes = {
sm: { icon: "w-6 h-6", text: "text-sm" },
md: { icon: "w-8 h-8", text: "text-lg" },
lg: { icon: "w-10 h-10", text: "text-xl" },
xl: { icon: "w-12 h-12", text: "text-2xl" }
};

return (
  <>
    <nav className="bg-slate-800 p-4 fixed w-full top-0 z-50 shadow-md">
    {/* rest of your JSX */}
    </nav>
  </>
);
// Link component placeholder (replace with your actual Link component)
const Link = ({ href, children, className, onClick }) => (
<a href={href} className={className} onClick={onClick}>
{children}
</a>
);

function NavigationBar() {
const [isMenuOpen, setIsMenuOpen] = useState(false);

return (
<nav className="bg-slate-800 p-4 fixed w-full top-0 z-50 shadow-md">
<div className="container mx-auto max-w-7xl">
<div className="flex justify-between items-center min-h-[56px]">
{/* Logo - Always visible with responsive sizing */}
<Link