<template>
  <label
    class="base-radio"
    :class="{
      'base-radio--small': small,
      'base-radio--large': large,
      'out-line': outLine,
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
	small: {
		type: Boolean,
		default: false,
	},
	large: {
		type: Boolean,
		default: false,
	},
	outLine: {
		type: Boolean,
		default: false,
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
	display: inline-flex;
	font-size: var(--input-font-size);

	height: var(--input-height);

	&--small {
		--input-height: var(--input-small-height);
	}

	&--large {
		--input-height: var(--input-large-height);
	}
	&.out-line {
		border-radius: var(--base-border-radius);
		padding: 0 10px;
		border: 1px solid var(--primary-color);
	}

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
	.label {
		display: flex;
		align-items: center;
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
