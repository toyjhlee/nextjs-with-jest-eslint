import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import Router from 'next/router'
import IndexPage from '../pages/index'

const router = {
  pathname: `/`,
}

Router.router = router

describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', () => {
      const wrap = mount(
        <MemoryRouter initialEntries={['/']}>
          <IndexPage />
        </MemoryRouter>,
      )
      expect(wrap.find('div span').text()).toBe('/')
      expect(wrap.find('div p').text()).toBe('Hello Next.js with jest and enzyme and eslint')
    })
  })
})
