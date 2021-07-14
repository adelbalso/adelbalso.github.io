import styled from "styled-components"

const StyledText = styled.span`
  font-family: ${(props) => props.bold ? props.theme.text.familyMedium
    : props.light ? props.theme.text.familyLight
      : props.theme.text.family
  };
  font-size: ${props => props.headline ? props.theme.text.sizeLarge
    : props.body ? props.theme.text.sizeMedium
      : props.theme.text.size
  }px;
  line-height: ${props => props.headline ? props.theme.text.lineHeightLarge
    : props.body ? props.theme.text.lineHeightMedium
      : props.theme.text.lineHeight
  }px;
  color: ${props => props.bright ? props.theme.color.white
    : props.lightened ? props.theme.color.gray
      : props.highlight ? props.theme.color.blue
        : props.theme.color.black
  };
  margin-bottom: ${props => (props.paragraph && props.headline) ? props.theme.text.lineHeightLarge
    : (props.paragraph && props.body) ? props.theme.text.lineHeightMedium
      : (props.paragraph) ? props.theme.text.lineHeight
        : 0
  }px;
  border-left: ${props => (props.lineLeft && props.lightened) ? `1px solid ${props.theme.color.gray}`
    : (props.lineLeft) ? `1px solid ${props.theme.color.black}`
      : (props.lineLeft && props.bright) ? `1px solid ${props.theme.color.white}`
        : 'none'
  };
  padding-left: ${props => (props.lineLeft && props.body) ? props.theme.util.buffer * 2
    : (props.lineLeft) ? props.theme.util.buffer
      : 0
  }px;
  display: ${props => props.paragraph ? 'block'
    : props.highlight ? 'flex'
      : 'inline'
  };
  text-align: ${props => props.center && 'center'};
  align-items: ${props => props.highlight && 'center'};
  justify-content: ${props => props.highlight && 'center'};
  border-radius: ${props => props.highlight && props.theme.util.radius}px;
  ${props => props.label && `text-transform: uppercase;`}
  background: ${props => props.highlight && props.theme.color.orange};
  padding: ${props => props.highlight && props.theme.util.buffer / 2}px;
  min-width: ${props => props.highlight && props.theme.util.buffer * 3}px;
  min-height: ${props => props.highlight && props.theme.util.buffer * 3}px;

  transition: ${({ theme }) => theme.util.transition};

  &:hover {
    cursor: ${props => props.hoverable && 'pointer'};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xs}px) {
    font-size: ${props => props.headline ? props.theme.text.sizeLargeMobile
    : props.body ? props.theme.text.sizeMediumMobile
      : props.theme.text.size
    }px;
    line-height: ${props => props.headline ? props.theme.text.lineHeightLargeMobile
      : props.body ? props.theme.text.lineHeightMediumMobile
        : props.theme.text.lineHeight
    }px;
  }
`;

const Text = ({ children, ...props }) => {
  return (
    <StyledText className="text" {...props}>{children}</StyledText>
  )
}

export default Text
