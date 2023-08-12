/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { RiCLoseLine } from "react-icons/ri";

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div
        className="absolute bg-[rgba(0, 0, 0, 0.2)] w-full h-full z-0 top-2 left-2 -translate-y-2 -translate-x-2"
        onClick={() => {
          setIsOpen(false);
        }}
      />

      <div className="fixed top-2 left-2 -translate-y-2 -translate-x-2">
        <div className="w-[250px] h-[170px] bg-white text-white z-10 rounded-2xl shadow-[0_5px_20px_0_rgba(0,0,0,0.04)]">
          <div className="h-[50px] bg-white overflow-hidden rounded-t-2xl">
            <h5 className="m-0 p-[10px] text-[#2c3e50] font-medium text-[18px] text-center">
              Dialog
            </h5>
          </div>
          {/*text inside overlay*/}
          <div className="p-[10px] text-[14px] text-[#2c3e50] text-center">
            Are you sure?
          </div>
          {/* buttons */}
          <div className="styles.Modalactions">
            <div className="styles.actionscontainer">
              <button
                className="styles.cancelBtn"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
