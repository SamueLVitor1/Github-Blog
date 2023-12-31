import styled from "styled-components";


export const ListPublicationContainer = styled.ul`
  padding: 1rem;
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  flex-wrap: wrap;
  margin-top: 4.2rem;
  margin-bottom: 4rem;

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, minmax(200px, 400px));
  }

  a{
    color: ${props => props.theme["base-text"]};
  }

  li{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    padding: 2rem;
    background-color: ${props => props.theme["base-post"]};
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s;
    
    
    &:hover{
      transform: scale(1.02);
    }

    header{
      display: flex;
      justify-content: space-between;

      h3{
      color: ${props => props.theme["base-title"]};
      font-size: 2rem;
      max-width: 280px;
      }

      p{
      color: ${props => props.theme["base-span"]};
      font-size: 1.4rem;
      }
    }
    
    section{
      p{
        height: 112px;
        overflow-y: hidden;
      }
    }
  }
`