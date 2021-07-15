import React from 'react'
import styled from 'styled-components';

const VideoContainer = styled.video`


  @media ( max-width: 768px ) {
    max-width: 90%
  }
`;

export default function WorkoutVideo() {
        return (
                <>
                        <VideoContainer autoPlay muted loop width="1000" height="1000"  src={require('../video/fitness.mp4')} />
                </>
        )
}

