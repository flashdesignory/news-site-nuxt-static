// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
    ssr: false,
    css: ["news-site-css/dist/variables.css", "news-site-css/dist/global.css", "news-site-css/dist/a11y.css", "news-site-css/dist/icons.css", "news-site-css/dist/text.css"],
    components: ["~/components", "~/components/assets", "~/components/atoms", "~/components/molecules"],
    // if below solution is used, the app/router.options.ts file is not needed.
    // note: below will generate additional html files in the output.
    /* hooks: {
        "pages:extend"(pages) {
            ["home", "us", "world", "politics", "business", "opinion", "health"].map((name) => {
                pages.push({
                    name,
                    path: name === "home" ? "/" : `/${name}`,
                    file: "~/components/molecules/Page.vue",
                });
            });
        },
    }, */
    nitro: {
        output: {
            publicDir: path.join(__dirname, "docs"),
        },
    },
    app: {
        head: {
            title: "The Daily Broadcast",
            htmlAttrs: {
                lang: "en",
            },
            meta: [
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                {
                    hid: "description",
                    name: "description",
                    content: "A news site developed with Nuxt.",
                },
            ],
        },
    },
    $production: {
        app: {
            baseURL:"/news-site-nuxt-static",
        },
    },
});
