/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */

const Modal = ({ setIsOpen, success }) => {
  return (
    <>
      {/* <div
        className=""
        onClick={() => {
          setIsOpen(false);
        }}
      /> */}
      <div className="modalbackground">
        <div className="modalContainer h-[500px] w-[500px]">
          <div className="title">
            <h1>{success ? "Thank you!" : "Ooops!"}</h1>
          </div>
          <div className="body">
            <p>
              {success
                ? "I received your message, I will get back to you as soon as possible!"
                : "Something went wrong. Please try again!"}
            </p>
          </div>
          <div className="footer">
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

{
  /* <button
className="ml-[60px] font-medium text-[#2c3e50]"
onClick={() => setIsOpen(false)}
>
Cancel
</button> */
}
