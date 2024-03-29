<template>
  <div
    ref="tooltipRef"
    class="base-tooltip"
    :class="{
      'base-tooltip--full': full
    }"
    :style="floatingStyles"
  >
    <div
      ref="arrowRef"
      class="base-tooltip__arrow"
      :class="{
        [placement]: true
      }"
      :style="{
        left: `${middlewareData?.arrow?.x}px`
      }"
    />
    <div class="base-tooltip__content">
      <slot />
    </div>
  </div>
</template>
<script setup>
import { useFloating, offset, flip, shift, arrow, autoUpdate } from '@floating-ui/vue'

const props = defineProps({
  reference: {
    type: Object,
    required: false,
    default: null
  },
  full: {
    type: Boolean,
    default: false
  }
})

const placementRef = computed(() => {
  if (!props.reference) return tooltipRef.value?.parentElement
  return props.reference
})
const tooltipRef = ref()
const arrowRef = ref()

const { floatingStyles, middlewareData, placement } = useFloating(placementRef, tooltipRef, {
  placement: 'bottom',
  middleware: [offset(10), flip(), shift(), arrow({ element: arrowRef })],
  whileElementsMounted: autoUpdate
})
</script>
<style lang="scss" scoped>
.base-tooltip {
  background: #fff;
  color: #000;
  width: max-content;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  &--full {
    width: 100%;
  }
  &__arrow {
    position: absolute;
    width: 10px;
    height: 10px;
    z-index: 1;
    background: #fff;
    border: 1px solid var(--base-border-color);
    margin-left: -5px;
    &.top {
      bottom: 0;
      transform: rotate(45deg) translateY(6px);
      border-top-color: transparent;
      border-left-color: transparent;
    }
    &.bottom {
      top: 0;
      transform: rotate(45deg) translateY(-6px);
      border-bottom-color: transparent;
      border-right-color: transparent;
    }
  }
  &__content {
    border-radius: 5px;
    color: #000;
    padding: var(--base-padding) calc(var(--base-padding) * 2);
    z-index: 1;
    border: 1px solid var(--base-border-color);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
    overflow: hidden;
  }
}
</style>
