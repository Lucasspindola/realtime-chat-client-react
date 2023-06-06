import styled from "styled-components";

export const ChatContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  max-height: 100vh;
  background-color: var(--brand-1);
  ul {
    height: 90vh;
    overflow-x: hidden;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 15px;
    li {
      background-color: #838abd;
      width: 90%;
      max-width: 100%;
      display: flex;
      padding: 20px 20px;
      flex-direction: column;
      gap: 10px;
      border-radius: 0 40px 40px 40px;
      span {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        max-width: 100%;
        padding: 5px;
        display: inline-block;
        word-wrap: break-word;
        overflow-wrap: break-word;
      }
      h4 {
        padding: 5px;
      }
    }
  }
  ul::-webkit-scrollbar {
    width: 0.5em;
    height: 0.5em;
  }

  ul::-webkit-scrollbar-thumb {
    background-color: #888;
  }

  ul::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  footer {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 10vh;
    bottom: 0;
    left: 0;

    box-shadow: 0px -10px 10px -10px rgba(0, 0, 0, 0.5);

    button {
      display: flex;
      width: 15%;
      min-height: 100%;
      justify-content: center;
      align-items: center;
      background-color: var(--brand-2);
      color: var(--white-1);
      border: none;
      outline: none;
      border-radius: 0 8px 8px 0;
      font-family: inherit;
      font-size: 17px;
      cursor: pointer;
      transition: border-color 0.25s;
      padding: 10px;
      outline: 0;
    }
    input {
      display: flex;
      width: 100%;
      max-width: 100%;
      border: none;
      background-color: var(--grey-1);
      color: var(--white-1);
      width: 85%;
      height: 100%;
      padding: 0 10px;
    }
  }
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: var(--brand-2);
    border-bottom: 1px solid #000;
    box-shadow: 0px 5px 5px -5px rgba(0, 0, 0, 0.5);
    height: 10vh;

    h1 {
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      font-size: 24px;
    }
    button {
      width: 50px;
      height: 50px;
      border: 1px color #000;
      /* outline: none; */
      border-radius: 10px;
      background-color: #838abd;
      color: var(--white-1);
      cursor: pointer;
    }
  }
`;
