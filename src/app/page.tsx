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
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`${sizes[size].icon} flex-shrink-0`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Scales of Justice */}
          <path 
            d="M50 15 L50 85 M35 25 L65 25" 
            stroke="white" 
            strokeWidth="3" 
            fill="none"
          />
          <circle 
            cx="35" 
            cy="25" 
            r="15" 
            stroke="white" 
            strokeWidth="2" 
            fill="none" 
            opacity="0.8"
          />
          <circle 
            cx="65" 
            cy="25" 
            r="15" 
            stroke="white" 
            strokeWidth="2" 
            fill="none" 
            opacity="0.8"
          />
          <path 
            d="M45 80 L55 80 L52.5 85 Z" 
            fill="white"
          />
          {/* Shield element */}
          <path 
            d="M50 5 L42 10 L42 20 L50 25 L58 20 L58 10 Z" 
            fill="white" 
            opacity="0.9"
          />
        </svg>
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={`text-white font-bold leading-tight ${sizes[size].text}`}>
            NORIEGA LAW
          </span>
          