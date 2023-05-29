import styled from "styled-components";

export const LoginContainer = styled.main`
  display: flex;
  align-items: center;
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  justify-content: center;
  background-color: #c9e0d6;
  align-items: center;

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #7599b3;
    height: 55px;
    /* margin-top: "-1.5rem"; */
    h3 {
      font-size: 25px;
      color: #ffffff;
    }
  }
  .cotainerMain {
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-color: #ffffff;
    width: 80%;
    max-width: 500px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
    }
    input {
      display: flex;
      width: 100%;
      max-width: 100%;
      height: 35px;
      border: none;
      background-color: #b2b9c1;
      color: #ffffff;
      padding: 10px;
    }
    div {
      button {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        max-width: 100%;
        background-color: #7599b3;
        color: #ffffff;
        border-radius: 8px;
        font-family: inherit;
        cursor: pointer;
        transition: border-color 0.25s;
        height: 35px;
      }
      button:hover {
        border-color: #646cff;
      }
      button:focus,
      button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }
    }
  }
  .error {
    color: red;
  }
`;
