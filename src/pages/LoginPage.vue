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
</script>
<template>
  <form class="flex w-full flex-col p-5">
    <BaseField
      v-slot="{ field }"
      v-model="data.account"
      label="帳號"
      name="account"
      class="mb-4"
    >
      <BaseInput
        v-bind="field"
        placeholder="請輸入"
      />
    </BaseField>

    <BaseField
      v-slot="{ field }"
      v-model="data.password"
      label="密碼"
      name="password"
      class="mb-4"
    >
      <BaseInput
        v-bind="field"
        type="password"
        placeholder="請輸入"
      />
    </BaseField>

    <BaseField
      v-slot="{ field }"
      v-model="data.gender"
      label="性別"
      name="gender"
      class="mb-4"
    >
      <div>
        <label class="inline-flex items-center">
          <BaseRadio
            v-bind="field"
            value="M"
          />
          <span class="ml-2"> 男 </span>
        </label>
        <label class="ml-4 inline-flex items-center">
          <BaseRadio
            v-bind="field"
            value="F"
          />
          <span class="ml-2"> 女 </span>
        </label>
      </div>
    </BaseField>

    <BaseField
      v-slot="{ field }"
      v-model="data.check"
      name="check"
    >
      <label class="flex items-center">
        <BaseCheckbox v-bind="field" />
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
