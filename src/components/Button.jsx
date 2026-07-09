import { FaArrowRightLong } from "react-icons/fa6";

const Button = ({ className, btnText }) => {
  return (
    <button
      className={`group flex items-center justify-center gap-2 py-3 px-8 bg-red text-white text-base font-medium rounded-full border-2 border-red hover:bg-transparent hover:text-red transition-all duration-300 cursor-pointer ${className}`}>
      <span>{btnText}</span>
      <FaArrowRightLong
        size={20}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </button>
  );
};

export default Button;
