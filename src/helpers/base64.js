//i did't wrote this
//found solution here: https://developer.mozilla.org/en-US/docs/Glossary/Base64

export const b64_to_utf8 = str => {
  return decodeURIComponent(escape(window.atob(str)));
};

export const utf8_to_b64 = str => {
  return window.btoa(unescape(encodeURIComponent(str)));
};
