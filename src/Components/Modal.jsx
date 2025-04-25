import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button.jsx";
export default function Modal({ children, ref, buttonCaption }) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
    return {
      open: () => {
        document.querySelector("dialog").showModal();
      }
    };
  });

  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">            
        {children}
    <form className="flex flex-col gap-4 mt-4" method="dialog">
        <Button>{buttonCaption}</Button>
    </form>
    </dialog>,
    document.getElementById("modal-root")
  );
}
