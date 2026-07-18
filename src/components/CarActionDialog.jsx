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

const CarActionDialog = ({ open, setOpen, type, car }) => {
  const isTestDrive = type === "test-drive";

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

        <div className="space-y-4 text-white flex flex-col">
          <input
            placeholder="Full name"
            className="focus:outline-lime-300 border-0 bg-black/70 text-white rounded-lg py-3 px-2"
          />

          <input
            placeholder="Email"
            type="email"
            className="focus:outline-lime-300 border-0 bg-black/70 text-white rounded-lg py-3 px-2"
          />

          <input
            placeholder="Phone number"
            className="focus:outline-lime-300 border-0 bg-black/70 text-white rounded-lg py-3 px-2"
          />

          {isTestDrive ? (
            <>
              <input
                type="date"
                className="focus:outline-lime-300 border-0 bg-black/70 text-white rounded-lg py-3 px-2"
              />

              <input
                type="time"
                className="focus:outline-lime-300 border-0 bg-black/70 text-white rounded-lg py-3 px-2"
              />
            </>
          ) : (
            <textarea
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
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CarActionDialog;
