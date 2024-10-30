
import { Cross2Icon } from '@radix-ui/react-icons';

const Status = ({ message, type, onClose }) => {
  return (
    <div
      className={`fixed top-[160px] right-3 text-xs p-2 transform transition-opacity 
        duration-500 rounded shadow-md font-medium flex gap-2 items-center text-black
        md:top-[150px] md:text-sm
        lg:top-[140px] lg:right-40 lg:p-3 lg:text-base
        ${type === 'success' ? 'bg-dominant' : 'bg-[#D9534F]'}
        ${message ? 'opacity-100' : 'opacity-0'}`}
    >
      {message}
      <button className=" text-black" onClick={onClose}>
        <Cross2Icon/>
      </button>
    </div>
  );
};

export default Status;
