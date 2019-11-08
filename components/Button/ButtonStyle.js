import styled from 'styled-components'
import { darken } from 'polished'

export const BasicButton = styled.button`
        background: ${props => props.primary ? '#FC6F20' : '#FFFFFF'};
        border: ${props => props.primary ? 'none' : '1px solid #323232'};
        width: 185px;
        height: 55px;
        color: ${props => props.primary ? '#FFFFFF' : '#323232'};
        border-radius : ${props => props.round ? '6px' : 0};
        transition: all 0.3s ease;

        &:hover {
            ${props => {
                if (props.primary) {
                    return `background: ${darken(0.1, props.primary ? '#FC6F20' : '#FFFFFF')};`
                } else {
                    return 'background: #323232; color: white;'
                }
            }};
        }
    `
