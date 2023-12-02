import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ComBlog from "../../components/Reuse/ComBlog";
import img from "../../assets/download.jpeg";
import img1 from "../../assets/bottle.jpg";
import img2 from "../../assets/images (2).jpeg";
import img3 from "../../assets/pexels-mali-maeder-802221.jpg";

const Blog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
  
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1.9,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="w-full  flex items-center justify-center">
        <div className="w-[95%] ">
          <Slider {...settings}>
            <ComBlog
              imG={img}
              title="What you don't know will make a great book"
              subtitle="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, sequi
        "
            />
            <ComBlog
              imG={img1}
              title="Many sites where you can order your fav book"
              subtitle="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, sequi
        "
            />
            <ComBlog
              imG={img2}
              title="Lany book that help a chid to a habit"
              subtitle="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, sequi
        "
            />
            <ComBlog
              imG={img3}
              title="Reading a book is like writing"
              subtitle="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, sequi
        "
            />
          </Slider>
        </div>
      </div>
      <br />
    </>
  );
};

export default Blog;
