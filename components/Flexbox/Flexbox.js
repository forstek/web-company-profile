import styled from 'styled-components'

const setVerticalAlign = (align) => {
	switch (align) {
		case "top":
			return "flex-start"
		case "center":
			return "center"
		case "bottom":
			return 'flex-end'
		default:
			return 'flex-start'
	}
}

const setHorizontalAlign = (align) => {
	switch (align) {
		case "center":
			return "center"
		case "between" :
			return "space-between"
		default:
			return "start"
	}
}

const setPadding = (padding) => {

}

const Element = styled.div`
	${ props => props.equal ? `flex:1;` : ""}
	display: flex;
	flex-wrap: ${ props => props.wrap ? "wrap" : "nowrap"};
	flex-direction: ${ props => props.direction ? props.direction : "row"};
  	align-items: ${ props => setVerticalAlign(props.vertical)};
	justify-content: ${ props => setHorizontalAlign(props.horizontal)};
	padding-left: 15px;
	padding-right:15px;
	height:100%;

	${ props => props.wrap ? `& > * { flex-basis:${100/props.wrap}%; }` : ""}
`

const Flexbox = (props) => {

	return (
	<Element {...props}>

	</Element>

	)
}

export default Flexbox