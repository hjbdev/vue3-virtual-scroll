<template>
    <VirtualScrollList class="m-6 p-6 overflow-y-auto bg-pink-50 max-w-lg min-h-64 h-64">
        <VirtualScrollItem v-for="i in 90" :key="`item${i}`" class="bg-white border-b p-2 last:border-b-0">
            <div>Hello</div>
        </VirtualScrollItem>
    </VirtualScrollList>
</template>
