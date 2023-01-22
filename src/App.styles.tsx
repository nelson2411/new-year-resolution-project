import { Container, Row } from "react-bootstrap"
import styled from "styled-components"

export const MainContainer = styled(Container)`
  min-height: 80vh;

  @media (max-width: 768px) {
    width: 100%;
  }
`
export const MainRow = styled(Row)`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`
