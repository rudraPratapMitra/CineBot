import logoImage from '../assets/cinebot.png';
export const getAvatarUrl = (name) =>`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=FF0000&color=fff&bold=true`;
export const LOGO=logoImage
export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
  },
};
export const IMAGE_URL="https://image.tmdb.org/t/p/w500/" 
export const NETFLIX_COVER="https://payload.cargocollective.com/1/11/367710/13568488/CINEMA-CLASSICS-POSTER_RUTGERS_3600.jpg"

export const SUPPORTED_LANGUAGES = [
  { value: "en", name: "English", placeholder: "What would you like to watch today?", btn_txt: "Search" },
  { value: "hi", name: "Hindi", placeholder: "आज आप क्या देखना चाहेंगे?", btn_txt: "खोजें" },
  { value: "ch", name: "Chinese", placeholder: "今天你想看什么？", btn_txt: "搜索" },
  { value: "es", name: "Spanish", placeholder: "¿Qué te gustaría ver hoy?", btn_txt: "Buscar" },
];




