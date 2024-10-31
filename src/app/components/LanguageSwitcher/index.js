"use client";
import { useLocale } from "next-intl";

// Constants
import { useRouter, multiLang } from "@/i18n/routing";

// CSS
import classes from "../../styles/index.module.scss";

const LanguageSwitcher = () => {
    const currentLocale = useLocale();
    const router = useRouter()

    const handleChangeEvent = (e) =>{ 
        const { value } = e.target;
        router.replace(`${value}`);

    };  

    return (
        <select className={classes.langDropdown} defaultValue={currentLocale} onChange={handleChangeEvent}>
            {multiLang.map(lang => <option key={lang.value} value={lang.value}>{lang.label}</option>)}
        </select>
    );
};

export default LanguageSwitcher;