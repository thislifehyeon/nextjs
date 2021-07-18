import React from 'react'
import styled from 'styled-components';

const VideoContainer = styled.video`
  min-width: 40%;
  /* padding-left: 40px; */

  @media (max-width:1280px) { 
    width: 90%;
    height: auto;
    box-sizing: auto;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    margin-bottom: 200px;
  }
  
  @media ( max-width: 768px ) {
    box-sizing: auto;
    padding: 30px 0px;
    flex-direction: column;
    margin-bottom: 10%;
  }
`;

export default function Video() {
        return (
                <>
                        <VideoContainer autoPlay muted loop width="1000" height="1000"  src={require('../video/Video.mp4')} />
                </>
        )
}
