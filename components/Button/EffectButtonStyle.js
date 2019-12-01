import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
    width:${props => props.actualWidth};
    height: ${props => props.actualHeight};
    overflow: hidden;
    border-radius: 4px;
    /* background: ${props => props.background} */
`

export const ButtonWrapper = styled.div`
    width: ${props => props.actualWidth};
    height: ${props => props.actualHeight};   
    font-size: 1em;
    padding: 0;
    margin: 0;
    border-radius: 3px;
    position: relative;
`

export const CubeChild = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    text-align:center;
    color: white;
    ${props => {
        if (props.front) return `transform: rotateY(0deg) translateZ(${props.halfWidth});`
        else if (props.top) return `transform: rotateX( 90deg) translateZ(${props.halfHeight}) translateY(${props.width / 2 - props.height / 2}px);`
        else if (props.bottom) return `transform: rotateX(-90deg) translateZ(${props.halfHeight}) translateY(-${props.width / 2 - props.height / 2}px);`
        else if (props.right) return `transform: rotateY( 90deg) translateZ(${props.halfWidth});`
        else if (props.left) return `transform: rotateY(-90deg) translateZ(${props.halfWidth});`
    }}
`

export const CubeWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.4s ease;
    backface-visibility: hidden;
    
    & ${CubeChild} {
        padding-top: ${props => props.height / 4}px;
        background: #2d6ae3;
        border: 1px solid ${darken(0.1, '#2d6ae3')};
    }
`

export const fakeFace = styled.div`
    z-index: 2;
    opacity: 0;

    &:hover {
        z-index: 3;
        opacity: 0;
        height: 100%;
        width: 100%;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
`

export const FakeUpFace = styled(fakeFace)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: red;
    clip-path: polygon(50% 100%, 0 0, 100% 0);

    &:hover ~ ${CubeWrapper} {
        transform: translateY(-${props => props.additional}px) rotateX( -90deg);
    }
`

export const FakeBottomFace = styled(fakeFace)`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: green;
    clip-path: polygon(50% 0%,100% 100%,0 100%);

    &:hover ~ ${CubeWrapper} {
        transform: translateY(${props => props.additional}px) rotateX( 90deg);
    }
`

export const FakeRightFace = styled(fakeFace)`
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: blue;
    clip-path: polygon(0 50%, 100% 0, 100% 100%);

    &:hover ~ ${CubeWrapper} {
        transform: rotateY(-90deg);
    }
`

export const FakeLeftFace = styled(fakeFace)`
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: yellow;
    clip-path: polygon(0 0, 100% 50%, 0 100%);

    &:hover ~ ${CubeWrapper} {
        transform: rotateY(90deg);
    }
`
