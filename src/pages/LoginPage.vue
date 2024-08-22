<script setup>
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'

const schema = z.object({
  account: z.string().min(1, { message: '必填' }).default(''),
  password: z.string().min(1, { message: '必填' }).default(''),
  gender: z.enum(['M', 'F'], { message: '必填' }),
  check: z
    .boolean()
    .refine((value) => value === true, '必填')
    .default(false)
})

const data = reactive({
  account: '',
  password: '',
  gender: '',
  check: false
})

const { handleSubmit, resetForm } = useForm({
  validationSchema: toTypedSchema(schema)
})

const login = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2))
})

const error = ref({})
</script>
<template>
  <form class="flex w-full flex-col p-5">
    <BaseField
      label="帳號"
      name="account"
      v-model="data.account"
      v-slot="{ field }"
      class="mb-4"
    >
      <BaseInput
        v-model="field.value"
        :name="field.name"
        placeholder="請輸入"
      />
    </BaseField>
    <BaseField
      label="密碼"
      name="password"
      v-model="data.password"
      v-slot="{ field }"
      class="mb-4"
    >
      <BaseInput
        v-model="field.value"
        :name="field.name"
        type="password"
        placeholder="請輸入"
      />
    </BaseField>

    <BaseField
      label="性別"
      name="gender"
      v-model="data.gender"
      v-slot="{ field }"
      class="mb-4"
    >
      <label class="inline-flex items-center">
        <BaseRadio
          v-model="field.value"
          :name="field.name"
          value="M"
        />
        <span class="ml-2"> 男 </span>
      </label>
      <label class="ml-4 inline-flex items-center">
        <BaseRadio
          v-model="field.value"
          :name="field.name"
          value="F"
        />
        <span class="ml-2"> 女 </span>
      </label>
    </BaseField>

    <BaseField
      name="check"
      v-model="data.check"
      v-slot="{ field }"
    >
      <label class="flex items-center">
        <BaseCheckbox
          v-model="field.value"
          :name="field.name"
        />
        <span class="ml-2"> 同意會員規則 </span>
      </label>
    </BaseField>

    <BaseButton
      class="mb-2 mt-10"
      @click="login"
    >
      登入
    </BaseButton>
    <BaseButton
      outline
      @click="resetForm"
    >
      取消
    </BaseButton>
  </form>
</template>
