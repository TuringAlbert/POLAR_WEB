

import React from "react";
import { Image } from "react-bootstrap";
import fixedImgSrc from "../../images/aboutFixed2.jpg";

class Fixed extends React.Component {
    render() {
        const { width, height } = this.props;
        return (
            <Image
                className="fixedImg"
                src={fixedImgSrc}
                style={{width: width, height: height}}
            />
        );
    }
  }

export default Fixed;
