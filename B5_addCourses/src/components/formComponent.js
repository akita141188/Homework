const FormComponent = ({inputChange,formCourse,submitCourse}) => {

    return (
        <>
            <form onSubmit={submitCourse} className="form-inline">
                <div className="form-group mb-2">
                    <input
                        name="course"
                        onChange={inputChange}
                        type="text"
                        className="form-control mr-2"
                        value={formCourse.course}
                        placeholder="Course name"
                    />
                </div>
                <button type="submit" className="btn btn-primary mb-2">Add Course</button>
            </form>
        </>
    )
}

export default FormComponent;