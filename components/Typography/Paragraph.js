import React from 'react'
import styled from 'styled-components'

const Styled = styled.p`
        @import url('static/fonts/segoe-ui/segoe-ui-semilight.ttf');
        font-family: 'Segoe UI';
        color: #323232;
        text-align: center;
    `

const Paragraph = (props) => (

    <Styled {...props}>{props.children}</Styled>

)

export default Paragraph