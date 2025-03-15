import styled from "styled-components";

export const Container = styled.div`
  .input-outline {
    width: 100%;
    position: relative;
    display: flex;
    input {
      font-size: 14px;
      padding: 12px 12px 7px;
      display: block;
      width: 100%;
      border: none;
      border-radius: 8px;
      color: rgb(116, 132, 143);
      &:focus {
        outline: none;
      }
      &:focus ~ label,
      &:not([value=""]) ~ label {
        top: -7px;
        font-size: 14px;
        color: #6f5a9a;
        background: #fff;
        padding: 0px 5px;
      }
      &:hover ~ .border {
        border: 1px solid #6f5a9a !important;
        border-radius: 8px;
        position: absolute;
        top: 0px;
        pointer-events: none;
        transition: all 0.1s ease;
      }
      &:focus ~ .border {
        border: 2px solid #6f5a9a !important;
        border-radius: 8px;
        position: absolute;
        top: 0px;
        pointer-events: none;
        transition: all 0.1s ease;
      }
    }

    label {
      color: rgba(0, 0, 0, 0.54);
      font-size: 14px;
      font-weight: normal;
      position: absolute;
      pointer-events: none;
      left: 12px;
      top: 9px;
      transition: 0.2s ease;
    }

    .border {
      border: 1px solid rgb(116, 132, 143);
      border-radius: 8px;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0px;
      pointer-events: none;
      transition: all 0.3s ease;
    }
  }
`;
