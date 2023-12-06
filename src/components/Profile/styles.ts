import styled from "styled-components";


export const ProfileContainer = styled.div`
  background: ${props => props.theme["base-profile"]};
  width: 100%;
  min-height: 21.2rem;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);

  display: flex;
  gap: 3.2rem;
  align-items: center;

  img{
    max-width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`

export const InfosProfileDate = styled.section`
  display: flex;
  flex-direction: column;

  header{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;

    h2{
      color: ${props=>props.theme["base-title"]};
      font-size: 2.4rem;
      line-height: 130%;
    }

    a{
      display: flex;
      font-size: 13px;
      align-items: center;
      gap: 6px;
    }
  }
`