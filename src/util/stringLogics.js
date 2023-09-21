// str2에 str1이 들어있나 확인하기

// 예) str1 = 'rem', str2 = '20rem'
// checkStringIncluded('rem', '20rem') => true

export const checkStringIncluded = (str1, str2) =>
  new RegExp(str1).test(str2) ? true : false;
