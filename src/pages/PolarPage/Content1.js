import React from "react";
import { Image } from "react-bootstrap";
// import VisibilitySensor from 'react-visibility-sensor';


class Content1 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isVisible: false
		};
	}

    render() {
		const { isVisible } = this.state;
        const { width, height } = this.props;
		const isWide = width > 700;
        return (
			<div 
				className="content content1"
                style={{height: height}}
			>
				{/* <VisibilitySensor onChange={isVisible => {
					this.setState({
						isVisible: isVisible
					});
				}}> */}
					<div style={{
						position: "absolute", 
						width: 1, 
						height: 1, 
						top: height * 0.5, 
						left: width * 0.5,
					}}/>
				{/* </VisibilitySensor> */}
				<div
					className="body"
					style={{
						width: isWide ? width * 0.7 : width * 0.9,
						height: height * 0.7,
						opacity: isVisible ? 1 : 0,
						transitionDuration: isVisible ? "1s" : "0s",
					}}
				>
					<div className="titleWrapper">
						<div
							className="title"
							style={{
								fontSize: isWide ? 50 : 30,
							}}
						>
							"세상에서 가장 현명한 결제 플랫폼"
						</div>
					</div>
					<div className="missionWrapper">
						<div
							className="mission"
							style={{
								fontSize: isWide ? 25 : 20,
							}}
						>
							셀 수 없이 많은 카드와 혜택 정보의 파도 속에서 소비자에게 결제상황 별 최적의 혜택을 제공합니다.
						</div>
					</div>
				</div>
            </div>
            
        );
    }
  }

export default Content1;
