import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import ContactForm from './ContactForm';
import Project from './Project';
const TempText = (props) =>
{
    return (
    <div className='tempText'>
        <span>
            <br></br>
            {props.tt}: 
        </span>
        <span>
            {" " + props.inf}.
        </span>
    </div>);
};

class Infor extends Component {
    render() {
        return (
            <div className='infor'>
                <div>
                    <TempText tt= "Họ tên" inf = "Văn Tố Hữu"/>
                    <TempText tt = "Năm sinh" inf = "2002"/>
                    <TempText tt = "Quê quán" inf = "Phù Cát - Bình Định"/>
                    <TempText tt = "Trường" inf = "PTIT HCM"/>
                    <TempText tt = "Sở thích" inf = "Thích lập trình, thổi sáo, nghe nhạc, chơi các môn thể thao như: bóng đá, cầu lông.."/>
                </div>
                <Popup trigger={<button className='bntContact'>Dự án</button> } position= 'top'>
                    <div className="popup">
                        <Project/>
                    </div>
                </Popup> 
            </div>
        );
    }
}

export default Infor;