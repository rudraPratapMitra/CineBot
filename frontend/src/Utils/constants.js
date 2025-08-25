export const getAvatarUrl = (name) =>`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=FF0000&color=fff&bold=true`;
export const LOGO="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
  },
};
export const IMAGE_URL="https://image.tmdb.org/t/p/w500/" 
export const NETFLIX_COVER="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"

export const SUPPORTED_LANGUAGES = [
  { value: "en", name: "English", placeholder: "What would you like to watch today?", btn_txt: "Search" },
  { value: "hi", name: "Hindi", placeholder: "आज आप क्या देखना चाहेंगे?", btn_txt: "खोजें" },
  { value: "ch", name: "Chinese", placeholder: "今天你想看什么？", btn_txt: "搜索" },
  { value: "es", name: "Spanish", placeholder: "¿Qué te gustaría ver hoy?", btn_txt: "Buscar" },
];




