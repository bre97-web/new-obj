<template>
    <div class="bg-[var(--md-color-surface)] relative">
        <div class="flex flex-col gap-4 max-w-md">
            <div class="flex items-center justify-between gap-2 h-16">
                <div
                    class="rounded-xl bg-[var(--md-sys-color-surface-container-low)] text-[var(--md-sys-color-on-surface)] hover:bg-[var(--md-sys-color-surface-container)] active:bg-[var(--md-sys-color-primary-container)] flex items-center justify-center w-full h-full">
                    <md-icon class="text-4xl font-[700]">arrow_downward</md-icon>
                </div>
                <div
                    class="rounded-xl bg-[var(--md-sys-color-surface-container-low)] text-[var(--md-sys-color-on-surface)] hover:bg-[var(--md-sys-color-surface-container)] active:bg-[var(--md-sys-color-error-container)] flex items-center justify-center w-full h-full">
                    <md-icon class="text-4xl font-[700]">arrow_upward</md-icon>
                </div>
            </div>
            <div>
                <input placeholder="收入支出" type="number" class="h-16 w-full font-bold text-4xl text-right" />
            </div>
            <div>
                <div class="flex flex-wrap gap-2">
                    <md-filled-tonal-icon-button toggle>
                        <md-icon>shopping_cart</md-icon>
                    </md-filled-tonal-icon-button>
                    <md-filled-tonal-icon-button toggle>
                        <md-icon>sports_esports</md-icon>
                    </md-filled-tonal-icon-button>
                    <md-filled-tonal-icon-button toggle>
                        <md-icon>toys_fan</md-icon>
                    </md-filled-tonal-icon-button>
                    <md-filled-tonal-icon-button toggle>
                        <md-icon>restaurant</md-icon>
                    </md-filled-tonal-icon-button>
                    <md-filled-tonal-icon-button toggle>
                        <md-icon>volunteer_activism</md-icon>
                    </md-filled-tonal-icon-button>
                    <md-filled-tonal-icon-button toggle>
                        <md-icon>family_restroom</md-icon>
                    </md-filled-tonal-icon-button>
                </div>
            </div>
            <div>
                <p>日期</p>
                <input type="date" class="w-full" />
            </div>
            <div class="w-full">
                <p>备注</p>
                <textarea class="w-full" />
            </div>
            <div class="flex flex-col">
                <md-tonal-button>保存</md-tonal-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>