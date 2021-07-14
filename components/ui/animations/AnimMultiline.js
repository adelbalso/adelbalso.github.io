import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const randomString = Math.random().toString(36).substring(7);
const stringClass = 'headline-span-' + randomString

const AnimMultiline = ({ str }) => {
  const [lines, setLines] = useState([])

  const splitStr = str.split(' ');

  const transitionDuration = 1.25 //must change this in Layout.js

  useEffect(() => {
    // replace this with useRef:
    const strSpans = document.querySelectorAll(stringClass)
    let line = 1
    const spanArr = []
    strSpans.forEach((span, i, arr) => {
      if (i > 0 && (span.offsetTop > arr[i-1].offsetTop)) {
        line++
        span.classList.add(`animate-line-${line}`);
      } else {
        span.classList.add(`animate-line-${line}`);
      }
      if(typeof spanArr[line - 1] == 'undefined') { spanArr[line - 1] = []}
      spanArr[line - 1].push(span.textContent)
    })
    setLines(spanArr)
  }, [])

  // const lineAnimations = {
  //   rotate: 180,
  //   transition: {
  //     delay: 2,
  //     duration: .5,
  //     staggerChildren: .5
  //   }
  // }e

  return (
    !lines.length ?
      splitStr.map((span, i) => <span key={i} className={stringClass}>{span} </span>)
    :
      lines.map((line, i) => {
        return (
          <motion.span
            key={i}
            animate={"popUp"}
            style={{ display: 'inline-flex', overflow: 'hidden', padding: '2px 0' }}
          >
            {line && line.map((word, j) => {
              return (
                <motion.span
                  key={j}
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  transition={{ delay: transitionDuration }}
                  className={stringClass}
                  style={{ display: 'inline', whiteSpace: 'pre' }}
                >{word}</motion.span>
              )
            })
          }
        </motion.span>
      )
    }
  ))
}

export default AnimMultiline
