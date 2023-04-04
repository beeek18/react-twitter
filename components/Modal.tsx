import React, { useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";

import Button from "./Button";

interface ModalProps {
  title?: string;
  actionLabel: string;
  isOpen?: boolean;
  disabled?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  body?: React.ReactElement;
  footer?: React.ReactElement;
}

const Modal: React.FC<ModalProps> = ({
  title,
  actionLabel,
  isOpen,
  disabled,
  onClose,
  onSubmit,
  body,
  footer,
}) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    onClose();
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [disabled, onSubmit]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="modalBg">
        <div className="modalResponsive">
          {/*Content*/}
          <div className="modalContent">
            {/*Header*/}
            <div className="modalHeader">
              <h3 className="text-3xl font-semibold text-white">{title}</h3>
              <button onClick={handleClose} className="modalCloseBtn">
                <AiOutlineClose size={20} />
              </button>
            </div>
            {/* Body */}
            <div className="relative p-10 flex-auto">{body}</div>
            {/* Footer */}
            <div className="flex flex-col gap-2 p-10">
              <Button
                disabled={disabled}
                label={actionLabel}
                secondary
                fullWidth
                large
                onClick={handleSubmit}
              />
              {footer}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
