<template>
    <div
        ref="item"
        :style="{
            height: height ? height + 'px' : 'auto',
        }"
    >
        <template v-if="isVisible">
            <slot />
        </template>
    </div>
</template>
<script setup>
const item = ref(null);
const isVisible = ref(false);
const height = ref(0);

useIntersectionObserver(item, ([{ isIntersecting }]) => {
    isVisible.value = isIntersecting;
});

watch(isVisible, (v) => {
    if (!v) {
        const { height: h } = item.value?.getBoundingClientRect();
        if (h) {
            height.value = h;
        }
    } else {
        height.value = null;
    }
});
</script>
