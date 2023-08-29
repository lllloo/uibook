<template>
  <label
    class="base-radio"
    :class="{
      'base-input--small': small,
      'base-input--large': large,
      'is-checked': syncValue === value
    }"
  >
    <div class="input-wrap">
      <input
        v-model="syncValue"
        :value="value"
        type="radio"
      >
      <div class="radio" />
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
		type: String,
		default: ''
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

</script>

<style lang="scss" scoped>
.base-radio {
	display: flex;
	font-size: var(--input-font-size);

	&:not(.is-checked) {
		.input-wrap  {
			.radio {
				border: 2px solid #C8CACB;
				background: #fff;
				&:before {
					display: none;
				}
			}
		}
	}

	.input-wrap {
		display: flex;
		align-items: center;
		.radio {
			display: inline-flex;
			justify-content: center;
			align-items: center;
			width: 20px;
			height: 20px;
			margin-right: 5px;
			border: 2px solid var(--primary-color);
			overflow: hidden;
			border-radius: 50%;
			background: #fff;
			color: #fff;
			&:before {
				content: '';
				width: 10px;
				height: 10px;
				border-radius: 50%;
				background: var(--primary-color);
			}
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
