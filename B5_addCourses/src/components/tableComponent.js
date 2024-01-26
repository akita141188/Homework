const TableComponent = ({ course, deleteCourse }) => {

    return (
        <>
            <table id="list" className="table">
                <tbody>
                    {
                        course.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td><input type="checkbox" /></td>
                                    <td>{item.course}</td>
                                    <td>
                                        <a
                                            onClick={() => deleteCourse(index)}
                                            href="#">delete
                                        </a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default TableComponent;