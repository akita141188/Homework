import React from "react";

const HeaderComponent = ({ h1, updateContent, updateContent1 }) => {
    const listLogo = [
        {
            src: "./images/vi.png",
            span: "VietNam"
        },
        {
            src: "./images/en.png",
            span: "Anh"
        }
        ,
    ];
    return (
        <>
            <div id="header">
                <h1 id="logo"><a href="#">{h1}</a></h1>
                <div id="lang">
                    <div>
                        <a onClick={updateContent1} href="#">
                            <img src={listLogo[0].src} alt />
                            <span>{listLogo[0].span}</span></a>
                        <a onClick={updateContent} href="#">
                            <img src={listLogo[1].src} alt />
                            <span>{listLogo[1].span}</span></a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HeaderComponent;