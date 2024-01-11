import ProductList from './ProductList';
const Menu = () => {
    return (
        <>
            <div id="menu" className="collapse navbar-collapse">
                <ul>
                    <li className="menu-item"><a href="#">iPhone</a></li>
                    <li className="menu-item"><a href="#">Samsung</a></li>
                    <li className="menu-item"><a href="#">HTC</a></li>
                    <li className="menu-item"><a href="#">Nokia</a></li>
                    <li className="menu-item"><a href="#">Sony</a></li>
                    <li className="menu-item"><a href="#">Blackberry</a></li>
                </ul>
            </div>
        </>
    )
};

const Slider = () => {
    return (
        <>
            <div id="slide" className="carousel slide" data-ride="carousel">
                {/* Indicators */}
                <ul className="carousel-indicators">
                    <li data-target="#slide" data-slide-to={0} className="active" />
                    <li data-target="#slide" data-slide-to={1} />
                    <li data-target="#slide" data-slide-to={2} />
                    <li data-target="#slide" data-slide-to={3} />
                    <li data-target="#slide" data-slide-to={4} />
                    <li data-target="#slide" data-slide-to={5} />
                </ul>
                {/* The slideshow */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="images/slide-1.png" alt="Vietpro Academy" />
                    </div>
                    <div className="carousel-item">
                        <img src="images/slide-2.png" alt="Vietpro Academy" />
                    </div>
                    <div className="carousel-item">
                        <img src="images/slide-3.png" alt="Vietpro Academy" />
                    </div>
                    <div className="carousel-item">
                        <img src="images/slide-4.png" alt="Vietpro Academy" />
                    </div>
                    <div className="carousel-item">
                        <img src="images/slide-5.png" alt="Vietpro Academy" />
                    </div>
                    <div className="carousel-item">
                        <img src="images/slide-6.png" alt="Vietpro Academy" />
                    </div>
                </div>
                {/* Left and right controls */}
                <a className="carousel-control-prev" href="#slide" data-slide="prev">
                    <span className="carousel-control-prev-icon" />
                </a>
                <a className="carousel-control-next" href="#slide" data-slide="next">
                    <span className="carousel-control-next-icon" />
                </a>
            </div>
        </>
    )
};


const FeatureProduct = ()=>{
    const products = [
        {
          id: 1,
          image: 'images/product-1.png',
          name: 'iPhone Xs Max 2 Sim - 256GB',
          price: '32.990.000đ',
        },
        {
          id: 2,
          image: 'images/product-2.png',
          name: 'iPhone Xs Max 2 Sim - 256GB',
          price: '32.990.000đ',
        },
        {
          id: 3,
          image: 'images/product-3.png',
          name: 'iPhone Xs Max 2 Sim - 256GB',
          price: '32.990.000đ',
        },
        {
          id: 4,
          image: 'images/product-4.png',
          name: 'iPhone Xs Max 2 Sim - 256GB',
          price: '32.990.000đ',
        },
        {
          id: 5,
          image: 'images/product-5.png',
          name: 'iPhone Xs Max 2 Sim - 256GB',
          price: '32.990.000đ',
        },
        {
          id: 6,
          image: 'images/product-6.png',
          name: 'iPhone Xs Max 2 Sim - 256GB',
          price: '32.990.000đ',
        },
      ];
    return(
        <>
        <div className="products">
            <h3>Sản phẩm nổi bật</h3>
          <ProductList products={products} />
        </div>
        </>
    )
};
const LatestProduct = ()=>{
    const products = [
        {
          id: 1,
          image: 'images/product-7.png',
          name: 'iPhone Xs Max 2 Sim - 256GB',
          price: '32.990.000đ',
        },
        {
          id: 2,
          image: 'images/product-8.png',
          name: 'iPhone Xs Max 2 Sim - 256GB',
          price: '32.990.000đ',
        },
        {
          id: 3,
          image: 'images/product-9.png',
          name: 'iPhone Xs Max 2 Sim - 256GB',
          price: '32.990.000đ',
        },
        {
          id: 4,
          image: 'images/product-10.png',
          name: 'iPhone Xs Max 2 Sim - 256GB',
          price: '32.990.000đ',
        },
        {
          id: 5,
          image: 'images/product-11.png',
          name: 'iPhone Xs Max 2 Sim - 256GB',
          price: '32.990.000đ',
        },
        {
          id: 6,
          image: 'images/product-12.png',
          name: 'iPhone Xs Max 2 Sim - 256GB',
          price: '32.990.000đ',
        },
      ];
    return(
        <>
        <div className="products">
            <h3>Sản phẩm mới</h3>
          <ProductList products={products} />
        </div>
        </>
    )
};



const Main = () => {
    return (
        <>
            <div id="main" className="col-lg-8 col-md-12 col-sm-12">
                <Slider />
                <FeatureProduct />
                <LatestProduct />
            </div>
        </>
    )
};

const Sidebar = () => {
    return (
        <>
            <div id="sidebar" className="col-lg-4 col-md-12 col-sm-12">
                <Banner />
            </div>
        </>
    )
};
const Banner = () => {
    return (
        <>
            <div id="banner">
                <div className="banner-item">
                    <a href="#"><img className="img-fluid" src="images/banner-1.png" /></a>
                </div>
                <div className="banner-item">
                    <a href="#"><img className="img-fluid" src="images/banner-2.png" /></a>
                </div>
                <div className="banner-item">
                    <a href="#"><img className="img-fluid" src="images/banner-3.png" /></a>
                </div>
                <div className="banner-item">
                    <a href="#"><img className="img-fluid" src="images/banner-4.png" /></a>
                </div>
                <div className="banner-item">
                    <a href="#"><img className="img-fluid" src="images/banner-5.png" /></a>
                </div>
                <div className="banner-item">
                    <a href="#"><img className="img-fluid" src="images/banner-6.png" /></a>
                </div>
            </div>
        </>
    )
};

const Body = () => {
    return (
        <>
            <div id="body">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <Menu />
                        </div>
                    </div>
                    <div className="row">
                        <Main />
                        <Sidebar/>
                    </div>
                </div>
            </div>
        </>

    )
};

export default Body;