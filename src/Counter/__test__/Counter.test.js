import React from "react"
import Counter from "../Counter"
import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

test('first test ever/header renders with correct text', () => {
  const { getByTestId } = render(<Counter />)
  const headerEl = getByTestId("header")
  expect(headerEl.textContent).toBe('Counter')
})

test("counter starts at 0", () => {
  const { getByTestId } = render(<Counter />)
  const counterEl = getByTestId('counter')
  expect(counterEl.textContent).toBe("0")
})

test("input starts at 1", () => {
  const { getByTestId } = render(<Counter />)
  const inputEl = getByTestId('input')
  expect(inputEl.value).toBe("1")
})

test("add button renders correct + sign", () => {
  const { getByTestId } = render(<Counter />)
  const addEl = getByTestId('add')
  expect(addEl.textContent).toBe("+")
})

test("minus button renders correct - sign", () => {
  const { getByTestId } = render(<Counter />)
  const minusEl = getByTestId('minus')
  expect(minusEl.textContent).toBe("-")
})

test("change value of input correctly", () => {
  const { getByTestId } = render(<Counter />)
  const inputvalEl = getByTestId('input')

  expect(inputvalEl.value).toBe("1")

  fireEvent.change(inputvalEl, {
    target: {
      value: "5"
    }
  })
  expect(inputvalEl.value).toBe("5")
})

test("clicking on plus btn adds 1 to counter", () => {
  const { getByTestId } = render(<Counter />)
  const btnEl = getByTestId("add")
  const counterEl = getByTestId("counter")
  expect(counterEl.textContent).toBe("0")
  fireEvent.click(btnEl)

  expect(counterEl.textContent).toBe("1")
})

test("typing new input changes and then adding changes number value", () => {
  const { getByTestId } = render(<Counter />)
  const btnEl = getByTestId("add")
  const counterEl = getByTestId("counter")
  const inputEl = getByTestId("input")

  expect(counterEl.textContent).toBe("0")
  fireEvent.change(inputEl, {
    target: {
      value: 10
    }
  })
  fireEvent.click(btnEl)
  expect(counterEl.textContent).toBe("10")
})

test("adding then subtracting leads to correct value", () => {
  const { getByTestId } = render(<Counter />)
  const abtnEl = getByTestId("add")
  const mbtnEl = getByTestId("minus")
  const counterEl = getByTestId("counter")
  const inputEl = getByTestId("input")

  fireEvent.change(inputEl, {
    target: {
      value: "10"
    }
  })

  for (let i = 0; i < 5; i++) {
    fireEvent.click(abtnEl)
  }
  for (let i = 0; i < 3; i++) {
    fireEvent.click(mbtnEl)
  }

  expect(counterEl.textContent).toBe("20")

  fireEvent.change(inputEl, {
    target: {
      value: "5"
    }
  })

  fireEvent.click(abtnEl)
  fireEvent.click(mbtnEl)
  fireEvent.click(mbtnEl)

  expect(counterEl.textContent).toBe("15")
})

test("counter contains correct className", () => {
  const { getByTestId } = render(<Counter />)
  const counterEl = getByTestId("counter")
  const abtnEl = getByTestId("add")
  const mbtnEl = getByTestId("minus")
  const inputEl = getByTestId("input")

  expect(counterEl.className).toBe("false")
  fireEvent.change(inputEl, {
    target: {
      value: "50"
    }
  })
  fireEvent.click(abtnEl)
  fireEvent.click(abtnEl)
  expect(counterEl.className).toBe("green")
  fireEvent.change(inputEl, {
    target: {
      value: "500"
    }
  })
  fireEvent.click(mbtnEl)
  expect(counterEl.className).toBe("red")
})