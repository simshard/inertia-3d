import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp,Link,Head } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import Layout from "./Shared/Layout.vue";

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Inertia';

createInertiaApp({
    title: (title) => `${appName} - ${title}`,
     // resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),

      resolve: async name => {
        const page = await resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob("./Pages/**/*.vue"));
        page.default.layout ??= Layout;
        return page;
      },

 
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .component('Link',Link)
            .component('Head',Head)
            .mount(el);
    },
    progress: {
        color: '#FF0000',
        showSpinner:true,
        includeCSS: true,
    },
});
