import Modal from "./Modal.jsx";
function ButtonPrimary() {
  const click = () => {
    document.getElementById("my_modal_3").showModal();
  };
  return (
    <>
      <button onClick={click} className="btn btn-outline btn-primary">
        Click Here Babe 😁
      </button>
      <Modal />
    </>
  );
}
export default ButtonPrimary;
