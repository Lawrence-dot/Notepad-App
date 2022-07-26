import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { NoteContext } from "../../Container/App";
import Navbar from "../Layout/Navbar";

function Edit() {
  const [note, setNote, edit] = useContext(NoteContext);
  console.log(edit);
  const btnStyle = {
    maxWidth: "85px",
    height: "42px",
    borderRadius: "5px",
    transition: "all .5s easeIn",
  };

  const updateHandler = () => {
    var pos = edit[1];
    var titleInput = document.getElementById("title-int").value;
    var contentInput = document.getElementById("content-int").value;
    const newEdit = [...note];
    newEdit[pos].title = titleInput;
    newEdit[pos].content = contentInput;
    setNote(newEdit);
    localStorage.setItem("notes", JSON.stringify(note));
    console.log(note);
  };

  return (
    <div>
      <Navbar title="Home" />
      <div className="container-main d-flex justify-content-center">
        <div
          style={{ maxWidth: "400px" }}
          className="row card edit-card rounded w-50 my-3 border-2 border-success position-fixed fixed-md"
        >
          <div className="col-12 my-3 mx-1">
            <form>
              <h3 className="card-title text-center my-3 font-bold">
                {" "}
                Edit Note
              </h3>
              <div className="input-field input-group mb-3 px-2">
                <input
                  className="w-100 border-0 border-bottom"
                  id="title-int"
                  type="text"
                  placeholder="Note Title"
                  defaultValue={edit[0].title}
                />
              </div>
              <div className="input-field input-group mb-3 px-2">
                <textarea
                  className="w-100 border-1 px-2"
                  id="content-int"
                  cols="30"
                  rows="10"
                  type="text"
                  defaultValue={edit[0].content}
                ></textarea>
              </div>
              <div className="button d-flex justify-content-center">
                <NavLink
                  to="/"
                  className="btn btn-outline-success align-center outline"
                  style={btnStyle}
                  onClick={updateHandler}
                >
                  Update
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
