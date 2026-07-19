import { toast } from "sonner";

export const notifyBookingSuccess = () =>
  toast.success("🎉 Test Drive Booked!", {
    description:
      "Your booking has been received. We'll contact you shortly.",
  });

export const notifyEnquirySuccess = () =>
  toast.success("📨 Enquiry Sent!", {
    description:
      "Thank you for reaching out. We'll respond as soon as possible.",
  });

export const notifyError = (message) =>
  toast.error(message);