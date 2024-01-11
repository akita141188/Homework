import React from "react";
import HeaderComponent from "./Component/HeaderComponent";
import MainComponent from "./Component/MainComponent";
import FooterComponent from "./Component/FooterComponent";


const App = () => {
  const Content = {
    h1: "HỌC VIỆN VIETPRO",
    title: "Giới thiệu",
    p1: `Vietpro là một trong những đơn vị đầu tiên chuyên đào tạo nghề Lập trình viên website mã nguồn mở một cách đầy đủ,
    chuyên nghiệp, luôn cập nhật các công nghệ mới theo đúng nhu cầu tuyển dụng của thị trường.`,
    p2: `Mỗi năm, Vietpro đào tạo &amp; giới thiệu việc làm thành công cho hàng trăm học viên tới các đơn vị tuyển dụng đối tác,
    nhiều trong số đó đa trở thành các Leader, Manager,… quan trọng cho các công ty lớn.`,
    p3: "Bản quyền thuộc Vietpro Academy - 2024",
  }
  const [content, setContent] = React.useState(Content);
  const updateContent = () => {
    setContent({
      h1: 'VietPro Academy',
      title: "About Us",
      p1: `Vietpro is one the first units specializing in trainning open source website programmer fully and professionally, 
      always  updating  newtechnologies in accordance with the recuitment needs of the market.`,
      p2: `Every year, Vietpro successfully trains and introduces hundreds of student partner recuitment agencies,
      many of whom have become important Leaders, Managers, etc. for large companies`,
      p3: "Copy right to VietPro Academy - 2024",
    }
    )
  }

  const updateContent1 = () => setContent(Content);
  return (
    <>


      <div id="wrapper">
        <>
        <HeaderComponent h1={content.h1} updateContent={updateContent} updateContent1={updateContent1} />
        <MainComponent title={content.title} p1={content.p1} p2={content.p2} />
        <FooterComponent p3={content.p3} />
        </>
      </div>
    </>
  )
}

export default App;
