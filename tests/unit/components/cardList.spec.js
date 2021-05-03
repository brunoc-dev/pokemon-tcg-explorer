import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import store from '@/store'
import CardList from '@/components/card/CardList.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('CardList.vue', () => {
  it('renders at least one card', () => {
    const wrapper = shallowMount(CardList, { store, localVue })
    const cardList = wrapper.vm.cardList
    expect(wrapper.findAll('[data-test="card"]')).to.lengthOf(cardList.length)
    expect(cardList).to.be.an('Array')
  })
})
