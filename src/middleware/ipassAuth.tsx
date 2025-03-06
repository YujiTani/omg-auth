import { Context} from "hono"
import {getCookie, setCookie} from 'hono/cookie'

import LoginForm from "../view/LoginForm"

const ipassAuth = async (c: Context) => {
    const request = c.req.path
    setCookie(c, 'waitRequest', request)

    const loopValue = getCookie(c, 'loop') || '0'
    setCookie(c, 'loop', (parseInt(loopValue, 10) + 1).toString())
    
    return c.render(<LoginForm />, {
      login: false,
    })
}

export default ipassAuth