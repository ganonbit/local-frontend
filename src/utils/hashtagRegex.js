export const hashtagRegex = inputText => {
  var regex = /(?:^|\s)(?:#)([a-zA-Z\d]+)/gm;
  var matches = [];
  var match;

  while ((match = regex.exec(inputText))) {
    matches.push(`#${match[1]}`);
  }

  return matches;
};
