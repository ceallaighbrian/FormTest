import React from 'react'
import { Form, Text, NestedField } from 'react-form';

const createArray = () => {
  const array = []
  for(let i = 0; i < 500; i++) {
    array.push({
      description: `react form ${i}`,
      number: '2',
      unit: '4',
      quantity: '1000'
    })
  }
  return array
}

const Item = () => (
  <div>
    <Text field="description" placeholder="description" />
    <Text field="number" placeholder="number"  />
    <Text field="unit" placeholder="unit" />
    <Text field="quantity" placeholder="quantity" />
  </div>
)

class ReactForm extends React.Component {

  constructor( props ) {
    super( props )
    this.state = {}
  }

  render() {
    return (
      <Form onSubmit={submittedValues => this.setState({ submittedValues })} defaultValues={{ items: createArray() }}>
        {formApi => (
          <form onSubmit={formApi.submitForm} id="form3">
            { formApi.values.items && formApi.values.items.map( ( item, i ) => (
              <div key={`item${i}`}>
                <NestedField field={['items', i]} id={`item-name-${i}`} component={Item}/>
                <button
                  onClick={() => formApi.removeValue('items', i)}
                  type="button"
                >
                  -
                </button>
              </div>
            ))}
            <button
              onClick={() => formApi.addValue('items', '')}
              type="button"
              className="mb-4 mr-4 btn btn-success">Add Item</button>
            <button type="submit">
              Submit
            </button>
          </form>
        )}
      </Form>
    );
  }
}

export default ReactForm