import { FC } from 'hono/jsx'

type LoginFormProps = {
  errorMessage?: string;
}

const LoginForm: FC<LoginFormProps> = ({ errorMessage }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6">ログイン</h2>
      <form className="w-full max-w-md" method="post" action="/login">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            ユーザー名
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
            id="username" 
            type="text" 
            name="username" 
            placeholder="ユーザー名を入力" 
            required 
            autoFocus
            tabIndex={1}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            パスワード
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
            id="password" 
            type="password" 
            name="password" 
            placeholder="パスワードを入力" 
            required 
            tabIndex={2}
          />
        </div>
        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
        )}
        <div className="flex items-center justify-between">
          <button 
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" 
            type="submit"
            tabIndex={3}
          >
            ログイン
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm 