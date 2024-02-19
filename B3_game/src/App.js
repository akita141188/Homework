import React from "react";

const images = [
  'images/huu.jpg',
  'images/bau.jpg',
  'images/ga.jpg',
  'images/ca.jpg',
  'images/cua.jpg',
  'images/tom.jpg',
];

const App = () => {

  const [img, setImg] = React.useState('images/banner-1.jpg')
  // const ramdom = Math.floor(Math.random()*10000);
  
  // const start=()=>{
  //   const interval= setInterval(()=>{
  //     const randomIndex = Math.floor(Math.random() * images.length);
  //     setImg(images[randomIndex]);
  //   },50)
  //   setTimeout(()=>{
  //     clearInterval(interval)
  //   },3000)

  
  const start=()=>{
    let count = 0;

    const interval= setInterval(()=>{
      const randomIndex = Math.floor(Math.random() * images.length);
      setImg(images[randomIndex]);
      count += 50;
      if (count >= 500) {
        clearInterval(interval);
        setTimeout(() => {
          setInterval(() => {
            const randomIndex = Math.floor(Math.random() * images.length);
            setImg(images[randomIndex]);
          }, 500);
        }, 1000);
      }

    },50)
    setTimeout(()=>{
      clearInterval(interval)
    },3000)
  }
  return (
    <div>
      <div id="game">
        <a>{
          images.map((val)=>{
             return <img 
             className={img==val?"active":""}
             src={val} />
          })
          }</a>
      </div>
      <button onClick={start} >start</button>
    </div>
  );
}

export default App;
