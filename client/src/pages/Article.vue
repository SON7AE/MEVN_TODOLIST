<template>
    <div>
        <Card :article="article" @update="updateCard" @delete="moveToHome" />
    </div>
</template>

<script>
import axios from 'axios';
import Card from '~/components/Card.vue';

export default {
    name: 'Article',
    components: {
        Card,
    },
    data() {
        return {
            article: {
                id: null,
                content: null,
                createdAt: null,
            },
        };
    },
    created() {
        this.findOneArticle();
    },
    methods: {
        async findOneArticle() {
            const id = this.$route.params.id;
            const { data } = await axios.get(`http://localhost:3000/read/${id}`);
            this.article = { ...data };
        },
        updateCard({ content }) {
            this.article.content = content;
        },
        moveToHome() {
            this.$router.push({
                name: 'Home',
            });
        },
    },
};
</script>

<style></style>
