// 웹에서 애매하게 언어가 들어올때 설정해주기

import {checkStringIncluded} from '../../../util/stringLogics';
import {languages} from '../langs';

// 예 -> en-US -> en

export const convertLang = input => {
  const selectedLang = Object.values(languages).filter(v =>
    checkStringIncluded(v, input),
  )[0];

  return selectedLang;
  //   if (!!selectedLang) {
  //     return selectedLang;
  //   } else {
  //     return undefined;
  //   }
};
