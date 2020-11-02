import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import MyButton from '../components/MyButton.vue'
import Nav from '../components/Header/Nav.vue'

export default {
  component: MyButton,
  title: 'Button'
}

export const withText = () => ({
  components: { MyButton },
  template: '<my-button @click="action">Hello Button</my-button>',
  methods: { action: action('clicked') }
})

export const withJSX = () => ({
  render() {
    return <MyButton onClick={linkTo('Button', 'With Some Emoji')}>With JSX</MyButton>;
  }
})

export const withSomeEmoji = () => ({
  components: { MyButton },
  template: '<my-button>😀 😎 👍 💯</my-button>'
})

export const withNavBar = () => ({
  components: { Nav },
  template: '<Nav></Nav>'
})

export const widthSomething = () => ({})
