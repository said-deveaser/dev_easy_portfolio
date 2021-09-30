
export enum LanguageEnum {
    RU = "RU"
}

type LanguagePointer<value = string> = {
    [Key:string]:value
}

export type LanguagePointers<LP = LanguagePointer> = {
    [K in LanguageEnum]: LP
}

class LanguageController<LP> {
    languagePointerWrapper: LanguagePointers<LP>;

    constructor(languagePointerWrapper: LanguagePointers<LP>) {
        this.languagePointerWrapper = languagePointerWrapper
    }

    getText(key: keyof LP) {
        const defaultLang = process.env.DEFAULT_LANG as LanguageEnum
        const lang:LanguageEnum = Object.values(LanguageEnum).includes(defaultLang) ?  defaultLang : LanguageEnum.RU
        return this.languagePointerWrapper[lang][key]
    }
}

export default LanguageController