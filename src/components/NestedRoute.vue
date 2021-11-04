<template>
    <div>
        Nested Route
        <div class="username">
            {{ username }}
        </div>
    </div>
</template>

<script>
import { bustCache } from '@/router/bust-cache.js';
export default {
    name: 'NestedRoute',

    beforeRouteLeave(to, from, next) {
        bustCache();
        next();
    },

    computed: {
        username() {
            return this.$route?.params?.username;
        },
    },
};
</script>
