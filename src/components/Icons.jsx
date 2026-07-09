import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";

const Icons = () => {
  return (
    <div className="flex items-center gap-x-3">
      {[FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF].map(
        (Icon, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-[#0A0A0A]/5 dark:bg-[#1A1A1A] text-common dark:text-white hover:bg-red hover:text-white transition-all rounded-full h-12 w-12 cursor-pointer shrink-0"
          >
            <Icon className="text-lg" />
          </div>
        )
      )}
    </div>
  );
};

export default Icons;