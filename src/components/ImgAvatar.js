import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import ContactForm from './ContactForm';

class ImgAvatar extends Component {
    render() {
        return (
            <div className='avatar'>
                    <img className='imgAvatar' src={require('../asset/image/huu.jpg')}/>
                    <p>
                        Văn Tố Hữu
                    </p>
                    <Popup trigger={<button className='bntContact'>Liên hệ</button>} position= 'top'>
                        <div className="popup">
                            <ContactForm/>
                        </div>
                    </Popup>     
            </div>
        );
    }
}

export default ImgAvatar;