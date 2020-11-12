import React from "react";
import Img from "./Img";

const ImgList = (props) => {
  const results = props.data;
  let imgs;
  if (results.length > 0) {
    imgs = results.map((img) => (
      <Img
        url={img.urls.thumb}
        user={img.user.links.html}
        name={img.user.name}
        key={img.id}
      />
    ));
  } else {
  }
  return <ul className="img-list">{imgs}</ul>;
};

export default ImgList;
