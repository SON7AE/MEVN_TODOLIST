<template>
    <div>Test</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'App',
    created() {
        this.getArticle();
    },
    methods: {
        async getArticle() {
            const { data } = await axios.get('http://localhost:3000/read');
            console.log(data);
        },
    },
};
</script>

<style></style>
