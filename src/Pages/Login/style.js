import styled from "styled-components";

export const LoginContainer = styled.main`
  display: flex;
  align-items: center;
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  justify-content: center;
  background-color: var(--brand-1);
  align-items: center;

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--brand-2);
    height: 55px;
    h3 {
      font-size: 25px;
      color: var(--white-1);
    }
  }
  .cotainerMain {
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-color: var(--white-1);
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
      background-color: var(--grey-1);
      color: var(--white-1);
      padding: 10px;
    }
    div {
      button {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        max-width: 100%;
        background-color: var(--brand-2);
        color: var(--white-1);
        border-radius: 8px;
        font-family: inherit;
        cursor: pointer;
        transition: border-color 0.25s;
        height: 35px;
      }
      button:hover {
        border-color: var(--brand-3);
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
