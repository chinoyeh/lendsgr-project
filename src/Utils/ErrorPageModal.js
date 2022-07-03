import React, { Component } from 'react'
import { Modal, ModalBody } from 'reactstrap'

class ErrorPageModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: true
        }
        this.tog_modalOpen = this.tog_modalOpen.bind(this)
    }
    tog_modalOpen() {
        this.setState(prevState => ({
            tog_modalOpen: !prevState.tog_modalOpen
        }));
    }

    render() {
        return (
            <Modal
                isOpen={this.props.modalOpen}
                toggle={this.props.tog_modalOpen}
                centered={true}

            >
                <ModalBody>

                    <p>  Sorry this Page is currently unavailable</p>
                    <button onClick={this.props.tog_modalOpen}>close</button>

                </ModalBody>

            </Modal>
        )
    }
}

export default ErrorPageModal