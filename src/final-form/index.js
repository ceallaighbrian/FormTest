// Higher Order Component
import React from 'react'
import { Form, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'

const createArray = () => {
  const array = []
  for(let i = 0; i < 50; i++) {
    array.push({
      description: `finalform ${i}`,
      number: '2',
      unit: '4',
      quantity: '1000'
    })
  }
  return array
}

const onSubmit = async values => {
  window.alert(JSON.stringify(values, 0, 2))
}

class FinalForm extends  React.Component {
  state = { items: {} }
  componentDidMount() {
    this.setState({ items: createArray() })
  }
  render() {
    return (
      <Form
        onSubmit={onSubmit}
        mutators={{
          ...arrayMutators
        }}
        initialValues={{ items: this.state.items }}
        render={({
                   handleSubmit,
                   mutators: { push },
          values,
                 }) => {
          return (
            <form onSubmit={handleSubmit}>
              <FieldArray name="items">
                {({ fields }) =>
                  fields.map((item, index) => (
                    <div key={item}>
                      <Field
                        name={`${item}.description`}
                        component="input"
                        placeholder="description"
                      />
                      <Field
                        name={`${item}.number`}
                        component="input"
                        placeholder="number"
                      />
                      <Field
                        name={`${item}.unit`}
                        component="input"
                        placeholder="unit"
                      />
                      <Field
                        name={`${item}.quantity`}
                        component="input"
                        placeholder="quantity"
                      />
                      <button type="button" onClick={() => fields.remove(index)}>
                        -
                      </button>
                    </div>
                  ))}
              </FieldArray>

              <button type="button" onClick={() => push('items', {
                description: '',
                number: '',
                unit: '',
                quantity: ''
              })}>
                Add item
              </button>
              <button type="submit">
                Submit
              </button>
            </form>
          )
        }}
      />
    )
  }
}

export default FinalForm