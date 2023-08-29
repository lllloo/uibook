<template>
  <label
    class="base-checkout"
    :class="{
      'base-input--small': small,
      'base-input--large': large,
      'is-checked': type === 'boolean' ? syncValue : syncValue.includes(value)
    }"
  >
    <div class="input-wrap">
      <input
        v-model="syncValue"
        :value="value || null"
        type="checkbox"
      >
      <div class="checkbox">
        <i class="fas fa-check" />
      </div>
    </div>
    <div class="label">
      {{ label }}
    </div>
  </label>
</template>

<script setup>
const props = defineProps({
	label: {
		type: String,
		default: ''
	},
	modelValue: {
		type: [Array, Boolean],
		default: false
	},
	value: {
		type: String,
		default: ''
	},
})
const emit = defineEmits(['update:modelValue'])
const syncValue = computed({
	get: () => props.modelValue,
	set: (val) => emit('update:modelValue', val)
})

var type = ref(typeof props.modelValue)

</script>

<style lang="scss" scoped>
.base-checkout {
	display: flex;
	font-size: var(--input-font-size);

	&:not(.is-checked) {
		.input-wrap  {
			.checkbox {
				border: 1px solid #C8CACB;
				background: #fff;
				>svg {
					display: none;
					
				}
			}
		}
	}

	.input-wrap {
		display: flex;
		align-items: center;
		.checkbox {
			display: inline-flex;
			justify-content: center;
			align-items: center;
			width: 20px;
			height: 20px;
			margin-right: 5px;
			border: 1px solid var(--primary-color);
			overflow: hidden;
			border-radius: var(--base-border-radius);
			background: var(--primary-color);
			color: #fff;
		}
	}

	input {
		opacity: 0;
		outline: none;
		position: absolute;
		margin: 0;
		width: 0;
		height: 0;
		z-index: -1;
	}
}
</style>
