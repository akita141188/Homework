import React from "react";

const HeaderComponent = ({ h1, updateContent, updateContent1, src1, src2, span1, span2 }) => {
    return (
        <>
            <div id="header">
                <h1 id="logo"><a href="#">{h1}</a></h1>
                <div id="lang">
                    <div >
                        <a
                            onClick={updateContent1}
                            className={span1=="Tiếng Việt"?"active":""}
                            href="#">
                            <img src={src1} alt />
                            <span>{span1}</span></a>
                        <a
                            onClick={updateContent}
                            className={span1=="Vietnamese"?"active":""}
                            href="#">
                            <img src={src2} alt />
                            <span>{span2}</span></a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HeaderComponent;