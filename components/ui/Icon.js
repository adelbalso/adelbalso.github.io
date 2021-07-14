import React from 'react'
import styled from 'styled-components'
import { CloseOutline } from '@styled-icons/evaicons-outline'
import {
  Check,
  Minus,
  Plus,
  InfoCircle,
  Plug,
  Dollar,
  Car,
  X,
  CalendarX,
  Calendar
} from '@styled-icons/boxicons-regular'
import {
  User,
  Pencil,
  Lock,
  RightArrowCircle,
  Sun,
  Tree,
  Megaphone
} from '@styled-icons/boxicons-solid'
import {
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  CircleFill,
  CheckCircleFill,
  ChevronUp,
  ChevronDown,
  ChevronExpand,
  ExclamationSquareFill,
  HeartFill
} from '@styled-icons/bootstrap'
import { HandRight} from '@styled-icons/ionicons-solid'


const StyledIcon = styled.span`
  width: ${(props) => (props.inBox) ? `${props.theme.util.buffer * 4 }px` : 'auto'};
  height: ${(props) => (props.inBox) ? `${props.theme.util.buffer * 4 }px` : 'auto'};
  display: ${(props) => (props.inBox) ? 'flex' : 'auto'};
  align-items: ${(props) => (props.inBox) ? 'center' : 'auto'};
  justify-content: ${(props) => (props.inBox) ? 'center' : 'auto'};
  border-radius: ${(props) => (props.inBox) ? `${props.theme.util.radius}px` : 'none'};
  background-color: ${(props) => (props.inBox) && props.theme.color.bg.darkened};
  svg {
    width: ${(props) => (props.size ? `${props.size}px` : `${props.theme.util.buffer * 2 }px`)};
    color: ${(props) => props.link ? props.theme.color.primary.main : props.theme.text.color};
    ${(props) => props.light && `color: ${props.theme.color.white};`}
    ${(props) => props.error && `color: ${props.theme.color.error.main};`}
    position: relative;
    top: -1px;
    display: inline-block;
    vertical-align: middle;
    overflow: hidden;
  }
  img {
    width: ${props => props.size ? `${props.size}px` : `${props.theme.util.buffer * 2.5 }px`};
    position: relative;
    top: -1px;
    display: inline-block;
    vertical-align: middle;
    overflow: hidden;
  }
  ${(props) => props.onClick && `
    cursor: pointer;
    &:hover {
      background: ${props.theme.color.bg.lightened};
      svg {
        color: ${props.theme.color.primary};
      }
    }
  `}
`

const Icon = ({
  className,
  type,
  ...iconProps
}) => {
  let source

  if (type === 'arrow-left') {
    source = <ArrowLeft />
  } else if (type === 'arrow-right') {
    source = <ArrowRight />
  } else if (type === 'arrow-down') {
    source = <ArrowDown />
  } else if (type === 'check') {
    source = <Check />
  } else if (type === 'circle') {
    source = <CircleFill />
  } else if (type === 'minus') {
    source = <Minus />
  } else if (type === 'plus') {
    source = <Plus />
  } else if (type === 'check-circle') {
    source = <CheckCircleFill />
  } else if (type === 'info') {
    source = <InfoCircle />
  } else if (type === 'caret-up') {
    source = <ChevronUp />
  } else if (type === 'caret-down') {
    source = <ChevronDown />
  } else if (type === 'plug') {
    source = <Plug />
  } else if (type === 'close') {
    source = <CloseOutline />
  } else if (type === 'dollar') {
    source = <Dollar />
  } else if (type === 'arrow-right-circle') {
    source = <RightArrowCircle />
  } else if (type === 'edit') {
    source = <Pencil />
  } else if (type === 'car') {
    source = <Car />
  } else if (type === 'error') {
    source = <ExclamationSquareFill />
  } else if (type === 'user') {
    source = <User />
  } else if (type === 'exit') {
    source = <X />
  } else if (type === 'expand') {
    source = <ChevronExpand />
  } else if (type === 'lock') {
    source = <Lock />
  } else if (type === 'application-closed') {
    source = <CalendarX />
  } else if (type === 'application-limited') {
    source = <Calendar />
  } else if (type === 'sun') {
    source = <Sun />
  } else if (type === 'tree') {
    source = <Tree />
  } else if (type === 'heart') {
    source = <HeartFill />
  } else if (type === 'hand') {
    source = <HandRight />
  } else if (type === 'megaphone') {
    source = <Megaphone />
  }

  return (
    <StyledIcon {...iconProps} className={className}>
      {source}
    </StyledIcon>
  )
}

export default Icon
