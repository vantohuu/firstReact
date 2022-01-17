import React, { Component } from 'react';
class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('Bạn đã gửi liên hệ.');
        event.preventDefault();
    }

    render() {
        return (
            <div >
                <form className='form' onSubmit={this.handleSubmit}>
                    <h1>Form Liên Hệ</h1>
                    <div className="formInput">
                        <p>
                            Email:
                        </p>
                        <input type="text" id="fb" name="fb" required />
                    </div>
                    <div className="formInput">
                        <p>
                            Facebook:
                        </p>
                        <input type="text" id="gm" name="gm" required />
                    </div>
                    <div className="formInput">
                        <p>
                            Số điện thoại:
                        </p>
                        <input type="number" id="phone" name="phone" required />
                    </div>
                    <input type="submit" value="Liên hệ" />
                </form>
            </div>
        );
    }
}
export default ContactForm;