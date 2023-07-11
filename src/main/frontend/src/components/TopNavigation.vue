<template>
    <nav class="px-4 py-2 border-b ">
        <nav class="flex justify-end">

            <Menu v-slot="{ open }">
                <MenuButton as="template">
                    <md-standard-icon-button>
                        <md-icon>settings</md-icon>
                    </md-standard-icon-button>
                </MenuButton>
                <MenuItems v-show="open" class="absolute top-14 bg-white border rounded-md flex">
                    <MenuItem>
                        <light-dark-switch sync></light-dark-switch>
                    </MenuItem>
                </MenuItems>
            </Menu>
        </nav>
    </nav>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

</script>

<style scoped></style>