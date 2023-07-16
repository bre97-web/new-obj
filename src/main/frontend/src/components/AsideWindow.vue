<template>
    <aside v-show="props.isOpen" class="relative rounded-3xl bg-[var(--md-sys-color-surface-container-lowest)] p-4 mr-2 overflow-scroll w-64 max-w-screen-sm">
        <div
            class="relative"
        >
            <nav class="flex justify-end items-center gap-2 mb-2">
                <Close></Close>
            </nav>
            <slot></slot>
        </div>
    </aside>
</template>

<script setup lang="tsx">

const props = defineProps<{
    isOpen: boolean,
    setIsOpen: (e: boolean) => void
}>()

const NavButton = ({ icon, clickFn }: { icon: string, clickFn: () => void}) => (
    <md-standard-icon-button onClick={clickFn}>
        <md-icon>{ icon }</md-icon>
    </md-standard-icon-button>
)
const Close = () => <NavButton icon="close" clickFn={() => props.setIsOpen(false)}></NavButton>
</script>

<style scoped>

</style>