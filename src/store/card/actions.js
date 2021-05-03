import apiAccess from '@/api/service/apiAccess'

export async function getCardList ({ commit }, request) {
  const { data } = await apiAccess.fetch('cards', request)

  commit('updateCardList', data)
}

export async function getCard ({ commit }, id) {
  if (!id) return

  const { data } = await apiAccess.fetch('cards', { id })

  commit('updateCard', data)
}
