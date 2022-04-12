import React from "react";
import { Image, Button } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
// import { animateScroll as scroll } from 'react-scroll';
import Typewriter from 'typewriter-effect';

import coverImgSrc from "../../images/aboutCover2.jpg";

class Cover extends React.Component {
    render() {
        const { width, height } = this.props;
        const isWide = width > 1000;
        return (
            <div 
				className="cover"
				style={{height: height}}
			>
                <Image
					className="coverImg"
					src={coverImgSrc}
					style={{width: width, height: height}}
				/>
                <div className="header" style={{fontSize: 30}}>
                    POLAR
                </div>
                <div 
                    className="body"
                    style={{
                        flexDirection: isWide ? "row" : "column",
                    }}
                >
                    <div 
                        className="title"
                        style={{
                            width: isWide ? width * 0.3 : width * 0.8,
                        }}
                    >
                        Limitless
                    </div>
                    <div 
                        className="title"
                        style={{
                            width: isWide ? width * 0.1 : width * 0.8,
                        }}
                    >
                        ON
                    </div>
                    <div 
                        className="typingTitle"
                        style={{
                            width: isWide ? width * 0.3 : width * 0.8,
                        }}
                    >
                        <Typewriter
                            options={{
                                strings: ['Polar', 'Innovation', 'Challenge', 'Creativity'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </div>
                {/* <Button
					variant="icon"
                    style={{position: "absolute", zIndex: 99, top: height * 0.9 - 6}}
					onClick={e => scroll.scrollTo(height)}
                >
                    <FontAwesomeIcon icon={faAngleDown} size="2x" />
				</Button> */}
            </div>
        );
    }
  }

export default Cover;
