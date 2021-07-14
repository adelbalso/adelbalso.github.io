import styled from "styled-components"

const StyledMaxwidth = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.xl}px;
  margin: 0 auto;
`;

const StyledMaxwidthInner = styled.div`
  padding: 0 ${({ theme }) => theme.util.buffer*5}px;
  background: ${props => (props.hasTheme === "climate") ? props.theme.color.climateGreen
    : (props.hasTheme === "lab") ? props.theme.color.innovationBlue
    : 'transparent'
  };
  padding: ${props => props.hasTheme ? `${props.theme.util.buffer * 5}px`: `0 ${({ theme }) => theme.util.buffer*5}px`};
  margin-left: ${props => props.hasTheme ? `${props.theme.util.buffer * 5}px` : '0'};
  margin-right: ${props => props.hasTheme ? `${props.theme.util.buffer * 5}px` : '0'};
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}px) {
    padding: 0 ${({ theme }) => theme.util.buffer * 2}px;
    margin-left: ${props => props.hasTheme ? `${props.theme.util.buffer * 2}px` : '0'};
    margin-right: ${props => props.hasTheme ? `${props.theme.util.buffer * 2}px` : '0'};
  }
`;

const Maxwidth = ({ children, ...props }) => {
  return (
    <StyledMaxwidth {...props}>
      <StyledMaxwidthInner {...props}>
        {children}
      </StyledMaxwidthInner>
    </StyledMaxwidth>
  )
}

export default Maxwidth
