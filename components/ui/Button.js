import styled from 'styled-components'

import {
  Text
} from './index'

const StyledButton = styled.button`
  padding: ${({ theme }) => theme.util.buffer}px ${({ theme }) => theme.util.buffer * 4}px;
  border: ${props => props.bright ? `1px solid ${props.theme.color.white}` : `1px solid ${props.theme.color.black}`};
  border-radius: ${({ theme }) => theme.util.radius}px;
  transition: ${({ theme }) => theme.util.transition};
  box-shadow: 0;
  background: ${props => (props.solid && !props.bright) ? props.theme.color.black : 'transparent'};
  .text {
    color: ${props => (props.solid && !props.bright) ? props.theme.color.white
      : props.bright ? props.theme.color.white
        : props.theme.color.black
    };
  }
  &:hover {
    cursor: pointer;
    background: ${props => props.bright ? props.theme.color.white : props.theme.color.black};
    box-shadow: 0px 10px 30px rgba(0,0,0,.15);
    .text {
      color: ${props => props.bright ? props.theme.color.black : props.theme.color.white};
    }
  }
  ${props => props.disabled && `
    opacity: .3;
    background: ${props.theme.color.gray};
    border: 1px solid ${props.theme.color.gray};
    pointer-events: none;
  `}
`;

const Button = ({ children, bright, solid, className, disabled }) => {

  return (
    <StyledButton
      className={className}
      bright={bright}
      solid={solid}
      disabled={disabled}
    >
      <Text bright={disabled || bright} solid={solid}>
        {children}
      </Text>
    </StyledButton>
   )
}

export default Button
