import { FaRegCopyright } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const CopyRight = () => {
  const isLight = useSelector((state) => state.colorMode.isLight);
  return (
    <div
      className={` flex items-center justify-center gap-1 md:px-20 py-6 text-center ${
        isLight ? "text-[#111827] bg-white " : " text-[#D1D5DB]"
      } bg-[#111827]`}
    >
      © 2023 | Designed and coded with ❤️️ by Mostafa Elsaid
    </div>
  );
};

export default CopyRight;
