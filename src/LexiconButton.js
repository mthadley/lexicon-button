import Component from 'metal-component';
import core from 'metal';
import Soy from 'metal-soy';
import templates from './LexiconButton.soy';

import LexiconIcon from 'lexicon-icon'; // jshint ignore:line

/**
 * Implementation of the Lexicon Button Piece
 *
 * @see  {@link http://liferay.github.io/lexicon/content/buttons/|Lexicon Definition}
 */
class LexiconButton extends Component {
}

/**
 * State definition.
 * @ignore
 * @static
 * @type {!Object}
 */
LexiconButton.STATE = {
	/**
	 * CSS class (or list of classes) for styling the button's main container
	 * @default undefined
	 * @instance
	 * @memberof LexiconButton
	 * @type {string}
	 */
	block: {
		validator: core.isBoolean
	},

	/**
	 * CSS class (or list of classes) for styling the button's main container
	 * @default undefined
	 * @instance
	 * @memberof LexiconButton
	 * @type {string}
	 */
	cssClass: {
		validator: core.isString
	},

	/**
	 * CSS class (or list of classes) for styling the button's main container
	 * @default undefined
	 * @instance
	 * @memberof LexiconButton
	 * @type {string}
	 */
	href: {
		validator: core.isString
	},

	/**
	 * CSS class (or list of classes) for styling the button's main container
	 * @default undefined
	 * @instance
	 * @memberof LexiconButton
	 * @type {string}
	 */
	icon: {
		validator: core.isString
	},

	/**
	 * CSS class (or list of classes) for styling the button's main container
	 * @default undefined
	 * @instance
	 * @memberof LexiconButton
	 * @type {string}
	 */
	iconCssClass: {
		validator: core.isString
	},

	/**
	 * CSS class (or list of classes) for styling the button's main container
	 * @default undefined
	 * @instance
	 * @memberof LexiconButton
	 * @type {string}
	 */
	level: {
		validator: core.isString
	},

	/**
	 * CSS class (or list of classes) for styling the button's main container
	 * @default undefined
	 * @instance
	 * @memberof LexiconButton
	 * @type {string}
	 */
	value: {
		validator: core.isString
	}
};

// Register component
Soy.register(LexiconButton, templates);

export default LexiconButton;