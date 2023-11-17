import BaseButton from '@/components/base/BaseButton.vue'

describe('<BaseButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(BaseButton, {
      slots: {
        default: 'Hello there!'
      }
    })
    cy.contains('Hello there!').compareSnapshot('base-button')
  })
})
