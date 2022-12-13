import React, { useState } from "react";
import subjects from "../static/SubjectList"
const Sidebar = ({
  branch,
  subject,
  semester,
  setSemester,
  setBranch,
  setSubject,
}) => {
  const [allSemesterSubjects, setAllSemesterSubjects] = useState([]);

  const allSubjects = subjects;

  const semesterHandler = (e) => {
    setSemester(parseInt(e.target.id[16]));
    subjectsHandler(branch, e.target.id[16]);
  };

  const branchHandler = (e) => {
    setBranch(e.target.id);
    subjectsHandler(e.target.id, semester);
  };

  const subjectsHandler = (branchPass, semesterPass) => {
    console.log(branchPass, semesterPass)
    const subjectList = [];
    if (branchPass && semesterPass !== 0)
      for (
        let i = 0;
        i < allSubjects[semesterPass][0][branchPass].length;
        i++
      ) {
        subjectList.push(
          <li className="list-group-item py-1 d-flex flex-col">
            <input
              className="form-check-input pointer"
              type="radio"
              name="flexRadioDefault3"
              id={allSubjects[semesterPass][0][branchPass][i]}
              onClick={subjectSelectHandler}
            />
            <label
              className="form-check-label pointer"
              htmlFor={allSubjects[semesterPass][0][branchPass][i]}
            >
              {allSubjects[semesterPass][0][branchPass][i]}
            </label>
          </li>
        );
      }
    console.log(subjectList);
    setAllSemesterSubjects(subjectList);
  };

  const subjectSelectHandler = (e) => {
    setSubject(e.target.id);
  };

  return (
    <nav
      id="sidebarMenu"
      className="collapse d-lg-block sidebar collapse bg-white mx-4"
    >
      <div className="position-sticky">
        <div className="list-group list-group-flush mt-4">
          {/* <!-- Collapse 1 --> */}
          <div
            className="list-group-item list-group-item-action py-2 ripple pointer"
            aria-current="true"
            data-mdb-toggle="collapse"
            href="#collapseExample1"
            aria-expanded="true"
            aria-controls="collapseExample1"
          >
            <i className="fas fa-tachometer-alt fa-fw me-3"></i>
            <span>Choose Semester</span>
          </div>
          {/* <!-- Collapsed content --> */}
          <ul
            id="collapseExample1"
            className="collapse show list-group list-group-flush"
          >
            <li className="list-group-item py-1 d-flex flex-col">
              <input
                className="form-check-input pointer"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                onClick={semesterHandler}
              />
              <label className="form-check-label pointer " htmlFor="flexRadioDefault1">
                Semester 1
              </label>
            </li>

            <li className="list-group-item py-1 d-flex flex-col">
              <input
                className="form-check-input pointer"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                onClick={semesterHandler}
              />
              <label className="form-check-label pointer" htmlFor="flexRadioDefault2">
                Semester 2
              </label>
            </li>

            <li className="list-group-item py-1 d-flex flex-col">
              <input
                className="form-check-input pointer"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault3"
                onClick={semesterHandler}
              />
              <label className="form-check-label pointer" htmlFor="flexRadioDefault3">
                Semester 3
              </label>
            </li>

            <li className="list-group-item py-1 d-flex flex-col">
              <input
                className="form-check-input pointer"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault4"
                onClick={semesterHandler}
              />
              <label className="form-check-label pointer" htmlFor="flexRadioDefault4">
                Semester 4
              </label>
            </li>

            <li className="list-group-item py-1 d-flex flex-col">
              <input
                className="form-check-input pointer"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault5"
                onClick={semesterHandler}
              />
              <label className="form-check-label pointer" htmlFor="flexRadioDefault5">
                Semester 5
              </label>
            </li>

            <li className="list-group-item py-1 d-flex flex-col">
              <input
                className="form-check-input pointer"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault6"
                onClick={semesterHandler}
              />
              <label className="form-check-label pointer" htmlFor="flexRadioDefault6">
                Semester 6
              </label>
            </li>

            <li className="list-group-item py-1 d-flex flex-col">
              <input
                className="form-check-input pointer"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault7"
                onClick={semesterHandler}
              />
              <label className="form-check-label pointer" htmlFor="flexRadioDefault7">
                Semester 7
              </label>
            </li>

            <li className="list-group-item py-1 d-flex flex-col">
              <input
                className="form-check-input pointer"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault8"
                onClick={semesterHandler}
              />
              <label className="form-check-label pointer" htmlFor="flexRadioDefault8">
                Semester 8
              </label>
            </li>
          </ul>
          {/* <!-- Collapse 1 --> */}

          {/* <-- Collapse 2 --> */}
          <div
            className="list-group-item list-group-item-action py-2 ripple pointer"
            aria-current="true"
            data-mdb-toggle="collapse"
            href="#collapseExample2"
            aria-expanded="true"
            aria-controls="collapseExample2"
          >
            <i className="fas fa-tachometer-alt fa-fw me-3"></i>
            <span>Choose Branch</span>
          </div>
          {/* <!-- Collapsed content --> */}
          <ul
            id="collapseExample1"
            className="collapse show list-group list-group-flush"
          >
            <li className="list-group-item py-1 d-flex flex-col">
              <input
                className="form-check-input pointer"
                type="radio"
                name="flexRadioDefault2"
                id="CSE"
                onClick={branchHandler}
              />
              <label className="form-check-label pointer " htmlFor="CSE">
                CSE
              </label>
            </li>

            <li className="list-group-item py-1 d-flex flex-col">
              <input
                className="form-check-input pointer"
                type="radio"
                name="flexRadioDefault2"
                id="CCE"
                onClick={branchHandler}
              />
              <label className="form-check-label pointer" htmlFor="CCE">
                CCE
              </label>
            </li>

            <li className="list-group-item py-1 d-flex flex-col">
              <input
                className="form-check-input pointer"
                type="radio"
                name="flexRadioDefault2"
                id="ECE"
                onClick={branchHandler}
              />
              <label className="form-check-label pointer" htmlFor="ECE">
                ECE
              </label>
            </li>

            <li className="list-group-item py-1 d-flex flex-col">
              <input
                className="form-check-input pointer"
                type="radio"
                name="flexRadioDefault2"
                id="ME"
                onClick={branchHandler}
              />
              <label className="form-check-label pointer" htmlFor="ME">
                ME
              </label>
            </li>
          </ul>
          {/* <!-- Collapse 2 --> */}

          {/* <-- Collapse 3 --> */}
          <div
            className="list-group-item list-group-item-action py-2 ripple pointer"
            aria-current="true"
            data-mdb-toggle="collapse"
            href="#collapseExample1"
            aria-expanded="true"
            aria-controls="collapseExample13"
          >
            <i className="fas fa-tachometer-alt fa-fw me-3"></i>
            <span>Subjects</span>
          </div>
          {/* <!-- Collapsed content --> */}
          <ul
            id="collapseExample1"
            className="collapse show list-group list-group-flush"
          >
            {allSemesterSubjects}
          </ul>
          {/* <!-- Collapse 3 --> */}
        </div>
      </div>
    </nav>
  );
};
export default Sidebar;
