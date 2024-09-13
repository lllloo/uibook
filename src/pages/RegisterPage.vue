<script setup>
import BaseTextarea from '@/components/base/BaseTextarea.vue'

const data = reactive({
  radio: 'A',
  checkbox: ['A'],
  select: '',
  time: ''
})
</script>
<template>
  {{ data }}
  <div class="flex w-full flex-col">
    <BaseField
      label="標題"
      class="mb-4"
    >
      <BaseInput placeholder="請輸入" />
    </BaseField>

    <BaseField
      label="副標題"
      class="mb-4"
    >
      <BaseTextarea
        class="mr-2"
        placeholder="請輸入"
      />
    </BaseField>

    <BaseField
      label="單選"
      class="mb-4"
    >
      <label class="mr-2 inline-flex items-center">
        <BaseRadio
          v-model="data.radio"
          value="A"
        />
        <span class="ml-2">A Radio</span>
      </label>

      <label class="mr-2 inline-flex items-center">
        <BaseRadio
          v-model="data.radio"
          value="B"
        />
        <span class="ml-2">B Radio</span>
      </label>

      <label class="mr-2 inline-flex items-center">
        <BaseRadio
          v-model="data.radio"
          value="C"
        />
        <span class="ml-2">C Radio</span>
      </label>

      <label class="mr-2 inline-flex items-center">
        <BaseRadio
          v-model="data.radio"
          value="D"
        />
        <span class="ml-2">D Radio</span>
      </label>
    </BaseField>

    <BaseField
      label="多選"
      class="mb-4"
    >
      <label class="mr-2 inline-flex items-center">
        <BaseCheckbox
          v-model="data.checkbox"
          value="A"
        />
        <span class="ml-2">A checkbox</span>
      </label>

      <label class="mr-2 inline-flex items-center">
        <BaseCheckbox
          v-model="data.checkbox"
          value="B"
        />
        <span class="ml-2">B checkbox</span>
      </label>

      <label class="mr-2 inline-flex items-center">
        <BaseCheckbox
          v-model="data.checkbox"
          value="C"
        />
        <span class="ml-2">C checkbox</span>
      </label>

      <label class="mr-2 inline-flex items-center">
        <BaseCheckbox
          v-model="data.checkbox"
          value="D"
        />
        <span class="ml-2">D checkbox</span>
      </label>
    </BaseField>

    <BaseField
      label="下拉選項"
      class="mb-4"
    >
      <BaseSelect
        v-model="data.select"
        class="mr-2"
        placeholder="請輸入"
        :options="[
          { label: '選項1', value: '1' },
          { label: '選項2', value: '2' },
          { label: '選項3', value: '3' }
        ]"
      />
    </BaseField>

    <BaseField
      label="時間"
      class="mb-4"
    >
      <BaseDatepicker
        v-model="data.time"
        auto-apply
        :enable-time-picker="false"
        placeholder="請輸入"
        format="MM/dd/yyyy"
      />
    </BaseField>
  </div>
</template>
