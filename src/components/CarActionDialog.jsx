import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { allCars } from "../data/cars";
import { toast } from "sonner";

const CarActionDialog = ({ open, setOpen, type, car }) => {
  const isTestDrive = type === "test-drive";

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData.entries());

    const emptyFields = Object.values(data).some(
      (value) => value.trim() === "",
    );

    if (emptyFields) {
      toast.error("Please fill in all fields", {
        description: "All fields are required before submitting.",
      });
      return;
    }
    console.log(data);

    toast.success(isTestDrive ? "Test Drive Booked!" : "Inquiry Sent!", {
      description: isTestDrive
        ? `Your request for the ${car.name} has been received. We'll contact you shortly.`
        : `We've received your inquiry about the ${car.name}.`,
    });

    e.target.reset();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-125">
        <DialogHeader>
          <DialogTitle>
            {isTestDrive ? "Book Test Drive" : "Make Inquiry"}
          </DialogTitle>

          <DialogDescription>
            {isTestDrive
              ? `Book a test drive for ${car.name}`
              : `Send an inquiry about ${car.name}`}
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 text-white flex flex-col"
        >
          <input
            type="text"
            name="fullname"
            placeholder="Full name"
            className="focus:outline-lime-300 border-0 bg-black/70 text-white rounded-lg py-3 px-2"
          />

          <input
            name="email"
            placeholder="Email"
            type="email"
            className="focus:outline-lime-300 border-0 bg-black/70 text-white rounded-lg py-3 px-2"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            className="focus:outline-lime-300 border-0 bg-black/70 text-white rounded-lg py-3 px-2"
          />

          {isTestDrive ? (
            <>
              <input
                name="date"
                type="date"
                className="focus:outline-lime-300 border-0 bg-black/70 text-white rounded-lg py-3 px-2"
              />

              <input
                name="time"
                type="time"
                className="focus:outline-lime-300 border-0 bg-black/70 text-white rounded-lg py-3 px-2"
              />
            </>
          ) : (
            <textarea
              name="message"
              placeholder="Your message..."
              className="focus:outline-lime-300 border-0 bg-black/70 text-white rounded-lg py-3 px-2"
            />
          )}

          <button
            type="submit"
            className="w-full py-3 font-medium bg-black rounded-lg text-lime-300 cursor-pointer hover:bg-lime-300 hover:text-black"
          >
            {isTestDrive ? "Book Test Drive" : "Send Inquiry"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CarActionDialog;
