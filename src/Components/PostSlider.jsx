
import React from "react";
import { Image } from "react-bootstrap";
import Post1 from "../Images/Posts/Post-1.jpg";
import Post2 from "../Images/Posts/Post-2.jpg";
import Post3 from "../Images/Posts/Post-3.jpg";
import Post4 from "../Images/Posts/Post-4.jpg";
import Post5 from "../Images/Posts/Post-5.jpg";
import Postsmall1 from "../Images/Posts/small-post-1.png";
import Postsmall2 from "../Images/Posts/small-post-2.png";
import Humpty from "../Images/Posts/Humpty.png";
import Postsmall3 from "../Images/Posts/small-post-3.png";
import Postsmall4 from "../Images/Posts/small-post-4.png";
import Postsmall5 from "../Images/Posts/small-post-5.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import t2v from "../Images/Posts/text2voice.svg";
import dubbing from "../Images/Posts/Debugging.svg";
import voicecloning from "../Images/Posts/Cloning.svg";
import humptyreader from "../Images/Posts/Reader.svg";
import realistictalking from "../Images/Posts/Realisting.svg";
function PostSlider() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 992 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 991, min: 767 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 767, min: 0 },
            items: 1
        }
    };
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [

            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: false,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: false,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                },
            },

        ],
    };
    const posts = [
            {
                id: 1,
                heading: "Text to speech",
                img: t2v,
                bg: '#FF0050'
            },
            {
                id: 2,
                heading: "Dubbing",
                img: dubbing,
                       bg: '#FFB800'
            },
            {
                id: 3,
                heading: "Voice cloning",
                img: voicecloning,
                bg:"#9B30EF"
            },
                {
                    id: 4,
                    heading: "Humpty reader",
                    img: humptyreader,
                    bg:"#72C350"
                },
                {
                    id: 5,
                    heading: "Realistic talking",
                    img: realistictalking,
                    bg:"#FF98B8"
                },
    ];
    return (
        <>
            <Slider {...settings}>
             {posts.map((post) => (
                   <div className="px-2">
                   <Link to="/" className="general-post active red-post" style={{ backgroundColor: post.bg }}>
                       <Image src={post.img} alt="Post" />
                   
                       <div className="info-pnl justify-center !left-[0]  !right-[0]">
                           {/* <div className="img-pnl" style={{ backgroundColor: '#FF0050' }}>
                               <Image src={Humpty} alt="Post" />
                           </div> */}
                             <h6>{post.heading}
                             </h6>
                       </div>
                   </Link>
               </div>
             ))}
            </Slider >
        </>
    );
}
export default PostSlider;