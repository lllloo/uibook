<script setup>
const data = reactive({
  radio: 'A',
  checkbox: ['A']
})
</script>
<template>
  <div class="flex w-full flex-col">
    <BaseField label="標題">
      <BaseInput
        label="標題"
        placeholder="請輸入"
      />
    </BaseField>
    <BaseField label="副標題">
      <BaseInput
        label="副標題"
        placeholder="請輸入"
      />
    </BaseField>
    <BaseField label="次標題">
      <BaseInput
        class="mr-2"
        label="次標題1"
        placeholder="請輸入"
      />
      <BaseInput
        label="次標題2"
        placeholder="請輸入"
      />
    </BaseField>

    <BaseField label="單選">
      <BaseRadio
        v-model="data.radio"
        label="A Radio"
        value="A"
      />
      <BaseRadio
        v-model="data.radio"
        class="mr-2"
        label="B Radio"
        value="B"
      />
      <BaseRadio
        v-model="data.radio"
        class="mr-2"
        label="C Radio"
        value="C"
        is-button
      />
      <BaseRadio
        v-model="data.radio"
        class="mr-2"
        label="D Radio"
        value="D"
        is-button
      />
    </BaseField>

    <BaseField label="多選">
      <BaseCheckbox
        v-model="data.checkbox"
        label="A Checkbox"
        value="A"
      />
      <BaseCheckbox
        v-model="data.checkbox"
        class="mr-2"
        label="B Checkbox"
        value="B"
      />
      <BaseCheckbox
        v-model="data.checkbox"
        class="mr-2"
        label="C Checkbox"
        value="C"
        is-button
      />
      <BaseCheckbox
        v-model="data.checkbox"
        class="mr-2"
        label="D Checkbox"
        value="D"
        is-button
      />
    </BaseField>
  </div>
</template>
