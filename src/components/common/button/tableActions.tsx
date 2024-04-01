// import { EditIcon, TrashIcon } from '@/assets/icons';
import { FaEdit, FaPen, FaTrashAlt } from 'react-icons/fa';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
type props = {
  handleDeleteIcon: () => void;
  handleEditIcon: () => void;
  business_category: string;
};

const TableActions = ({
  handleDeleteIcon,
  handleEditIcon,
  business_category,
}: props) => {
  console.log(business_category);

  return (
    <div>
      <div className="flex items-center space-x-4 text-sm">
        <div className="flex items-center gap-4">
          {(business_category === 'OFFICE' ||
            business_category === 'DISTRIBUTOR' ||
            business_category === 'RESELLER' ||
            business_category === 'registeredapi') && (
            <button
              onClick={handleEditIcon}
              className="flex items-center gap-1 bg-background-lightGray text-sm rounded px-1 py-1  text-blue-500 hover:text-blue-600
                      font-semibold bg-blue-100 animation "
            >
              <FaEdit />
            </button>
          )}
          {business_category !== 'registeredapi' && (
            <button
              onClick={handleDeleteIcon}
              className="flex items-center gap-1 bg-background-lightGray text-sm rounded px-1 py-1 text-red-500 hover:text-red-600
                      font-semibold bg-red-100 animation "
            >
              <ExitToAppIcon sx={{ color: 'green' }} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default TableActions;
