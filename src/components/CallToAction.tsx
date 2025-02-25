import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CallToActionProps {
  variant: 'primary' | 'secondary';
}

const CallToAction: React.FC<CallToActionProps> = ({ variant }) => {
  return (
    <Button
      className={cn(
        'text-lg px-6 py-3',
        variant === 'primary' ? 'bg-primary hover:bg-primary/90' : '',
        variant === 'secondary' ? 'bg-secondary hover:bg-secondary/90' : ''
      )}
    >
            Get Free Consultation
    </Button>
  );
};

export default CallToAction;







