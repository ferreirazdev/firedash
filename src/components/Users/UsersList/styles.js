import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  background: #f2f2f2;
  height: 100vh;
  
`;

export const UsersWrapper = styled.div`
  background: #fff;
  width: 80%;
  padding: 30px;
  border-radius: 12px;

  .categoriesWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    

    .categories {
      border: 1px solid red;
      padding: 10px;
      width: 100%;
      h1 {
        font-size: 15px;
      }

      .infoWrapper {
        display: flex;
        
      }

      .info {
        
      }
    }
  }
  
`;