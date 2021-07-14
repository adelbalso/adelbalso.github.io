import Head from 'next/head'
import styled, { keyframes } from 'styled-components'
import AnimMultiline from '../components/ui/animations/AnimMultiline'
import Grid from '../components/ui/Grid'

const rotate = keyframes`
  0% {
    transform: scale(1.2) rotate(0deg);
  }

  50% {
    transform: scale(0.1) rotate(180deg);
  }
  100% {
    transform: scale(1.2) rotate(360deg);
  }
`;

const VideoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  /* opacity: .1; */
  animation: ${rotate} 100s linear infinite;
  @media only screen and (max-width: 600px) {
    bottom: 50%;
  }
`

const Video = styled.video`
  height: 100%;
  width: 100%;
`

const Content = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 10%;
  display: flex;
  align-items: flex-end;
`

const Headline = styled.div`
  /* font-size: ${({ theme }) => theme.text.sizeLarge}px; */
`

const Text = styled.div`
  ${props => props.secondary &&`
    color: ${props.theme.color.gray};
  `}
  &, * {
    ${props => props.secondary &&`
      font-size: ${props.theme.text.sizeSmall}px;
    `}
  }
`

const Homepage = () => {
  const heroBgImg = 'https://images.unsplash.com/photo-1528370400454-2c647503cd53?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80'

  return (
    <>
      <Head>
        <title>ADB</title>
        <meta name="title" content="Adrian Del Balso dot com" />
        <meta property="og:site_name" content="Adrian Del Balso dot com" key="og_lu_site_name" />
        <meta name="description" content="Hey" />
        <meta name="keywords" content="I like to make shit." />
        <meta property="og:title" content="Adrian Del Balso dot com" key="og_lu_site_title" />
        <meta property="og:description" content="I like to make shit." key="og_lu_site_description" />
        <meta property="og:image" content={heroBgImg} key="og_lu_site_image" />
      </Head>

      <VideoContainer>
        <Video autoPlay playsInline muted loop id="myVideo">
          <source src="/assets/images/bg-adb.mp4" type="video/mp4" />
        </Video>
      </VideoContainer>

      <Content>
        <div>
          <Headline><AnimMultiline str="Tfw you're trying to pick a font." /></Headline>
          <Grid mt={2} style={{ maxWidth: 400 }}>
            <Text secondary>Hi! That's my name. I like to build things. I'm currently building <a href="https://www.littleuniverse.com/" target="_blank">Little Universe</a>. Before that, I worked on <a href="https://www.strivedigital.org/" target="_blank">Strive Digital</a>, <a href="https://angel.co/company/pilotworks" target="_blank">Pilotworks</a>, <a href="https://www.farmigo.com/" target="_blank">Farmigo</a>, and <a href="https://angel.co/company/amicus" target="_blank">Amicus</a>.</Text>
          </Grid>
          <Grid mt={2} style={{ maxWidth: 400 }}>
            <Text secondary>Want to build something together? <a href="mailto:a.delbalso@gmail.com">Say hello!</a></Text>
          </Grid>
        </div>
      </Content>
    </>
  )
}

export default Homepage
