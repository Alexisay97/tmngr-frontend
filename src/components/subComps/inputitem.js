import React, {useState,useContext} from 'react';

const InputItem = props => {

    const textInput = () => {

        return(
        <div className={props.width ? "input-field " + props.width : "input-field col m10"}>
        <i className="material-icons prefix">{props.iconname}</i>
        <input type="text" name={props.name} id={props.name} onChange={(e) => props.onInputChange(e)} className="validate" />

        {props.info != null ? 
        <i className="material-icons prefix tooltipped" data-position="right" 
        data-tooltip={props.info}>info</i> : null}  {/*"Ejemplo: AA18004 (estudiante), DOC-12345678-9 (docente)" */}
        
        <label htmlFor={props.name}>{props.caption}</label>
        {/*<span className="helper-text" data-error="" data-success=""/>*/}
        </div>
        )
    }

    const pwdInput = () => {

        return(
        <div className={props.width ? "input-field " + props.width : "input-field col m10"}>
        <i className="material-icons prefix">{props.iconname}</i>
        <input type="password" name={props.name} id={props.name} onChange={(e) => props.onInputChange(e)} className="validate" />

        {props.info != null ? 
        <i className="material-icons prefix tooltipped" data-position="right" 
        data-tooltip={props.info}>info</i> : null}  {/*"Ejemplo: AA18004 (estudiante), DOC-12345678-9 (docente)" */}
        
        <label htmlFor={props.name}>{props.caption}</label>
        {/*<span className="helper-text" data-error="" data-success=""/>*/}
        </div>
        )
    }

    const selectInput = () => {
        
        return(
        <div className={props.width ? "input-field " + props.width : "input-field col s12"}>
        <i className="material-icons prefix">{props.iconname}</i>
        <select defaultValue="default" disabled={props.disabled} name={props.name} id={props.name} 
        onChange={(e) => props.onInputChange(e)}>
        <option value="default" disabled>Elige una</option>
        
        {
            props.options
            .map( option => {
            return(<option key={option.id} value={option.id}>{option.name}</option>)}) //un "foreach"
        }

        </select>

        {props.info != null ? 
        <i className="material-icons prefix tooltipped" data-position="right" 
        data-tooltip={props.info}>info</i> : null}  {/*"Ejemplo: AA18004 (estudiante), DOC-12345678-9 (docente)" */}
        
        <label htmlFor={props.name}>{props.caption}</label>
        {/*<span className="helper-text" data-error="" data-success=""/>*/}
        </div>
        )
    }

    const chooseType = () => {

        switch(props.inputtype){

            case 'text': return textInput(); break;
            case 'select': return selectInput(); break;
            case 'pwd': return pwdInput(); break;

            default: return textInput(); break;
        }
    }

    return chooseType();
}
//onClick = {"update("+props.car._id+");"}
export default InputItem;