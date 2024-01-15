import React from "react";
import LanguageComponent from "./components/LangComponent";
import LogoComponent from "./components/LogoComponent";
import MainComponent from "./components/MainComponent";
import FooterComponent from "./components/FooterComponent";


const App = () => {

  const VieData = {
    logo: "HỌC VIỆN VIETPRO",
    lang: {
      vie: "Việt Nam",
      eng: "Anh",
    },
    main: {
      title: "Giới thiệu",
      p1: `Vietpro là một trong những đơn vị đầu tiên chuyên đào tạo nghề Lập trình viên website mã nguồn mở một cách đầy đủ,
      chuyên nghiệp, luôn cập nhật các công nghệ mới theo đúng nhu cầu tuyển dụng của thị trường.`,
      p2: `Mỗi năm, Vietpro đào tạo &amp; giới thiệu việc làm thành công cho hàng trăm học viên tới các đơn vị tuyển dụng đối tác,
      nhiều trong số đó đa trở thành các Leader, Manager,… quan trọng cho các công ty lớn.`,
    },
    footer: "Bản quyền thuộc Vietpro Academy - 2024",
  };
  const EngData = {
    logo: "VietPro Academy",
    lang: {
      vie: "Vietnamese",
      eng: "English",
    },
    main: {
      title: "About Us",
      p1: `Vietpro is one the first units specializing in trainning open source website programmer fully and professionally, 
      always  updating  newtechnologies in accordance with the recuitment needs of the market.`,
      p2: `Every year, Vietpro successfully trains and introduces hundreds of student partner recuitment agencies,
      many of whom have become important Leaders, Managers, etc. for large companies`,
    },
    footer: "Copy right to VietPro Academy - 2024",
  };
  const [sttLang, setSttLang] = React.useState(true);
  const defaultLang = sttLang ? VieData : EngData;
  const changeLangVi = () => setSttLang(true);
  const changeLangEng = () => setSttLang(false);
  return (
    <>
      <div id="wrapper">
        <div id="header">
          <LogoComponent logo={defaultLang.logo} />
          <LanguageComponent
            lang={defaultLang.lang}
            changeLangVi={changeLangVi}
            changeLangEng={changeLangEng}
          />
        </div>
        <MainComponent
          main={defaultLang.main} />
        <FooterComponent
          footer={defaultLang.footer}
        />
      </div>

    </>
  )
}

export default App;
