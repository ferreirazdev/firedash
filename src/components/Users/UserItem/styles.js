import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  background: #181b23;
  height: 100vh;

  .dataWrapper {
    background: #f2f2f2;
    width: 34%;
    padding: 60px 30px;
    border-radius: 15px;

    h2 {
      text-align: center;
    }

    form {
      justify-content: center;
      align-items: center;

      input {
        width: 100%;
        padding: 10px;
        background: #fff;
        border-radius: 15px;
      }

      button {
        width: 100%;
        margin-top: 20px;
        background: #f2721c;
        padding: 8px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 500;
        color: #fff;
        font-size: 15px;
        &:hover {
          background: #F67E2D;
        }
      }
      
    }

    .infoData {
      margin-top: 25px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      div {
        display: flex;
      }

      span {
        font-weight: 600;
        text-align: center;
        margin-right: 10px;
      }

      h1 {
        font-size: 13px;
        margin-bottom: 10px;
        font-weight: 300;
      }
    }
  }
`;