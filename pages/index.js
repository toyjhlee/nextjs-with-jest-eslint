import React, { useState, useEffect } from 'react'
import Router from 'next/router'

import index from '@static/index.module.sass'

import '@static/reset.css'
import '@static/reset.mobile.css'

const Index = () => {
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    setPathname(Router.pathname)
  }, [])

  return (
    <div className={index.indexPage}>
      <span>{pathname}</span>
      <p className={index.description}>Hello Next.js with jest and enzyme and eslint</p>
    </div>
  )
}

export default Index
