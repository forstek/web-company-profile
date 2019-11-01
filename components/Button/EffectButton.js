import React from 'react'
import styled from 'styled-components'
import { Container, ButtonWrapper,
    FakeUpFace, FakeBottomFace, FakeRightFace, FakeLeftFace,
    CubeWrapper, CubeChild } from './EffectButtonStyle'

const EffectButton = (props) => {

    const { width, height, background, text } = props
    const actualWidth = `${width}px`
    const actualHeight = `${height}px`
    const halfWidth = `${width/2}px`
    const halfHeight = `${height/2}px`
    const additionalTranslate = width/2 - height/2

    return (
        <Container actualWidth={actualWidth} actualHeight={actualHeight} background={background}>
        <ButtonWrapper actualWidth={actualWidth} actualHeight={actualHeight}>

            <FakeUpFace additional={additionalTranslate}></FakeUpFace>
            <FakeBottomFace additional={additionalTranslate}></FakeBottomFace>
            <FakeRightFace></FakeRightFace>
            <FakeLeftFace></FakeLeftFace>

            <CubeWrapper height={height} width={width} background={background}>

                <CubeChild front
                    halfWidth={halfWidth}>
                    {text}
                </CubeChild>

                <CubeChild top
                    width={width}
                    height={height}
                    halfWidth={halfWidth}
                    halfHeight={halfHeight}>
                    {text}
                </CubeChild>

                <CubeChild bottom
                    width={width}
                    height={height}
                    halfWidth={halfWidth}
                    halfHeight={halfHeight}>
                    {text}
                </CubeChild>

                <CubeChild right
                    halfWidth={halfWidth}>
                    {text}
                </CubeChild>

                <CubeChild left
                    halfWidth={halfWidth}>
                    {text}
                </CubeChild>

            </CubeWrapper>

        </ButtonWrapper>
        </Container>
    )

}
    
export default EffectButton