<template>
    <div>{{ path }}</div>
</template>
<script>
export default {
    data() {
        return {
            path: '',
        };
    },
    created() {
        this.path = this.$route.path;
    },
};
</script>
