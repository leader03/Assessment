// import { eyeOpen,  } from "@/assets/icons";
import { FaEye } from "react-icons/fa";

type props = {
  handleView: () => void;
};

const ViewActions = ({ handleView }: props) => {
  return (
    <div>
      <div className="flex items-center space-x-4 text-sm">
        <div className="flex items-center gap-4">
          <button
            onClick={handleView}
            className="flex items-center gap-1 bg-background-lightGray text-sm rounded px-1 py-1 text-gray-500 hover:text-gray-600
                        font-semibold bg-gray-100 animation "
          >
            <FaEye size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ViewActions;
