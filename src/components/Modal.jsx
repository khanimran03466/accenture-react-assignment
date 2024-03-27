import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  NewTodosAction,
  modalPopupAction,
  updatePopupSliceAction
} from "../redux/store";

const Modal = ({ isOpen, isEdit, blogData }) => {
  const [blogDetails, setBlogDetails] = useState({});

  useEffect(() => {
    setBlogDetails(blogData);
  }, [blogData]);

  const dispach = useDispatch();

  const HandlerFrom = (e) => {
    e.preventDefault();

    if (!isEdit) {
      dispach(
        NewTodosAction.addNewData({
          title: blogDetails.title,
          descrip: blogDetails.descrip,
          author: blogDetails.author
        })
      );

      dispach(modalPopupAction.modalClose());
    } else {
      dispach(NewTodosAction.updateData(blogDetails));

      dispach(updatePopupSliceAction.updateModalClose());
    }
    setBlogDetails({
      title: "",
      descrip: "",
      author: ""
    });
  };

  const onInputChange = (e) => {
    const obj = {
      ...blogDetails,
      [e.target.name]: e.target.value
    };
    setBlogDetails(obj);
  };

  return (
    <div className={`custom-modal ${isOpen ? "active" : ""}`}>
      <form className="card" onSubmit={HandlerFrom}>
        <h2>{isEdit ? "Update Blog" : "Add New Blog"}</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={onInputChange}
          required
          value={blogDetails.title}
        />
        <textarea
          placeholder="Description"
          name="descrip"
          onChange={onInputChange}
          required
          value={blogDetails.descrip}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          onChange={onInputChange}
          value={blogDetails.author}
          required
        />
        <button type="submit"> {isEdit ? "Update" : "Submit"} </button>
      </form>
    </div>
  );
};

export default Modal;
