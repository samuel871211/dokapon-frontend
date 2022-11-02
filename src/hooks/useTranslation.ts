import texts from "data/texts";
import { useContext } from "react";
import { newGameProgressContext } from "reducers/newGameProgress";

const defaultLang = "jp";

export default useTranslation;

function useTranslation() {
  const { newGameProgress } = useContext(newGameProgressContext);
  const lang = newGameProgress.userPreference.lang;
  function t(key: keyof typeof texts) {
    if (lang === defaultLang) return key;
    const textObj = texts[key];
    if (!textObj) return key;
    return textObj[lang];
  }
  return { t };
}
