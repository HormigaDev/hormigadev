import { ui, defaultLang } from "./ui";

type UiKeys = keyof (typeof ui)[typeof defaultLang];

export function getLangFromUrl(url: URL): string {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang;
  return defaultLang;
}

export function useTranslations(lang: string) {
  return function t(key: UiKeys): string {
    const translations = ui[lang as keyof typeof ui];
    if (translations && key in translations) {
      return translations[key as keyof typeof translations];
    }
    return ui[defaultLang][key];
  };
}
