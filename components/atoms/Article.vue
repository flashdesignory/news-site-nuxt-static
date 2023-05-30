<script lang="js">
import layoutStyles from "news-site-css/dist/layout.module.css"
import articleStyles from "news-site-css/dist/article.module.css";

export default {
    props: {
        data: Object,
    },
    data() {
        return {
            layoutStyles,
            articleStyles
        }
    }
}
</script>

<template>
    <article :class="[
        layoutStyles.column,
        layoutStyles[data.class],
        articleStyles.article
    ]">
        <ArticleHeader :headerClass="articleStyles['article-header']" :text="data.header" :link="data.url" />
        <section :class="articleStyles['article-body']">
            <ArticleImage :imageClass="articleStyles['article-image-container']" :image="data.image" :meta="data.meta" />
            <ArticleText :textClass="[
                articleStyles['article-title'],
                'truncate-singleline'
            ]" :text="data.title" type="h3" />
            <ArticleContent :type="data.type" :content="data.content" :display="data.display" />
        </section>
    </article>
</template>