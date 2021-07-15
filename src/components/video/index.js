import React from 'react'


export default function Video() {
        return (
                <>
                        <video autoPlay muted loop width="1000" height="1000"  src={require('../video/fitness.mp4')} />
                </>
        )
}
