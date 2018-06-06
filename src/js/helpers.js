import isHtml from 'is-html';
import isemail from 'isemail';

const toArray = (text, separator) => text.split(separator).map(email => email.trim());
const isHtmlElement = (text = '') => isHtml(text);
const isAValidEmail = (email = '') => isemail.validate(email);

export { toArray, isHtmlElement, isAValidEmail };
