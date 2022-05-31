import React from "react";
import Cover from './Cover';
import Content1 from './Content1';
import Content2 from './Content2';
import Fixed from './Fixed';

import "./style.css";


class AboutPage extends React.Component {
    state = {
        width: window.innerWidth,
        height: window.innerHeight
	}
	
	onResize = e => {
		this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        });
	}
	
	componentDidMount() {
		window.addEventListener('resize', this.onResize);
	}

    render() {
        const { width, height } = this.state;
        return (
            <div className="about">
                <Cover width={width} height={height}/>
				<div className="contents">
					<Content1 width={width} height={height}/>
					<Content2 width={width} height={height}/>
				</div>
                <Fixed width={width} height={height}/>
            </div>
        );
    }
  }

export default AboutPage;
