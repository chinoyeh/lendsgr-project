import React from 'react'

const Loader = (props) => {
    if (props.loading === false) {
        return null
    }
    return (
        <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
}

export default Loader