import texts from "data/texts";
import { useContext } from "react";
import gameProgressCtx from "reducers/gameProgress";

const defaultLang = "jp";

export default useTranslation;

function useTranslation() {
  const { gameProgress } = useContext(gameProgressCtx);
  const lang = gameProgress.userPreference.lang;
  function t(key: keyof typeof texts) {
    if (lang === defaultLang) return key;
    const textObj = texts[key];
    if (!textObj) return key;
    return textObj[lang];
  }
  return { t };
}
