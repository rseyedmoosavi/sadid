import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'
import fa from 'vuetify/lib/locale/fa'
import en from 'vuetify/lib/locale/en'
import ar from 'vuetify/lib/locale/ar'
Vue.use(Vuetify);


export default new Vuetify({
    rtl:true,
    lang: {
        locales: {fa, en, ar},
        current: 'fa',
    },
    theme: {
        light:true,
        themes: {
            light: {
                primary: '#b108ff',
                secondary: '#00adff',
                accent: '#1eff00',
                error: '#ff0014',
            },
            dark: {
                primary: colors.blue.lighten3,
            },
        },
    },
});
