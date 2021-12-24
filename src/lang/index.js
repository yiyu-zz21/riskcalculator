import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    legacy: true,
    locale: localStorage.getItem('lang') || 'zh',
    messages: {
        zh: require('./zh.js'),
        en: require('./en.js')
    },
})

export default i18n;