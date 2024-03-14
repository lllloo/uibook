<script setup>
import { z } from 'zod'

const schema = z.object({
  account: z.string().min(1, { message: '必填' }),
  password: z.string().min(1, { message: '必填' }),
})

const data = reactive({
  account: '',
  password: '',
})
const error = ref({})
const login = () => {
  const result = schema.safeParse(data);
  if (!result.success) {
    error.value = result.error.format();
    return;
  }
  error.value = {}
  basePost('/login', data).then((res) => {
    console.log(res)
  })
}
</script>
<template>
  <form class="flex w-full flex-col p-5">
    {{ error }}
    <BaseField
      label="帳號"
      :error="error?.account?._errors[0]"
    >
      <BaseInput
        v-model="data.account"
        name="account"
        placeholder="請輸入"
      />
    </BaseField>
    <BaseField
      label="密碼"
      :error="error?.password?._errors[0]"
    >
      <BaseInput
        v-model="data.password"
        name="password"
        type="password"
        placeholder="請輸入"
      />
    </BaseField>
    <BaseButton
      class="mt-10"
      @click="login"
    >
      登入
    </BaseButton>
  </form>
</template>
