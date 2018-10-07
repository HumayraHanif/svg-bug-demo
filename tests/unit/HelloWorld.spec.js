import HelloWorld from '@/components/HelloWorld'
import { mount } from 'vue-test-utils'


describe('HelloWorld', () => {
  let wrapper = null // set in beforeEach
  const msg = 'message'
  beforeEach(() => {
    wrapper = mount(HelloWorld, {
      propsData: {
        msg
      }
    })
  })

  test('Test test', () => {
    const actual = wrapper.msg
    expect(actual).toBe(msg)
  })
})
