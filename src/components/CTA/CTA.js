import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./CTA.scss";

export default function CTA() {
  return (
    <Carousel
      infiniteLoop
      autoPlay
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      interval={5000}
      transitionTime={1200}
      stopOnHover={false}

      // onChange={onChange}
      // onClickItem={onClickItem}
      // onClickThumb={onClickThumb}
    >
      <div>
        <img src="http://cdn.filestackcontent.com/2ttboiItRVWZK0iEg5d6" />
        {/* <p className="legend">Legend 3</p> */}
      </div>
      <div>
        <img src="http://cdn.filestackcontent.com/2ElEEBCsSxqFVBoGS07w" />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src="http://cdn.filestackcontent.com/3VjQXokmQO6Yfh3rRjfN" />
        {/* <p className="legend">Legend 2</p> */}
      </div>

      <div>
        <img src="http://cdn.filepicker.io/api/file/OmLnxDmJRSqf5zznZxgu" />
        {/* <p className="legend">Legend 4</p> */}
      </div>
    </Carousel>
  );
}
