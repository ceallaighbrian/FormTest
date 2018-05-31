import View from './view'
import { withFormik } from 'formik';

const createArray = () => {
  const array = []
  for(let i = 0; i < 500; i++) {
    array.push({
      description: `formik ${i}`,
      number: '2',
      unit: '4',
      quantity: '1000'
    })
  }
  return array
}

export default withFormik({
  mapPropsToValues: props => ({ items: createArray() }),
  // Submission handler
  handleSubmit: (
    values,
  ) => {
    console.log(values)
  },
})(View);