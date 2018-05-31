// Higher Order Component
import React from 'react';
import { Field, Form, FieldArray } from 'formik';

const InnerForm = ({ values }) => {
  return (
    <FieldArray
      name="items"
      render={arrayHelpers => (
        <Form>
          {values.items.map((item, index) => (
            <div>
              <Field name={`items.${index}.description`} placeholder="description" />
              <Field name={`items.${index}.number`}  placeholder="number"/>
              <Field name={`items.${index}.unit`} placeholder="unit"/>
              <Field name={`items.${index}.quantity`} placeholder="quantity"/>
              <button
                type="button"
                onClick={() => arrayHelpers.remove(index)}
              >
                -
              </button>
            </div>
          ))}
          <button type="button" onClick={() => arrayHelpers.push({
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
        </Form>
    )}
    />
  )
}

export default InnerForm;