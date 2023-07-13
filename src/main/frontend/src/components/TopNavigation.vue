<template>
    <nav class="flex flex-row items-center justify-between px-4 py-2 bg-[var(--md-sys-color-background)]">
        <OpenNavigationRailButton></OpenNavigationRailButton>

        <Title></Title>
        
        <nav class="flex items-center justify-end">
            <Menu v-slot="{ open }">
                <MenuButton as="template">
                    <md-standard-icon-button>
                        <md-icon>settings</md-icon>
                    </md-standard-icon-button>
                </MenuButton>
                <MenuItems v-show="open" class="absolute top-14 border rounded-md flex">
                    <MenuItem>
                    </MenuItem>
                </MenuItems>
            </Menu>
        </nav>
    </nav>
</template>

<script setup lang="tsx">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import OpenNavigationRailButton from './OpenNavigationRailButton.vue';

const Title = () => (
    <div>
        <h1>记账小工具</h1>
    </div>
)
</script>

<style scoped></style>