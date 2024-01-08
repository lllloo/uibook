<script setup></script>
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
  </div>
</template>
