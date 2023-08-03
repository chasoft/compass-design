import {globalCss} from '../theme'

export const preflightStyles = globalCss({
  /**
   * normailze.css based on modern-normalize v1.1.0
   * see https://github.com/sindresorhus/modern-normalize
   */

  /*
   * Document
   * ========
   */

  /**
   * Use a better box model (opinionated).
   */
  '*, ::before, ::after': {
    boxSizing: 'border-box',
  },

  /**
   * 1. Correct the line height in all browsers.
   * 2. Prevent adjustments of font size after orientation changes in iOS.
   * 3. Use a more readable tab size (opinionated).
   */
  html: {
    lineHeight: 1.15,
    '-webkit-text-size-adjust': '100%',
    '-moz-tab-size': 4,
    tabSize: 4,
  },

  /**
   * Sections
   * ========
   */

  /**
   * 1. Remove the margin in all browsers.
   * 2. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
   */
  body: {
    margin: 0,
    fontFamily: '$sans',
  },

  /**
   * Grouping content
   * ================
   */

  /**
   * 1. Add the correct height in Firefox.
   * 2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
   */
  hr: {
    height: 0,
    color: 'inherit',
  },

  /**
   * Text-level semantics
   * ====================
   */

  /**
   * Add the correct text decoration in Chrome, Edge, and Safari.
   */
  'abbr[title]': {
    textDecoration: 'underline dotted',
  },

  /**
   * Add the correct font weight in Edge and Safari.
   */
  'b, strong': {
    fontWeight: 'bolder',
  },

  /**
   * 1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
   * 2. Correct the odd 'em' font sizing in all browsers.
   */
  'code, kbd, samp, pre': {
    fontFamily: '$mono',
    fontSize: '1em',
  },

  /**
   * Add the correct font size in all browsers.
   */
  small: {
    fontSize: '80%',
  },

  /**
   * Prevent 'sub' and 'sup' elements from affecting the line height in all browsers.
   */
  'sub, sup': {
    fontSize: '75%',
    lineHeight: 0,
    position: 'relative',
    verticalAlign: 'baseline',
  },
  sub: {
    bottom: '-0.25em',
  },
  sup: {
    top: '-05em',
  },

  /**
   * Tabular data
   * ============
   */

  /**
   * 1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
   * 2. Correct table border color inheritance in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
   */
  table: {
    textIndent: 0,
    borderColor: 'inherit',
  },

  /**
   * Forms
   * =====
   */

  /**
   * 1. Change the font styles in all browsers.
   * 2. Remove the margin in Firefox and Safari.
   */
  'button, input, optgroup, select, textarea': {
    fontFamily: 'inherit',
    fontSize: '100%',
    lineHeight: 1.15,
    margin: 0,
  },

  /**
   * Remove the inheritance of text transform in Edge and Firefox.
   */
  'button, select': {
    textTransform: 'none',
  },

  /**
   * Correct the inability to style clickable types in iOS and Safari.
   */
  'button, [type="button"], [type="reset"], [type="submit"]': {
    '-webkit-appearance': 'button',
  },

  /**
   * Remove the inner border and padding in Firefox.
   */
  '::-moz-focus-inner': {
    borderStyle: 'none',
    padding: 0,
  },

  /**
   * Restore the focus styles unset by the previous rule.
   */
  ':-moz-focusring': {
    outline: '1px dotted ButtonText',
  },

  /**
   * Remove the additional ':invalid' styles in Firefox.
   * See: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737
   */
  ':-moz-ui-invalid': {
    boxShadow: 'none',
  },

  /**
   * Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.
   */
  legend: {
    padding: 0,
  },

  /**
   * Add the correct vertical alignment in Chrome and Firefox.
   */
  progress: {
    verticalAlign: 'baseline',
  },

  /**
   * Correct the cursor style of increment and decrement buttons in Safari.
   */
  '::-webkit-inner-spin-button, ::-webkit-outer-spin-button': {
    height: 'auto',
  },

  /**
   * 1. Correct the odd appearance in Chrome and Safari.
   * 2. Correct the outline style in Safari.
   */
  '[type="search"]': {
    '-webkit-appearance': 'textfield',
    outlineOffset: '-2px',
  },

  /**
   * Remove the inner padding in Chrome and Safari on macOS.
   */
  '::-webkit-search-decoration': {
    '-webkit-appearance': 'none',
  },

  /**
   * 1. Correct the inability to style clickable types in iOS and Safari.
   * 2. Change font properties to 'inherit' in Safari.
   */
  '::-webkit-file-upload-button': {
    '-webkit-appearance': 'button',
    font: 'inherit',
  },

  /**
   * Interactive
   * ===========
   */

  /**
   * Add the correct display in Chrome and Safari.
   */
  summary: {
    display: 'list-item',
  },
})
