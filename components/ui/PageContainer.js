import React from "react"
import styled from "styled-components"

const StyledPageContainer = styled.div`
`;

const PageContainer =({ children, ...props }) => {
  return (
    <StyledPageContainer {...props}>{children}</StyledPageContainer>
  )
}

export default PageContainer
