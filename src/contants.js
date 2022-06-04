const listUnits = [
  { id: 1, text: 'km' },
  { id: 2, text: 'hm' },
  { id: 3, text: 'dam' },
  { id: 4, text: 'm' },
  { id: 5, text: 'dm' },
  { id: 6, text: 'cm' },
  { id: 7, text: 'mm' }
]

const idKm = listUnits.find(item => item.text === 'km').id

export { listUnits, idKm };