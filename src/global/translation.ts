import { LangTypes } from '.'
// import cn from './cn'
// import en from './en'
// const texts = { cn, en }
import texts from './texts'
const defaultLang = 'jp'
export default function useTranslation (lang: LangTypes) {
    /**
     * @deprecated
     */
    function switchLang (newLang: LangTypes): void { lang = newLang }
    /**
     * t stands for translate
     * @param key original text to be translated
     * @returns translated text if exist, else return original text
     */
    function t (key: string): string {
        if (lang === defaultLang) return key
        const textObj = texts.get(key)
        if (!textObj) return key
        return textObj[lang]
    }
    return { t }
}