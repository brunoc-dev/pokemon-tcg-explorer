export function cardList (state) {
  return state.cardList.sort((a, b) => a.name.localeCompare(b.name))
}

export function card (state) {
  return state.card
}
