import LanguageController, {LanguageEnum, LanguagePointers} from "../../../../vendor/Language/LanguageController";

const ru = {
    DEFAULT_PAGE_TITLE: "DevEasy | TechLead Разработчик",
    DEFAULT_PAGE_DESC: "TechLead Frontend Разработчик расскажет Вам про нюансы разработки из жизни",
}

const pointers:LanguagePointers<typeof ru> = {
    [LanguageEnum.RU]: ru
}

const MyDocumentLang = new LanguageController<typeof ru>(pointers)

export default MyDocumentLang