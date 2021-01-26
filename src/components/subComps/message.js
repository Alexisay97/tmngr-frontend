import React from 'react';

const getStyle = props => {

    let baseClass = "";
    if(props.message.error){ baseClass += "red darken-2"}
    else { baseClass += "green darken-2"}
    return baseClass + " text-center";
}

const Message = props => {

    return(
        <div className={getStyle(props)} role="alert">
            {props.message.message}
        </div>
    )

}

export default Message;