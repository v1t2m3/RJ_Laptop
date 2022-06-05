import React, { useState } from "react";
export default function SelectForm() {
  const [car, setCar] = useState({ branch: "Audi" });
  const [selectFile, setSelectFile] = useState();
  const [pickedFile, setPickFile] = useState(false);
  const changeFileHanle = Event => {
    setSelectFile(Event.target.files[0]);
    console.log(selectFile);
    setPickFile(true);
  };
  const onchangeHandle = Event => {
    setCar({ branch: Event.target.value });
  };
  let decripton = car.branch + " is a largest company in Vietnam";
  return (
    <div className="col-6 mx-auto my-5 ">
      <form className="form-control bg-primary">
        <select
          value={car.branch}
          onChange={onchangeHandle}
          className="d-flex w-100"
        >
          <option value="Vinfast">Vinfast</option>
          <option value="Volvo">Volvo</option>
          <option value="Mercedes">Mercedes</option>
          <option value="Audi">Audi</option>
          <option value="BMW">BMW</option>
        </select>{" "}
        <br></br>
        <textarea className="d-flex w-100" value={decripton} />
      </form>
      <input type="file" onChange={changeFileHanle} />
      {pickedFile ? (
        <div>
          <p>Filename:{selectFile.name}</p>
          <p>Filetype:{selectFile.type}</p>
          <p>Filesize:{selectFile.size}</p>
          <p>
            Last modified:{selectFile.lastModifiedDate.toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p>Select file to show infomation</p>
      )}
    </div>
  );
}
