import React, { useEffect, useContext } from "react";
import UseInput from "../../costomhook/useInput";
import { NoteContext } from "../../Container/App";
import "./Home.css";
import { HomeContext } from "./Home";

function Form() {
  const [title, bindTitle, resetTitle] = UseInput();
  const [content, bindContent, resetContent] = UseInput();
  const addNew = useContext(HomeContext);
  var date = new Date();
  const [note, setNote] = useContext(NoteContext);

  const setList = () => {
    localStorage.setItem("notes", JSON.stringify(note));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title !== "" || content !== "") {
      setNote([...note, { title, content, date, fav: false }]);
    }
    resetTitle();
    resetContent();
    addNew();
  };

  const btnStyle = {
    borderRadius: "50%",
    maxWidth: "40px",
    height: "42px",
    width: "55px",
    fontSize: "20px",
    padding: "0px",
    textAlign: "center",
  };

  useEffect(() => {
    var check = JSON.stringify(note);
    check.length > 2 && setList();
  }, [note]);

  return (
    <div
      className="form-card card my-3 border-2 border-success position-fixed fixed-md"
      id="formCard"
    >
      <div className="col-12 my-3 card-body">
        <form onSubmit={handleSubmit}>
          <h3 className="card-title form-head text-center mb-4"> New Note</h3>
          <div className="input-field input-group mb-3">
            <input
              className="w-100 border-0 border-bottom"
              id="note-title"
              type="text"
              placeholder="Note Title"
              {...bindTitle}
            />
          </div>

          <div className="input-field input-group mb-3">
            <textarea
              className="w-100 border-1"
              id="note-content"
              cols="30"
              rows="10"
              type="text"
              {...bindContent}
            ></textarea>
          </div>

          <div className="button d-flex justify-content-center">
            <button
              className="btn btn-outline-success align-center outline"
              style={btnStyle}
            >
              +
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
