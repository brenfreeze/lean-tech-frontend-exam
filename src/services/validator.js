export default function validator(values) {
  const errors = {}

  if (!values.operation) {
    errors.operation = 'Field \'Operation\' is required'
  }

  if (!values.processId) {
    errors.processId = 'Field \'Process ID\' is required'
  }

  if (!values.processStep) {
    errors.processStep = 'Field \'Process Step\' is required'
  }

  if (!values.productFamily) {
    errors.productFamily = 'Field \'Product Family\' is required'
  }

  return errors
}