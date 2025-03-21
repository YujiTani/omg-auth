import { Hono } from 'hono'
import {deleteCookie, getCookie, setCookie} from 'hono/cookie'
import { serveStatic } from '@hono/node-server/serve-static'

import ipassAuth from './middleware/ipassAuth'
import baseHTML from './view/base'
import LoginForm from './view/LoginForm'
import Profile from './view/profile'
import Dashboard from './view/dashboard'
import Settings from './view/settings'
import Notifications from './view/notifications'

const app = new Hono()

app.use('*', baseHTML)
app.use('/favicon.ico', serveStatic({ path: './favicon.ico' }))
app.use('*', async (c, next) => {
  if (c.req.path === '/login' && c.req.method === 'POST') {
    return next()
  }

  const authenticated = getCookie(c, 'authenticated')
  if (authenticated) {
    next()
    deleteCookie(c, 'authenticated')
    return
  }

  return await ipassAuth(c)
})


app.get('/', (c) => {
  const path = c.req.path
  const method = c.req.method
  const loopCount = parseInt(getCookie(c, 'loop') || '1', 10);
  const heart = '❤'.repeat(Math.min(loopCount, 20));

  return c.render(<div>
    <h1 className='text-2xl font-bold'>Hello Hono!</h1>
    <p>This is a OMG_AUTH application.</p>
    <p className='text-red-500 text-2xl font-bold'>{`Your Request: ${method}: ${path} ${heart}`}</p>
    </div>, {
      login: true,
    })
})

app.get('/dashboard', (c) => {
  return c.render(<Dashboard login={true} />, { login: true })
})

app.get('/profile', (c) => {
  return c.render(<Profile login={true} />, { login: true })
})

app.get('/settings', (c) => {
  return c.render(<Settings login={true} />, { login: true })
})

app.get('/notifications', (c) => {
  return c.render(<Notifications login={true} />, { login: true })
})

app.post('/login', async (c) => {
  const { username, password } = await c.req.parseBody()
  
  if (username === 'omg' && password === 'pass') {
    const waitRequest = getCookie(c, 'waitRequest')
    setCookie(c, 'authenticated', 'true')
    return c.redirect(waitRequest || '/')
  }

  return c.render(<LoginForm errorMessage='ユーザー名かパスワードが間違っています' />, {
    login: false,
  })
})

app.get('/logout', (c) => {
  deleteCookie(c, 'authenticated')
  return c.redirect('/')
})

export default app
