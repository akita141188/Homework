const LanguageComponent = ({lang,changeLangVi,changeLangEng}) => {

    return (
        <>
  <div id="lang">
      <a onClick={changeLangVi} href="#"><img src="./images/vi.png" alt /> <span>{lang.vie}</span></a> 
      | 
      <a onClick={changeLangEng} href="#"><img src="./images/en.png" alt /> <span>{lang.eng}</span></a>
    </div>
        </>
    )
}

export default LanguageComponent;