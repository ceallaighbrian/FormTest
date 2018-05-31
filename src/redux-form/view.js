// Higher Order Component
import React from 'react';
import { FieldArray, Field } from 'redux-form'

const renderItems = ({ fields }) => {
  return (
    <div>
    {fields.map((item, index) => {
      return (
      <div>
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
          placeholder="unit"
        />
        <button
          type="button"
          onClick={() => fields.remove(index)}
        >
          -
        </button>
    </div>
    )})}
      <button type="button" onClick={() => fields.push({})}>
        Add Member
      </button>
  </div>
  )
}

const InnerForm = props => {
  const { handleSubmit, initialValues } = props
  return (
    <form onSubmit={handleSubmit}>
      <FieldArray name="items" component={renderItems} values={initialValues} />
      <div>
        <button type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}

export default InnerForm;