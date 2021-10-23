import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  background: #181b23;
  height: 100vh;
  
`;

export const UsersWrapper = styled.div`
  background: #fff;
  width: 80%;
  padding: 30px 20px;
  padding-bottom: 50px;
  border-radius: 12px;

  .categoriesWrapper {
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    

    .categories {
      width: 100%;

      .titleCategories {
        font-size: 15px;
        background: #f2f2f2;
        padding: 5px 10px;
        font-weight: 500;
      }

      .infoWrapper {
        margin-top: 5px;
        border-right: 1px solid #f2f2f2;
        border-left: 1px solid #f2f2f2;
      }

      .info {
        
        h1 {
          font-weight: 300;
          font-size: 15px;
          padding: 2px 15px;
        }
      }
    }
  }
  
`;