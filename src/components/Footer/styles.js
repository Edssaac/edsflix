import styled from 'styled-components';


export const FooterBase = styled.footer`
  line-height: 30px;
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
  .nounderline {
    text-decoration: none;
    color: rgb(255,0,0);
  }
  
`;
