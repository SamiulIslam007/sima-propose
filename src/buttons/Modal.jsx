function Modal() {
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hi Sima, 😁</h3>
          <p className="py-4">I love you ❤😘</p>
          <p> তুমি কি আমার বউ হবা ???? </p>
        </div>
      </dialog>
    </>
  );
}
export default Modal;
