import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button
          className="absolute top-2 right-2 text-gray-600"
          onClick={(e) => {
            e.stopPropagation(); // Prevent closing when clicking inside
            onClose();
          }}
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
