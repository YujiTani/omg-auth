import { FC } from 'hono/jsx'

type SettingsProps = {
  login: boolean;
}

const Settings: FC<SettingsProps> = ({ login }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">設定</h1>
        <button className="px-4 py-2 bg-indigo-600 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          変更を保存
        </button>
      </div>
      
      {/* タブナビゲーション */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          <a href="#" className="border-indigo-500 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
            アカウント
          </a>
          <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
            セキュリティ
          </a>
          <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
            通知
          </a>
          <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
            プライバシー
          </a>
          <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
            連携サービス
          </a>
        </nav>
      </div>
      
      {/* 設定コンテンツ */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* サイドバー */}
        <div className="md:col-span-1">
          <div className="bg-white shadow rounded-lg p-4">
            <nav className="space-y-1">
              <a href="#profile" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
                <i className="fas fa-user-circle mr-3 text-indigo-500"></i>
                プロフィール情報
              </a>
              <a href="#account" className="text-gray-700 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
                <i className="fas fa-cog mr-3 text-gray-500"></i>
                アカウント設定
              </a>
              <a href="#appearance" className="text-gray-700 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
                <i className="fas fa-palette mr-3 text-gray-500"></i>
                外観
              </a>
              <a href="#language" className="text-gray-700 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
                <i className="fas fa-language mr-3 text-gray-500"></i>
                言語と地域
              </a>
              <a href="#billing" className="text-gray-700 hover:bg-gray-50 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
                <i className="fas fa-credit-card mr-3 text-gray-500"></i>
                お支払い
              </a>
            </nav>
          </div>
        </div>
        
        {/* メインコンテンツ */}
        <div className="md:col-span-2">
          <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
            {/* プロフィール情報セクション */}
            <div className="p-6" id="profile">
              <h2 className="text-lg font-medium text-gray-900 mb-4">プロフィール情報</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="h-20 w-20 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-600 text-2xl font-bold">
                    OMG
                  </div>
                  <div className="ml-5">
                    <button className="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      画像を変更
                    </button>
                    <button className="ml-3 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      削除
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      姓
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        defaultValue="OMG"
                      />
                    </div>
                  </div>
                  
                  <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      名
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        defaultValue="ユーザー"
                      />
                    </div>
                  </div>
                  
                  <div className="sm:col-span-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      メールアドレス
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        defaultValue="user@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="sm:col-span-6">
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                      自己紹介
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        defaultValue="これはサンプルプロフィールです。ここにはユーザーの自己紹介文が表示されます。趣味や特技、興味のある分野などを書くことができます。"
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      あなた自身について簡単に説明してください。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* アカウント設定セクション */}
            <div className="p-6" id="account">
              <h2 className="text-lg font-medium text-gray-900 mb-4">アカウント設定</h2>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">2段階認証</h3>
                    <p className="text-sm text-gray-500">
                      アカウントのセキュリティを強化するために2段階認証を有効にします。
                    </p>
                  </div>
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="bg-indigo-600 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      role="switch"
                      aria-checked="true"
                    >
                      <span className="translate-x-5 pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200">
                        <span className="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity opacity-0 ease-out duration-100">
                          <i className="fas fa-times text-gray-400 text-xs"></i>
                        </span>
                        <span className="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity opacity-100 ease-in duration-200">
                          <i className="fas fa-check text-indigo-600 text-xs"></i>
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">ログイン通知</h3>
                    <p className="text-sm text-gray-500">
                      新しいデバイスからのログイン時に通知を受け取ります。
                    </p>
                  </div>
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      role="switch"
                      aria-checked="false"
                    >
                      <span className="translate-x-0 pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200">
                        <span className="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity opacity-100 ease-in duration-200">
                          <i className="fas fa-times text-gray-400 text-xs"></i>
                        </span>
                        <span className="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity opacity-0 ease-out duration-100">
                          <i className="fas fa-check text-indigo-600 text-xs"></i>
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">セッション管理</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium text-gray-900">現在のセッション</p>
                          <p className="text-xs text-gray-500">東京, 日本 • Chrome • macOS</p>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          アクティブ
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium text-gray-900">iPhone 13</p>
                          <p className="text-xs text-gray-500">大阪, 日本 • Safari • iOS 15</p>
                        </div>
                        <button className="text-xs text-red-600 hover:text-red-800">
                          終了する
                        </button>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium text-gray-900">Windows PC</p>
                          <p className="text-xs text-gray-500">名古屋, 日本 • Firefox • Windows 11</p>
                        </div>
                        <button className="text-xs text-red-600 hover:text-red-800">
                          終了する
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 危険な操作セクション */}
            <div className="p-6 bg-gray-50">
              <h2 className="text-lg font-medium text-gray-900 mb-4">危険な操作</h2>
              <div className="space-y-4">
                <div>
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <i className="fas fa-download mr-2 text-gray-500"></i>
                    データをエクスポート
                  </button>
                </div>
                <div>
                  <button className="inline-flex items-center px-4 py-2 border border-red-300 shadow-sm text-sm font-medium rounded-md text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                    <i className="fas fa-trash-alt mr-2 text-red-500"></i>
                    アカウントを削除
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
