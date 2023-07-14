<template>
    <div>
        <header>
            <Display msg="实验室"></Display>
            <p>即将推出的内容将在这里呈现</p>
        </header>

        <main>
            <section>
                <Headline msg="记账单"></Headline>
                <div class="space-y-8 mt-8">
                    <div class="card">
                        <!-- 表头 -->
                        <div class="max-w-md">
                            <div>
                                <h1 class="font-bold">Time</h1>
                                <md-divider></md-divider>
                            </div>
                        </div>
                        <!-- 单条记录 -->
                        <div class="max-w-md">
                            <div class="bg-blue-200 rounded-xl px-4 py-2">
                                <div class="flex items-center justify-between">
                                    <!-- Avatar aboue-->
                                    <div class="flex gap-2">
                                        <div class="w-12 h-12 border rounded-full bg-red-500"></div>
                                        <div class="flex flex-col">
                                            <h1 class="font-medium">Type</h1>
                                            <p>Time</p>
                                        </div>
                                    </div>
                                    <!-- Money -->
                                    <div>
                                        <h1 class="font-bold">+666</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 单条记录 -->
                        <div class="max-w-md">
                            <div class="bg-blue-200 rounded-xl px-4 py-2">
                                <div class="flex items-center justify-between">
                                    <!-- Avatar aboue-->
                                    <div class="flex gap-2">
                                        <div class="w-12 h-12 border rounded-full bg-red-500"></div>
                                        <div class="flex flex-col">
                                            <h1 class="font-medium">Type</h1>
                                            <p>Time</p>
                                        </div>
                                    </div>
                                    <!-- Money -->
                                    <div>
                                        <h1 class="font-bold">-666</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="flex flex-col gap-4 max-w-md">
                            <div class="flex items-center justify-between gap-2 h-16">
                                <div class="rounded-xl bg-blue-100 hover:bg-blue-200 active:bg-blue-300 focus:bg-blue-500 flex items-center justify-center w-full h-full">
                                    <md-icon class="text-4xl font-[700]">arrow_downward</md-icon>
                                </div>
                                <div class="rounded-xl bg-red-100 hover:bg-red-200 active:bg-red-300 focus:bg-red-500 flex items-center justify-center w-full h-full">
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
                </div>
            </section>

            <section>
                <Headline msg="主题"></Headline>
            </section>
        </main>
    </div>
</template>

<script setup lang="ts">
import { Display, Headline } from '@/components/Text';
</script>

<style scoped>
section .card {
    @apply relative border rounded-xl p-4 bg-[var(--md-sys-color-container)] space-y-2;
}
</style>