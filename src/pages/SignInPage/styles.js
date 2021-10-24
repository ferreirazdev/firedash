import styled from 'styled-components'

export const Container = styled.div`
  background: #181b23;
  width: 100%;
  height: 100vh;

  .formWrapper {
    padding: 100px 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 20px;
      color: #181b23;
    }
    
    form {
      background: #f2f2f2;
      padding: 30px 10px;
      width: 34%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 30px;


      input {
        width: 80%;
        padding: 13px;
        margin-top: 20px;
        background: #fff;
        border-radius: 15px;
      }
      button {
        width: 80%;
        margin-top: 20px;
        margin-bottom: 20px;
        background: #f2721c;
        padding: 8px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 500;
        color: #fff;

        &:hover {
          background: #F67E2D;
        }
      }
    }
  }
`;