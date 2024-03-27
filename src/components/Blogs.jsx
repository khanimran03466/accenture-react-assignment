import { IoClose } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { NewTodosAction, updatePopupSliceAction } from "../redux/store";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [updateBlogData, setUpdateBlogData] = useState({});
  const dispatch = useDispatch();
  const dataObj = useSelector((store) => store.newTodo);
  const modalActive = useSelector((store) => store.modal);
  const updateModalActive = useSelector((store) => store.updateModal);

  const handlerDelete = (item) => {
    dispatch(NewTodosAction.deleteData(item));
  };

  const handlerUpdate = (id) => {
    dispatch(updatePopupSliceAction.updateModalOpen());
    setUpdateBlogData(dataObj.find((blog) => blog.id === id));
  };

  useEffect(() => {
    if (modalActive || updateModalActive) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
    if (updateModalActive) {
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }
  }, [modalActive, updateModalActive]);

  return (
    <>
      <div className="home blogs">
        <div className="container">
          {dataObj.length !== 0 ? (
            <ul>
              {dataObj.map((item) => (
                <li className="card" key={item.id}>
                  <h2> {item.title} </h2>
                  <p> {item.descrip} </p>
                  <small> {item.author} </small>

                  <div
                    className="delete-item"
                    onClick={() => handlerDelete({ id: item.id })}
                  >
                    <IoClose />
                  </div>
                  <div
                    className="update-item"
                    onClick={() => handlerUpdate(item.id)}
                  >
                    <FaRegEdit />
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <h2> Blog Is Emply Now. Let's Add Some Blogs!! </h2>
          )}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        blogData={isEdit ? updateBlogData : {}}
        isEdit={isEdit}
      />
      {/* <ModalUpdate /> */}
    </>
  );
};

export default Blogs;
