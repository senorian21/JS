function correctPolishLetters (string) {
    const replacements = {
      'ą': 'a',
      'ć': 'c',
      'ę': 'e',
      'ł': 'l',
      'ń': 'n',
      'ó': 'o',
      'ś': 's',
      'ź': 'z',
      'ż': 'z'
    };
    return string.replace(/[ąćęłńóśźż]/g, char => replacements[char]);
  }