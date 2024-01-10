<script setup>
const data = reactive({
  account: '',
  password: ''
})
const login = () => {
  basePost('/login', data).then(res => {
    console.log(res);
  })
}
</script>
<template>
  <form class="flex w-full flex-col p-5">
    <BaseField label="帳號">
      <BaseInput
        v-model="data.account"
        name="account"
        placeholder="請輸入"
      />
    </BaseField>
    <BaseField label="密碼">
      <BaseInput
        v-model="data.password"
        name="password"
        type="password"
        placeholder="請輸入"
      />
    </BaseField>
    <BaseButton
      class="mt-5"
      @click="login"
    >
      登入
    </BaseButton>
  </form>
</template>
