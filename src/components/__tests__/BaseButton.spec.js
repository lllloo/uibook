import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseButton from '@/components/base/BaseButton.vue'

describe('button', () => {
  it('renders properly', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'button'
      }
    })
    expect(wrapper.text()).toContain('button')
  })
})
