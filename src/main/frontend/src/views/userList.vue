<template>
    <div>
        <header>
            <Display msg="用户管理"></Display>
        </header>

        <main class="">

            <SearchInput></SearchInput>

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
                    <tr v-for="e in data" :key="e.u_id">
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
import { ref } from 'vue';

type User = {
    u_id: string,
    u_name: string,
    u_pwd: string
}

/**
 * 从服务器获取的数据，它不应该直接输出到DOM，请经过filter方法
 */
const data = ref<User[]>([
    {
        u_id: '00001 样例',
        u_name: 'name 1 样例',
        u_pwd: '000ppp 样例'
    }
])
// const filter = () => {
//     data.value.filter(e => e.u_id.includes())
// }

// const search = reactive({
//     keyword
// })
const SearchInput = () => (
    <input type="search" class="rounded-md px-4 py-2 outline-none focus:ring border dark:border-none hover:shadow-md" placeholder='Search'></input>
)
</script>

<style scoped>
input {
    transition: all 0.15s;
}

td {
    @apply px-4 py-2;
}
</style>