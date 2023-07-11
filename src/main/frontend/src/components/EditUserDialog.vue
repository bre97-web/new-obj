<template>
    <Teleport to="#app">
        <md-dialog :open="props.isOpenDialog">
            <h1 slot="header">编辑用户</h1>

            <div class="flex flex-col gap-2 mt-2">
                <md-outlined-text-field aria-disabled ref="id" :value="user.u_id" label="ID"></md-outlined-text-field>
                <md-outlined-text-field ref="name" :value="user.u_name" label="用户名"></md-outlined-text-field>
                <md-outlined-text-field ref="password" :value="user.u_pwd" label="密码"></md-outlined-text-field>
            </div>

            <md-text-button slot="footer" @click="props.closeDialog">返回</md-text-button>
            <md-filled-button slot="footer" @click="props.submitDialog({
                u_id: id.value,
                u_name: name.value,
                u_pwd: password.value
            })">提交</md-filled-button>
        </md-dialog>

    </Teleport>
</template>

<script setup lang="ts">
import { User } from '@/store/useUserStore';
import { ref } from 'vue';


const props = defineProps<{
    user: User,
    isOpenDialog: boolean,
    closeDialog: () => void,
    submitDialog: (e: User) => void,
}>()


const id = ref()
const name = ref()
const password = ref()
</script>

<style scoped>

</style>