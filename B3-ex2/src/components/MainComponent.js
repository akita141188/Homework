const MainComponent = ({ main }) => {

    return (
        <>
            <div id="main">
                <h3>{main.title}</h3>
                <p>{main.p1}</p>
                <p>{main.p2}</p>
            </div>
        </>
    )
}

export default MainComponent;