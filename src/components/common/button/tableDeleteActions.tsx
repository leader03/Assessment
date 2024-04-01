import { FaEdit,  FaTrashAlt } from 'react-icons/fa';
type props = {
  handleDeleteIcon: () => void;
  handleEditIcon: () => void;
};

const TableDeleteActions = ({ handleDeleteIcon, handleEditIcon }: props) => {
  return (
    <div>
      <div className='flex items-center space-x-4 text-sm'>
        <div className='flex items-center gap-4'>
          <button
            onClick={handleEditIcon}
            className='flex items-center gap-1 bg-background-lightGray text-sm rounded px-1 py-1  text-blue-500 hover:text-blue-600
                    font-semibold bg-blue-100 animation '
          >
            <FaEdit  />
          </button>
          <button
            onClick={handleDeleteIcon}
            className='flex items-center gap-1 bg-background-lightGray text-sm rounded px-1 py-1 text-red-500 hover:text-red-600
                    font-semibold bg-red-100 animation '
          >
            <FaTrashAlt  />
          </button>
        </div>
      </div>
    </div>
  );
};
export default TableDeleteActions;
