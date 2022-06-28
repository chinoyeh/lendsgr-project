import React from 'react'

const ErrorPageModal = (props) => {

    if (!props.show) {
        return null
    }
    return (
        <div className="pop-modal">
            <cdiv className="pop-content">

                <p>  Sorry this Page is currently unavailable</p>
                <button onClose={props.onClose}>close</button>

            </cdiv>

        </div>
    )
}

export default ErrorPageModal