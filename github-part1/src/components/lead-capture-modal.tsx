import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { LeadCaptureForm } from './lead-capture-form';
import { X } from 'lucide-react';

interface LeadCaptureModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  subtitle?: string;
}

export function LeadCaptureModal({ 
  open, 
  onOpenChange, 
  title = "Start Your AI Transformation",
  subtitle = "Get a customized strategy consultation"
}: LeadCaptureModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto p-4 bg-transparent border-none shadow-none">
        <DialogHeader className="sr-only">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{subtitle}</DialogDescription>
        </DialogHeader>
        <LeadCaptureForm
          title={title}
          subtitle={subtitle}
          onClose={() => onOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  );
}