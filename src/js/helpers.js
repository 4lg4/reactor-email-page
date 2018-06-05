const toArray = (text, separator) => text.split(separator).map(email => email.trim());

export { toArray };
