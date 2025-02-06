

const Modal = ({ clickedImg, setClickedImg }) => {
    const handleClose = () => {
      setClickedImg(null);  // Close the modal by setting clickedImg to null
    };
  
    return (
      <>
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleClose}
        >
          <div
            className="bg-nearTeal rounded-md p-1 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <img
              src={clickedImg}
              alt="Blog"
              className="max-w-full max-h-[80vh] object-contain  "
            />
            <button
              className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full"
              onClick={handleClose}
            >
              X
            </button>
          </div>
        </div>
      </>
    );
  };
  
  export default Modal;
  