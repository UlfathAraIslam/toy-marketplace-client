import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://images.pexels.com/photos/8612921/pexels-photo-8612921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="w-full bg-opacity-0" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0 ">
                    <a href="#slide4" className="btn btn-circle  bg-purple-300 ">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-purple-300 ">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle bg-purple-300">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-purple-300">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://media.istockphoto.com/id/1332728408/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E7%95%B0%E3%81%AA%E3%82%8B%E4%BA%BA%E7%A8%AE%E3%81%AE%E5%AD%90%E4%BE%9B%E3%81%9F%E3%81%A1%E3%81%AF%E3%83%86%E3%83%BC%E3%83%96%E3%83%AB%E3%81%AB%E4%B8%80%E7%B7%92%E3%81%AB%E5%BA%A7%E3%81%A3%E3%81%A6%E3%81%9D%E3%82%8D%E3%81%B0%E3%82%93%E3%81%AB%E9%A0%BC%E3%82%8B.jpg?s=612x612&w=0&k=20&c=oJpCZKsErOHU1OO6edaeCaeJlneH4CGtKAGrC8FbUl4=" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle bg-purple-300">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-purple-300">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://media.istockphoto.com/id/1404039939/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E8%89%B2%E3%81%A8%E3%82%8A%E3%81%A9%E3%82%8A%E3%81%AE%E6%9C%A8%E8%A3%BD%E3%83%96%E3%83%AD%E3%83%83%E3%82%AF%E3%81%AE%E3%81%8A%E3%82%82%E3%81%A1%E3%82%83%E3%81%A7%E9%81%8A%E3%81%B6%E6%96%B0%E3%81%97%E3%81%84%E7%94%B7%E3%81%AE%E5%AD%90.jpg?s=612x612&w=0&k=20&c=FPISB9NMr0wWdpp8oJvDP420ZjvmldghFgUkWX2KwOA=" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle bg-purple-300">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-purple-300">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;