import { LucideFileExclamationPoint } from "lucide-react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="flex flex-col gap-5 justify-center h-90 items-center">
      <div className="text-yellow-500">
        <LucideFileExclamationPoint size={35} />
      </div>
      <div className="text-center space-y-">
        <h1 className="text-6xl text-lime-300 font-bold mb-4 italic">404 Not Found</h1>
        <p className="text-xl italic mb-6 text-white">This page does not exist</p>
        <Link className="bg-green-800 p-3 text-white font-medium rounded-xl hover:bg-lime-300 hover:text-black" to="/">Back to Home</Link>
      </div>
    </section>
  );
};

export default ErrorPage;
