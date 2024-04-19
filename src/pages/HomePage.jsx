import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import Search from "../components/Search";
import ListNote from "../components/ListNote";

const HomePage = () => {
  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];
  const modules = {
    toolbar: toolbarOptions,
  };
  const [nameOption, setNameOption] = useState("Plain Text Note");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [noteData, setNoteData] = useState([]);

  const handleSetNameOption = (nameOption) => {
    setNameOption(nameOption);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newNote = { title: title, content: content };
    setNoteData([...noteData, newNote]);
    setTitle("");
    setContent("");
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeContent = (e) => {
    setContent(e);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Title Input */}
        <input
          placeholder="Note title"
          className="w-100 p-2 fw-bold"
          name="title"
          value={title}
          onChange={handleChangeTitle}
        />

        {/* Control Menu  */}
        <div className="d-flex my-4 align-items-center">
          <div className="dropdown">
            <button
              className="btn dropdown-toggle p-0"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {nameOption}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <span
                  className="dropdown-item"
                  onClick={() => handleSetNameOption("Plain Text Note")}
                >
                  Plan Text Note
                </span>
              </li>
              <li>
                <span
                  className="dropdown-item"
                  onClick={() => handleSetNameOption("Rich Text Note")}
                >
                  Rich Text Note
                </span>
              </li>
              <li>
                <span
                  className="dropdown-item"
                  onClick={() => handleSetNameOption("Task List")}
                >
                  Task List
                </span>
              </li>
            </ul>
          </div>
          <button className="btn">Import Word/Pdf</button>
          <button className="btn">Share</button>
        </div>

        {/* Content Note  */}
        {/* <textarea
          placeholder="Note Content"
          rows="20"
          className="w-100 p-2"
          name="content"
          value={content}
          onChange={handleChangeInput}
        ></textarea> */}
        <ReactQuill
          modules={modules}
          placeholder="Nhập nội dung ở đây..."
          theme="snow"
          name="content"
          value={content}
          onChange={handleChangeContent}
          style={{ height: "300px", marginBottom: "100px" }}
        />
        {/* Save Note  */}
        <div className="d-flex my-4 align-items-center">
          <button className="btn background-color-system text-light">
            Save
          </button>
          <span className="dropdown-toggle mx-4">Option Save</span>
        </div>
      </form>
      <Search/>
      <ListNote/>
    </>
  );
};

export default HomePage;
