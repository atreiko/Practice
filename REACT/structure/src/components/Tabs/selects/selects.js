// ! MAIN TABS SELECTS ------>>

export const sort = [
  { value: 'name', label: 'by Name' },
  { value: 'date', label: 'by Date' },
  { value: 'lowPrice', label: 'sort by Low price' },
  { value: 'highPrice', label: 'sort by High price' }
]

export const choseStrength = [
  { value: 'all', label: 'All' },
  { value: 'light', label: 'Light' },
  { value: 'middle', label: 'Middle' },
  { value: 'hard', label: 'Hard' },
]

export const sortByTag = [
  { value: 'all', label: 'All' },
  { value: 'citrus', label: 'Citrus' },
  { value: 'berries', label: 'Berries' },
  { value: 'sweet', label: 'Sweet' },
  { value: 'sour', label: 'Sour' },
  { value: 'sweetandsour', label: 'Sweet And Sour' },
  { value: 'spicy', label: 'Spicy' },
]

export const packing50g1000g = [
  { value: 'all', label: 'All' },
  { value: '50', label: '50' },
  { value: '1000', label: '1000' },
]

export const coalForm = [
  { value: 'all', label: 'All' },
  { value: 'half', label: 'Half' },
  { value: 'flat', label: 'Flat' },
]

export const mouthpiecesFrom = [
  { value: 'all', label: 'All' },
  { value: 'cone', label: 'Cone' },
  { value: 'step', label: 'Step' },
]

export const mouthpiecesColor = [
  { value: 'all', label: 'All' },
  { value: 'transparent', label: 'Transparent' },
  { value: 'black', label: 'Black' },
  { value: 'multicolored', label: 'Multicolored' },
]

export const hookahsCount = [
  { value: 'all', label: 'All' },
  { value: '1', label: '1 available' },
  { value: '5', label: '5 available' },
  { value: '10', label: '10 available' },
  { value: '15', label: '15 available' },
  { value: '20', label: '20 available' },
]

export const hookahBrands = [
  { value: 'all', label: 'All' },
  { value: 'amy', label: 'Amy' },
  { value: 'karma', label: 'Karma' },
  { value: 'hoob', label: 'Hoob' },
  { value: 'wookah', label: 'Wookah' },
  { value: 'khalilMamoon', label: 'Khali lMamoon' },
]

export const hookahSet = [
  { value: 'all', label: 'All' },
  { value: 'fullSet', label: 'Full set' },
  { value: 'notСompleteSet', label: 'Not complete set' },
  { value: 'withoutFlask', label: 'Without flask' },
]

// ! ACCESSORY TABS SELECTS ------>>

export const bowlForm = [
  { value: 'all', label: 'All' },
  { value: 'classic', label: 'Classic' },
  { value: 'phanel', label: 'Phanel' },
]

export const amountOfRawMaterials = [
  { value: 'all', label: 'All' },
  { value: 'lessThan20', label: 'Less than 20' },
  { value: 'moreThan20', label: 'More than 20' },
]

export const flaskBrands = [
  { value: 'all', label: 'All' },
  { value: 'gustoBowls', label: 'Gusto Bowls' },
  { value: 'amy', label: 'Amy' },
  { value: 'kaya', label: 'Kaya' },
]

export const flaskInnerDiameter = [
  { value: 'all', label: 'All' },
  { value: '4.3', label: '4.3' },
  { value: '4.4', label: '4.4' },
  { value: '4.5', label: '4.5' },
  { value: '4.6', label: '4.6' },
  { value: '4.7', label: '4.7' },
  { value: '5.2', label: '5.2' },
]

export const flaskExternalDiameter = [
  { value: 'all', label: 'All' },
  { value: '6.5', label: '6.5' },
  { value: '5.5', label: '5.5' },
  { value: '5.4', label: '5.4' },
  { value: '5.3', label: '5.3' },
  { value: '5.2', label: '5.2' },
  { value: '5', label: '5' },
]

export const connectionType = [
  { value: 'all', label: 'All' },
  { value: 'forCarving', label: 'For Carving' },
  { value: 'forClick', label: 'For Click' },
  { value: 'withAClick', label: 'With A Click' },
]

export const heatEquipment = [
  { value: 'all', label: 'All' },
  { value: 'kalouds', label: 'Kalouds' },
  { value: 'baskets', label: 'Baskets' },
  { value: 'stoves', label: 'Stoves' },
]

export const hosesSet = [
  { value: 'all', label: 'All' },
  { value: 'fullSet', label: 'Full Set' },
  { value: 'mouthpiece', label: 'Mouthpiece' },
  { value: 'hose', label: 'Hose' },
  { value: 'adapter', label: 'Adapter' },
  { value: 'cooler', label: 'Cooler' },
]

export const ruffType = [
  { value: 'all', label: 'All' },
  { value: 'forHookahFrame', label: 'For Hookah Frame' },
  { value: 'forHookahFlask', label: 'For Hookah Flask' },
]

export const rubberType = [
  { value: 'all', label: 'All' },
  { value: 'bowlSeal', label: 'Bowl Seal' },
  { value: 'flaskSeal', label: 'Flask Seal' },
  { value: 'frameSeal', label: 'Frame Seal' },
  { value: 'handleForKaloud', label: 'Handle For Kaloud' },
]

// ! SELECTS STYLES ------>>

export const customStyles = {
    option: (provided, state) => ({
      ...provided,
      display: 'flex',
      borderBottom: '1px dotted rgb(225, 243, 250)',
      color: state.isSelected ? 'red' : 'black',
      padding: 10,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 300,
      display: 'flex',
      justifyContent: 'space-between',
      boxShadow: '1px 1px 6px rgba(0, 0, 0, 0.1)',
      // marginRight: '.3rem',
      padding: '0 .5rem'
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
}