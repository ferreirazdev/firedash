import styled from 'styled-components'

export const Container = styled.div`
  background: #181B23;
  padding: 12px;
  

  .navWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 80px;
  }

  .routesWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logoImg {
      img {
        width: 24px;
        margin-right: 10px;
      }
    }
    a {
      margin-right: 20px;
      text-decoration: none;
      color: #fff;
      font-weight: 500;
      &:hover {
        color: #F67E2D;
      }
    }
  }

  .buttonWrapper {
    button {
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

  .signInWrapper {
    a {
      font-size: 14px;
      background: #f2721c;
      padding: 8px;
      border-radius: 6px;
      color: #fff;
      font-weight: 500;
      text-decoration: none;
      &:hover {
        background: #F67E2D;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .navWrapper {
      align-items: center;
    }

    .routesWrapper {
      display: flex;
      justify-content: flex-start;
      font-size: 15px;
    }

    .buttonWrapper {
      align-items: center;
      button {
        align-self: center;
        font-size: 12px;
      }
    }
  }
`;