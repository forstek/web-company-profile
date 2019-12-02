import React from 'react'
import {
  Container, ButtonWrapper,
  FakeUpFace, FakeBottomFace, FakeRightFace, FakeLeftFace,
  CubeWrapper, CubeChild
} from './EffectButtonStyle'

const EffectButton = (props) => {
  const { width, height, background, children } = props
  const actualWidth = `${width}px`
  const actualHeight = `${height}px`
  const halfWidth = `${width / 2}px`
  const halfHeight = `${height / 2}px`
  const additionalTranslate = width / 2 - height / 2

  return (
    <Container actualWidth={actualWidth} actualHeight={actualHeight} background={background}>
      <ButtonWrapper actualWidth={actualWidth} actualHeight={actualHeight}>

        <FakeUpFace additional={additionalTranslate} />
        <FakeBottomFace additional={additionalTranslate} />
        <FakeRightFace />
        <FakeLeftFace />

        <CubeWrapper height={height} width={width} background={background}>

          <CubeChild
            front
            halfWidth={halfWidth}
          >
            {children}
          </CubeChild>

          <CubeChild
            top
            width={width}
            height={height}
            halfWidth={halfWidth}
            halfHeight={halfHeight}
          >
            {children}
          </CubeChild>

          <CubeChild
            bottom
            width={width}
            height={height}
            halfWidth={halfWidth}
            halfHeight={halfHeight}
          >
            {children}
          </CubeChild>

          <CubeChild
            right
            halfWidth={halfWidth}
          >
            {children}
          </CubeChild>

          <CubeChild
            left
            halfWidth={halfWidth}
          >
            {children}
          </CubeChild>

        </CubeWrapper>

      </ButtonWrapper>
    </Container>
  )
}

export default EffectButton
