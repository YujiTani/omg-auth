import { FC } from 'hono/jsx'

type ProfileProps = {
  login: boolean
}

const Profile: FC<ProfileProps> = ({ login }) => {
  return (
    login ? (
    <div>
      <h1 className='text-2xl font-bold mb-6'>プロフィール</h1>
      <div className="bg-white rounded-lg shadow overflow-hidden">
  {/* プロフィールヘッダー */}
  <div className="bg-indigo-700 h-32 relative">
    <div className="absolute -bottom-16 left-6">
      <div className="h-32 w-32 rounded-full border-4 border-white bg-indigo-200 flex items-center justify-center text-indigo-700 text-4xl font-bold shadow-md">
        OMG
      </div>
    </div>
  </div>
  
  {/* プロフィール情報 */}
  <div className="pt-20 pb-6 px-6">
    <div className="flex justify-between items-start">
      <div>
        <h2 className="text-xl font-bold text-gray-900">OMG ユーザー</h2>
        <p className="text-sm text-gray-500">@omg_user</p>
      </div>
      <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        編集
      </button>
    </div>
    
    <p className="mt-4 text-gray-700">
      これはサンプルプロフィールです。ここにはユーザーの自己紹介文が表示されます。趣味や特技、興味のある分野などを書くことができます。
    </p>
    
    <div className="mt-6 flex space-x-4">
      <div className="flex items-center text-gray-600">
        <i className="fas fa-map-marker-alt mr-2"></i>
        <span>東京, 日本</span>
      </div>
      <div className="flex items-center text-gray-600">
        <i className="fas fa-briefcase mr-2"></i>
        <span>OMG株式会社</span>
      </div>
      <div className="flex items-center text-gray-600">
        <i className="fas fa-calendar mr-2"></i>
        <span>2023年4月に参加</span>
      </div>
    </div>
  </div>
  
  {/* タブナビゲーション */}
  <div className="border-t border-gray-200">
    <div className="flex">
      <button className="flex-1 py-4 px-6 text-center border-b-2 border-indigo-500 text-indigo-600 font-medium">
        概要
      </button>
      <button className="flex-1 py-4 px-6 text-center text-gray-600 hover:text-gray-900">
        投稿
      </button>
      <button className="flex-1 py-4 px-6 text-center text-gray-600 hover:text-gray-900">
        フォロワー
      </button>
      <button className="flex-1 py-4 px-6 text-center text-gray-600 hover:text-gray-900">
        フォロー中
      </button>
    </div>
  </div>
</div>

{/* プロフィール詳細情報 */}
<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* 基本情報 */}
  <div className="bg-white rounded-lg shadow p-6">
    <h3 className="text-lg font-medium text-gray-900 mb-4">基本情報</h3>
    <div className="space-y-3">
      <div className="flex justify-between">
        <span className="text-gray-500">名前</span>
        <span className="text-gray-900 font-medium">OMG ユーザー</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">メールアドレス</span>
        <span className="text-gray-900 font-medium">user@example.com</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">電話番号</span>
        <span className="text-gray-900 font-medium">03-1234-5678</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">生年月日</span>
        <span className="text-gray-900 font-medium">1990年1月1日</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-500">性別</span>
        <span className="text-gray-900 font-medium">未設定</span>
      </div>
    </div>
  </div>
  
  {/* 統計情報 */}
  <div className="bg-white rounded-lg shadow p-6">
    <h3 className="text-lg font-medium text-gray-900 mb-4">アカウント統計</h3>
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-gray-50 p-4 rounded-lg text-center">
        <div className="text-2xl font-bold text-indigo-600">42</div>
        <div className="text-sm text-gray-500">投稿</div>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-center">
        <div className="text-2xl font-bold text-indigo-600">128</div>
        <div className="text-sm text-gray-500">フォロワー</div>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-center">
        <div className="text-2xl font-bold text-indigo-600">97</div>
        <div className="text-sm text-gray-500">フォロー中</div>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg text-center">
        <div className="text-2xl font-bold text-indigo-600">254</div>
        <div className="text-sm text-gray-500">いいね</div>
      </div>
    </div>
  </div>
</div>
</div>
  ) : (
    <div>
      <h1 className='text-2xl font-bold mb-6'>ログインが必要です</h1>
    </div>
  )
)}

export default Profile
