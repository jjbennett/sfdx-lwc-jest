import { Element, api } from 'engine';

export default class Button-icon-stateful extends Element {
    @api alternativeText
	@api disabled
	@api iconName
	@api name
	@api selected
	@api size
	@api value
	@api variant
    @api focus() {}
}