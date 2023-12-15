import styled from "styled-components";

export const PublicationHeader = styled.div`
 background: ${props => props.theme["base-profile"]};
  width: 100%;
  min-height: 168px;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);

  header{
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3{
      font-size: 1.2rem;
      color: ${props => props.theme.blue};
      line-height: 160%;
      text-transform: uppercase;
    }

    a{
      display: flex;
      align-items: center;
      font-size: 1.2rem;
      gap: 4px;
      text-transform: uppercase;
    }
  }

  h2{
    color: ${props => props.theme["base-title"]};
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 31.2px */
    margin-top: 20px;
  }

  footer{
    margin-top: 12px;
    display: flex;
    align-items: center;
    gap: 3rem;

    p{
      display: flex;
      gap: 8px;
      align-items: center;
      font-size: 12px;
    }
  }
`
export const PublicationBody = styled.section``