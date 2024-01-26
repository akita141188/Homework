import React from "react";
import FormComponent from "./components/formComponent";
import TableComponent from "./components/tableComponent";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  const [course, setCourse] = React.useState([]);
  const [formCourse, setFormCourse] = React.useState({ course: "" })

  const inputChange = (e) => {
    const { name, value } = e.target;
    setFormCourse({ ...formCourse, [name]: value });
  }

  const submitCourse = (e) => {
    e.preventDefault();
    setCourse([...course, formCourse]);
    setFormCourse({ course: "" });
    toast.success('Thêm thành công!', { autoClose: 500 })
  }

  const deleteCourse = (index) => {
    setCourse([...course.slice(0, index), ...course.slice(index + 1)])
    toast.success('Xóa thành công!', { autoClose: 500 })
  }

  return (
    <>
      <div id="header">
        <p>ToDo List</p>
      </div>
      <div id="body">
        <div className="container">
          <h3>ToDo List</h3>
          <div id="main" className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div id="add" className="text-center">
                <FormComponent
                  submitCourse={submitCourse}
                  inputChange={inputChange}
                  formCourse={formCourse}
                />
              </div>
              {/* <div className="alert alert-success">Added successfully !</div>
              <div className="alert alert-danger">Deleted successfully !</div> */}
              <TableComponent
                course={course}
                deleteCourse={deleteCourse}
              />
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default App;
