import React from "react";
import * as SC from "./styles"

import { Button } from "../Button";

export const Modal = ({ text, onClickForYesBtn, onClickForNoBtn, }) => {

  return (
   <SC.ModalWrapper>
      <SC.Modal>
        <SC.ModalText>{text}</SC.ModalText> 
          <SC.ModalContent>
            <Button onClick={onClickForYesBtn} attentStyle={true} text='Да' />
            <Button onClick={onClickForNoBtn} text='Нет'/>
          </SC.ModalContent>
      </SC.Modal>
    </SC.ModalWrapper>
  )
}