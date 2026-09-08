import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CONTACT } from "@/data/contact";

export function PhoneCallDialog() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const hasSeenDialog = sessionStorage.getItem("phoneDialogSeen");
    if (hasSeenDialog) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem("phoneDialogSeen", "true");
  };

  const handleCall = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `tel:${CONTACT.phoneRaw}`;
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            Call Now
          </DialogTitle>
          <DialogDescription>Ready to upgrade your drive? Give us a call today!</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="rounded-lg bg-surface/50 p-6 text-center">
            <p className="text-sm text-muted-foreground mb-3">Our phone number</p>
            <p className="font-display text-2xl sm:text-3xl font-semibold text-primary">
              {CONTACT.phone}
            </p>
          </div>
          <div className="space-y-3">
            <button
              onClick={handleCall}
              className="inline-flex w-full items-center justify-center gap-2 font-display uppercase tracking-[0.16em] text-sm font-semibold px-7 py-4 rounded-xs transition-all duration-300 bg-primary text-primary-foreground hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </button>
          </div>
          <div className="text-center text-xs text-muted-foreground">
            <p>Monday – Friday: 8:00 – 18:00</p>
            <p>Saturday: 9:00 – 15:00</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
