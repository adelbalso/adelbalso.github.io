import Head from 'next/head'
import styled, { keyframes } from 'styled-components'
import AnimMultiline from '../components/ui/animations/AnimMultiline'
import Grid from '../components/ui/Grid'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

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

const FadeIn = styled.div`
  animation: ${fadeIn} .9s cubic-bezier(.69,-0.25,.55,1.47);
`

const Homepage = () => {
  const heroBgImg = 'https://s3.amazonaws.com/adriandelbalso.com/assets/og-img.png'

  return (
    <>
      <Head>
        <title>ADB</title>
        <meta name="title" content="adrian del balso dot com" />
        <meta property="og:site_name" content="adrian del balso dot com" key="og_lu_site_name" />
        <meta name="description" content="Hey" />
        <meta name="keywords" content="I like to build things" />
        <meta property="og:title" content="adrian del balso dot com" key="og_lu_site_title" />
        <meta property="og:description" content="I like to build things" key="og_lu_site_description" />
        <meta property="og:image" content={heroBgImg} key="og_lu_site_image" />
      </Head>

      <VideoContainer>
        <Video autoPlay playsInline muted loop id="myVideo">
          <source src="/assets/images/bg-adb.mp4" type="video/mp4" />
        </Video>
      </VideoContainer>

      <Content>
        <div>
          <FadeIn>
            <Headline><AnimMultiline str="Tfw you're trying to pick a font." /></Headline>
          </FadeIn>
          <FadeIn>
            <Grid mt={2} style={{ maxWidth: 400 }}>
              <Text secondary>Hi! That's my name. I like to build things. I'm currently building <a href="https://www.littleuniverse.com/" target="_blank">Little Universe</a>. Before that, I worked on <a href="https://www.strivedigital.org/" target="_blank">Strive Digital</a>, <a href="https://angel.co/company/pilotworks" target="_blank">Pilotworks</a>, <a href="https://www.farmigo.com/" target="_blank">Farmigo</a>, and <a href="https://angel.co/company/amicus" target="_blank">Amicus</a>.</Text>
            </Grid>
          </FadeIn>
          <FadeIn>
            <Grid mt={2} style={{ maxWidth: 400 }}>
              <Text secondary>Want to build something together? <a href="mailto:a.delbalso@gmail.com">Say hello!</a></Text>
            </Grid>
          </FadeIn>
        </div>
      </Content>
    </>
  )
}

export default Homepage
