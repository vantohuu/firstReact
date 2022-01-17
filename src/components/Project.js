import React, { Component } from 'react';

const TempText = (props) => {
    return (
        <div className='tempTextInf'>
            <span>
                <br></br>
                {props.tt}:
            </span>
            <span>
                {" " + props.inf}.
            </span>
        </div>);
};

const DetailsforProject = () => {
    return (
        <div className='project'>
            <p>
                App mô phỏng đặt món ăn.
            </p>
            <div>
                <video width={100} controls autoPlay src={require('../asset/image/video.mp4')} />
                <div >
                    <TempText tt="Thông tin" inf="App mô phỏng việc đặt các món ăn và nước uống" />
                    <TempText tt="Ngôn ngữ" inf="java" />
                    <TempText tt="Các công cụ được sử dụng" inf="Fisebase , Romdata" />
                </div>
            </div>
        </div>
    );
}
class Project extends Component {
    render() {
        return (
            <div>
                <DetailsforProject />;
            </div>
        );
    }
}

export default Project;