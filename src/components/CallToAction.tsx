import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface CallToActionProps {
  variant: 'primary' | 'secondary';
}

const CallToAction: React.FC<CallToActionProps> = ({ variant }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        className={cn(
          'text-lg px-8 py-4 rounded-lg font-semibold transition-all duration-300',
          variant === 'primary' ? 
            'bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white border border-slate-500/30 shadow-lg hover:shadow-xl' : 
            'bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white border border-slate-600/30'
        )}
      >
        Get Free Consultation
      </Button>
    </motion.div>
  );
};

export default CallToAction;







