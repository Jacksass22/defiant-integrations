import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
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
      <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto p-0 bg-transparent border-none shadow-none">
        <div className="relative">
          <button
            onClick={() => onOpenChange(false)}
            className="absolute -top-4 -right-4 z-50 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
          <LeadCaptureForm
            title={title}
            subtitle={subtitle}
            onClose={() => onOpenChange(false)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}