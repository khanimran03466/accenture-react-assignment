import { useSelector } from "react-redux";

const ModalUpdate = () => {
  const updateModalActive = useSelector((store) => store.updateModal);

  const HandlerUpdate = () => {};

  return (
    <div
      className={`custom-modal updateModal ${updateModalActive ?? "active"}`}
    >
      <form className="card" onSubmit={HandlerUpdate}>
        <h2> Add New Blog </h2>
        <input type="text" placeholder="Title" required />
        <textarea placeholder="Description" required />
        <input type="text" placeholder="Author" required />
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
};

export default ModalUpdate;
