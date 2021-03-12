<template>
    <a @click="$emit('btn-click')" class="nav-link rounded-pill bg-light px-3 py-2 mx-2 text-dark" href="#">{{text}}</a>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String,
    },
}
</script>