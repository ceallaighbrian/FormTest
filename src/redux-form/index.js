import View from './view'
import { reduxForm } from 'redux-form'

const createArray = () => {
  const array = []
  for(let i = 0; i < 500; i++) {
    array.push({
      description: `reduxform ${i}`,
      number: '2',
      unit: '4',
      quantity: '1000'
    })
  }
  return array
}

export default reduxForm({
  form: 'reduxFromTest',
  initialValues: {
    items: createArray(),
  },
  enableReinitialize: true,
})(View);