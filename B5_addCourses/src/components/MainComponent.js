import AlertComponent from "./AlertComponent";
import FormComponent from "./formComponent";
import TableComponent from "./tableComponent";

const MainComponent = () => {

    return (
        <>
            <div id="main" className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div id="add" className="text-center">
                        <FormComponent />
                    </div>
                    <AlertComponent/>
                    <TableComponent />
                </div>
            </div>
        </>
    )
}

export default MainComponent;