import { cn } from "@/lib/utils";
import { BiError } from "react-icons/bi";
import {
  IoIosCheckmarkCircleOutline,
  IoIosInformationCircleOutline,
} from "react-icons/io";

const Alert = ({
  success,
  error,
  message,
}: {
  success?: boolean;
  error?: boolean;
  message: string;
}) => {
  return (
    <div
      className={cn(
        "my-2 flex items-center gap-2 p-3 rounded-md",
        success && "bg-green-100 text-green-500",
        error && "bg-red-100 text-red-500",
        !success && !error && "bg-blue-100 text-blue-500"
      )}
    >
      <span>{success ? <IoIosCheckmarkCircleOutline size={20} /> : null}</span>
      <span>{error ? <BiError size={20} /> : null}</span>
      <span>
        {!success && !error ? (
          <IoIosInformationCircleOutline size={20} />
        ) : null}
      </span>
      {message}
    </div>
  );
};

export default Alert;
