import React from 'react'
import SearchField from './index'

describe('searchfield.cy.ts', () => {
  beforeEach(() => {
    cy.viewport(1280, 720)
  })

  it('C01: confirm search field submits the right result', () => {
    let inputText = ''
    const onSubmit = (text: string) => {
      return (inputText = text)
    }
    const searchField = (
      <SearchField
        className='searchfield'
        placeholder='Search'
        onSubmit={onSubmit}
      />
    )

    cy.mount(searchField)
    cy.get(`.searchfield`).click()
    cy.get('input')
      .type('content')
      .type(`{enter}`)
      .then(() => {
        expect(inputText).to.equal('content')
      })
  })
})
