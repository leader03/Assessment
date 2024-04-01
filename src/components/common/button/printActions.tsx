import { Link } from "react-router-dom";
import { FaEdit, FaPrint, FaTrash } from "react-icons/fa";

type props = {
  handleDeleteIcon: () => void;
  orderId: any;
};

const PrintActions = ({ handleDeleteIcon, orderId }: props) => {
  return (
    <div>
      <div className="flex items-center space-x-4 text-sm">
        <div className="flex items-center gap-4">
            <Link to={`/print/${orderId}`}>
          <button
            className="flex items-center gap-1 bg-background-lightGray text-sm rounded px-1 py-1 text-gray-500 hover:text-gray-600
            font-semibold bg-gray-200 animation "
          >
            <FaPrint />
          </button>
          </Link>
          <Link to={`/edit-order/${orderId}`}>
          <button
            className="flex items-center gap-1 bg-background-lightGray text-sm rounded px-1 py-1 text-blue-500 hover:text-blue-600
            font-semibold bg-blue-100 animation "
          >
            <FaEdit />
          </button>
          </Link>
          <button
            onClick={handleDeleteIcon}
            className="flex items-center gap-1 bg-background-lightGray text-sm rounded px-1 py-1 text-red-500 hover:text-red-600
            font-semibold bg-red-100 animation"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};
export default PrintActions;
