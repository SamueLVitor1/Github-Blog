import styled from "styled-components";


export const SearchPublicationsContainer = styled.section`
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  gap: 12px;

  header{
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3{
      color: ${props => props.theme["base-subtitle"]};
      font-size: 1.8rem;
      line-height: 160%;
    }

    div{
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }

  input{
    display: flex;
    width: 864px;
    padding: 12px 16px;
    align-items: center;
    gap: 8px;

    border-radius: 6px;
    border: 1px solid ${props=>props.theme["base-border"]};
    background: ${props=>props.theme["base-input"]};
  }
`
