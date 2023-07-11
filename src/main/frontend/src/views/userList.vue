<template>
    <div>
        <header>
            <Display msg="用户管理"></Display>
        </header>

        <main>

            <div class="flex items-center justify-between">
                <SearchInput></SearchInput>

                <RefreshButton></RefreshButton>

            </div>

            <table class="rounded-xl border overflow-clip w-full">
                <thead class="bg-gray-50 border-b">
                    <tr class="font-semibold">
                        <td>编号</td>
                        <td>用户名</td>
                        <td>密码</td>
                        <td>修改</td>
                    </tr>
                </thead>

                <tbody class="bg-gray-50/75 rounded-xl space-y-4">
                    <tr v-for="e in filter" :key="e.u_id">
                        <td>{{ e.u_id }}</td>
                        <td>{{ e.u_name }}</td>
                        <td>{{ e.u_pwd }}</td>
                        <td>
                            <div>
                                <md-standard-icon-button>
                                    <md-icon>edit</md-icon>
                                </md-standard-icon-button>

                                <md-standard-icon-button>
                                    <md-icon>delete</md-icon>
                                </md-standard-icon-button>
                            </div>
                        </td>
                    </tr>
                </tbody>

            </table>
        </main>
    </div>
</template>

<script setup lang="tsx">
import { Display } from '@/components/Text';
import { computed, onMounted, reactive, ref } from 'vue';
import { useUserStore } from '@/store/useUserStore'


const userStore = useUserStore()

/**
 * 获取用户数据
 */
onMounted(() => {
    userStore.request()
})

const pending = ref<boolean>(false)
const refresh = () => {
    pending.value = true
    userStore.refresh().then(e => {
        if(e) {
            console.log('refresh success');
        } else {
            console.log('refresh error');
        }
        pending.value = false
    })
}

/**
 * 不应该将userStore.getUsers直接输出到DOM，请经过filter方法
 */
const filter = computed(() => {
    return search.keyword.length !== 0 ? userStore.searchByAnyField(search.keyword) : userStore.getUsers
})

const search = reactive({
    keyword: ''
})



/**
 * TSX Area
 */
const SearchInput = () => (
    <input type="search" value={search.keyword} onInput={e => search.keyword = (e.target as HTMLInputElement).value} class="rounded-md px-4 py-2 outline-none focus:ring border dark:border-none hover:shadow-md" placeholder='Search'></input>
)

const RefreshButton = () => (
    <md-tonal-button disabled={pending.value} onClick={refresh}>
        {
            !pending.value ? 
                <md-icon slot="icon">refresh</md-icon> :
                <md-icon slot="icon" class="rotate">sync</md-icon>
        }
        刷新
    </md-tonal-button>
)
</script>

<style >
input {
    transition: all 0.15s;
}

td {
    @apply px-4 py-2;
}

</style>