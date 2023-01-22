import styled from "styled-components"

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  padding: 20px 0;
  font-size: 1.2rem;
  margin-top: 20px;
`

export const FooterTextContainer = styled.div`
  text-align: center;
`
export const FooterSocialContainer = styled.div`
  display: flex;
  & > li {
    margin: 0 10px;
    list-style: none;
  }
  & > li > a {
    text-decoration: none;
  }
  & > li > a:hover {
    /* add lightness to the color */
    filter: brightness(1.5);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  & > li > a > svg:hover {
    transform: scale(1.2);
  }
`
