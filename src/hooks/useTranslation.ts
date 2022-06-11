import { LangTypes } from 'global/index'
// import cn from './cn'
// import en from './en'
// const texts = { cn, en }
import texts from 'data/texts'
const defaultLang = 'jp'

export default useTranslation

function useTranslation (lang: LangTypes): { t: (key: string) => string } {
    function t (key: string): string {
        if (lang === defaultLang) return key
        const textObj = texts[key]
        if (!textObj) return key
        return textObj[lang]
    }
    return { t }
}