import styled from "styled-components";
export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: black;
  border: 1px solid white;
  padding: 15px;
  background-color: beige;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 15px;
`
export const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`

export const ModalText = styled.div`
  color: black;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`
export const ModalContent = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: space-around;
`