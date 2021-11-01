import { render, fireEvent } from '@testing-library/react'
import App from './App'

test('renders button', () => {
  const { queryByText, getByText } = render(<App />)

  expect(queryByText('yay')).toBeFalsy()

  const button = getByText('I am happy')
  fireEvent.click(button)

  expect(queryByText('yay')).toBeTruthy()
})
