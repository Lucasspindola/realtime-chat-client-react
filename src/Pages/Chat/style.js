import styled from "styled-components";

export const ChatContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  max-height: 100vh;
  background-color: #c9e0d6;
  ul {
    max-height: 90vh;
    overflow-x: hidden;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 10px;
    li {
      background-color: #838abd;
      width: 100%;
      max-width: 100%;
      display: flex;
      padding: 20px 20px;
      flex-direction: column;
      gap: 10px;
      border-radius: 40px;
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
    bottom: 0;
    left: 0;

    background-color: #f5f5f5;

    button {
      display: flex;
      width: 15%;
      min-height: 100%;
      justify-content: center;
      align-items: center;
      background-color: #7599b3;
      color: #ffffff;
      border-radius: 8px;
      font-family: inherit;
      font-size: 17px;
      cursor: pointer;
      transition: border-color 0.25s;
      padding: 10px;
    }
    input {
      display: flex;
      width: 100%;
      max-width: 100%;
      border: none;
      background-color: #b2b9c1;
      color: #ffffff;
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
    background-color: #7599b3;
    border-bottom: 1px solid #000;
    box-shadow: 0px 5px 5px -5px rgba(0, 0, 0, 0.5);
    height: 100%;
    button {
      width: 50px;
      height: 50px;
      border-radius: 10px;
      background-color: #838abd;
      color: #ffffff;
      cursor: pointer;
    }
  }
`;
