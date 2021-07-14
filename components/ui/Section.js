import React, { useEffect } from "react"
import styled from "styled-components"
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


const StyledSection = styled.div`
  margin: 0 auto;
  margin-top: ${(props) => props.noMargin ? 0
    : props.smallMargin ? props.theme.util.buffer * 5
      : props.theme.util.buffer * 25
  }px;
  margin-bottom: ${(props) => props.noMargin ? 0
    : props.smallMargin ? props.theme.util.buffer * 5
      : props.theme.util.buffer * 25
  }px;
  ${props => props.bg &&`
    background:linear-gradient(0deg, rgba(0,0,0, 0.25), rgba(0,0,0, 0.15)), url('${props.bg}');
    background-size: cover;
    background-position: center;
  `}
  height: ${props => props.full && '100vh'};
`;

const Section = ({ children, ...props }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const sectionAnimations = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <motion.div
      ref={ref}
      variants={sectionAnimations}
      animate={controls}
      initial="hidden"
    >
      <StyledSection {...props}>
        {children}
      </StyledSection>
    </motion.div>
  )
}

export default Section
