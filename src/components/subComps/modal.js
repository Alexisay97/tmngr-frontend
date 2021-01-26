import React, {useState,useContext, Children} from 'react';

const ModalItem = props => {

    return (
        <div id={props.modalId} class="modal modal-xl modal-fixed-footer" style="max-height:100%;height:85%;">
        <div class="modal-content">
        { Children }
        </div>
        <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect btn red darken-2">Cancelar</a>
        </div>

    </div>
    )
}
//onClick = {"update("+props.car._id+");"}
export default ModalItem;