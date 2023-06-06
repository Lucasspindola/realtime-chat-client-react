import styled from "styled-components";

export const JoinContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  justify-content: center;
  background-color: var(--brand-1);
  align-items: center;
  .background-icon {
    width: 20%;
    height: 40%;
    size: 5;
  }
  div {
    display: flex;
    gap: 50px;
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--brand-2);
    min-height: 80px;
    border-radius: 20px;
  }
  .cotainerMain {
    display: flex;
    flex-direction: column;
    gap: 20vh;
    width: 80%;
    max-width: 500px;
  }

  h3 {
    font-size: 25px;
    color: var(--white-1);
  }

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
    font-size: 20px;
    cursor: pointer;
    transition: border-color 0.25s;
    height: 40px;
  }
  button:hover {
    border-color: var(--brand-3);
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
  .btnExit:hover {
    background-color: #f4796b;
  }
  .btnOpen:hover {
    background-color: #009dcf;
  }
`;
