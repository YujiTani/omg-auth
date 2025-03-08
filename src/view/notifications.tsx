import { FC } from 'hono/jsx'

type NotificationsProps = {
  login: boolean;
}

const Notifications: FC<NotificationsProps> = ({ login }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">通知</h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <i className="fas fa-check-double mr-2"></i>すべて既読にする
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <i className="fas fa-cog mr-2"></i>通知設定
          </button>
        </div>
      </div>
      
      {/* フィルターとタブ */}
      <div className="bg-white shadow rounded-lg mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex">
            <a href="#" className="border-indigo-500 text-indigo-600 whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm">
              すべての通知
            </a>
            <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm">
              未読
            </a>
            <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm">
              メンション
            </a>
            <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm">
              システム
            </a>
          </nav>
        </div>
        <div className="p-4 flex justify-between items-center">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="fas fa-search text-gray-400"></i>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="通知を検索..."
            />
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-500 mr-2">並び替え:</span>
            <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
              <option>最新順</option>
              <option>重要度順</option>
              <option>未読優先</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* 今日の通知 */}
      <div className="mb-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">今日</h2>
        <div className="space-y-4">
          {/* 未読通知 */}
          <div className="bg-indigo-50 rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 flex">
              <div className="flex-shrink-0 mr-4">
                <div className="h-10 w-10 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-600">
                  <i className="fas fa-bell"></i>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-indigo-800">
                    システム通知
                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      新着
                    </span>
                  </p>
                  <div className="flex items-center">
                    <span className="text-xs text-gray-500">30分前</span>
                    <button className="ml-2 text-gray-400 hover:text-gray-500">
                      <i className="fas fa-ellipsis-v"></i>
                    </button>
                  </div>
                </div>
                <p className="mt-1 text-sm text-gray-700">
                  セキュリティアップデートが利用可能です。システムを最新の状態に保つために更新してください。
                </p>
                <div className="mt-2">
                  <button className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    今すぐ更新
                  </button>
                  <button className="ml-2 inline-flex items-center px-3 py-1 border border-gray-300 text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    後で
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-indigo-100 px-4 py-2 flex justify-between items-center">
              <span className="text-xs text-indigo-700">重要度: 高</span>
              <button className="text-xs text-indigo-700 hover:text-indigo-900 font-medium">
                既読にする
              </button>
            </div>
          </div>
          
          {/* メンション通知 */}
          <div className="bg-blue-50 rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 flex">
              <div className="flex-shrink-0 mr-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <img className="h-8 w-8 rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg" alt="ユーザーアバター" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">
                    田中太郎があなたをメンションしました
                  </p>
                  <div className="flex items-center">
                    <span className="text-xs text-gray-500">2時間前</span>
                    <button className="ml-2 text-gray-400 hover:text-gray-500">
                      <i className="fas fa-ellipsis-v"></i>
                    </button>
                  </div>
                </div>
                <p className="mt-1 text-sm text-gray-700">
                  「プロジェクトの進捗について @OMGユーザー に確認したいことがあります。会議の日程を調整できますか？」
                </p>
                <div className="mt-2 flex">
                  <button className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    返信
                  </button>
                  <button className="ml-2 inline-flex items-center px-3 py-1 border border-gray-300 text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    詳細を表示
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* アクティビティ通知 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <div className="p-4 flex">
              <div className="flex-shrink-0 mr-4">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <i className="fas fa-check-circle"></i>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">
                    タスク完了
                  </p>
                  <div className="flex items-center">
                    <span className="text-xs text-gray-500">4時間前</span>
                    <button className="ml-2 text-gray-400 hover:text-gray-500">
                      <i className="fas fa-ellipsis-v"></i>
                    </button>
                  </div>
                </div>
                <p className="mt-1 text-sm text-gray-700">
                  「四半期レポートの作成」タスクが完了しました。
                </p>
                <div className="mt-2">
                  <a href="#" className="text-xs text-indigo-600 hover:text-indigo-900 font-medium">
                    プロジェクトを表示
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 昨日の通知 */}
      <div className="mb-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">昨日</h2>
        <div className="space-y-4">
          {/* 支払い通知 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <div className="p-4 flex">
              <div className="flex-shrink-0 mr-4">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                  <i className="fas fa-credit-card"></i>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">
                    支払い完了
                  </p>
                  <div className="flex items-center">
                    <span className="text-xs text-gray-500">昨日 15:30</span>
                    <button className="ml-2 text-gray-400 hover:text-gray-500">
                      <i className="fas fa-ellipsis-v"></i>
                    </button>
                  </div>
                </div>
                <p className="mt-1 text-sm text-gray-700">
                  プレミアムプランの月額支払い（¥1,980）が正常に処理されました。
                </p>
                <div className="mt-2">
                  <a href="#" className="text-xs text-indigo-600 hover:text-indigo-900 font-medium">
                    請求書を表示
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* コメント通知 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <div className="p-4 flex">
              <div className="flex-shrink-0 mr-4">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <img className="h-8 w-8 rounded-full" src="https://randomuser.me/api/portraits/women/44.jpg" alt="ユーザーアバター" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">
                    佐藤花子がコメントしました
                  </p>
                  <div className="flex items-center">
                    <span className="text-xs text-gray-500">昨日 10:15</span>
                    <button className="ml-2 text-gray-400 hover:text-gray-500">
                      <i className="fas fa-ellipsis-v"></i>
                    </button>
                  </div>
                </div>
                <p className="mt-1 text-sm text-gray-700">
                  「素晴らしいプレゼンテーションでした！次回のミーティングでもぜひ共有してください。」
                </p>
                <div className="mt-2 flex">
                  <button className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    返信
                  </button>
                  <button className="ml-2 inline-flex items-center px-3 py-1 border border-gray-300 text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    いいね
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 過去7日間 */}
      <div>
        <h2 className="text-lg font-medium text-gray-900 mb-4">過去7日間</h2>
        <div className="space-y-4">
          {/* 複数の通知をまとめて表示 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <div className="p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">
                  過去7日間の通知（12件）
                </p>
                <button className="text-sm text-indigo-600 hover:text-indigo-900 font-medium">
                  すべて表示
                </button>
              </div>
              <div className="mt-3 grid grid-cols-1 gap-3">
                <div className="flex items-center p-2 hover:bg-gray-50 rounded-md">
                  <div className="flex-shrink-0 mr-3">
                    <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-gray-800">あなたの投稿が5つのいいねを獲得しました</p>
                    <p className="text-xs text-gray-500">3日前</p>
                  </div>
                </div>
                <div className="flex items-center p-2 hover:bg-gray-50 rounded-md">
                  <div className="flex-shrink-0 mr-3">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <i className="fas fa-user-plus"></i>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-gray-800">山田健太があなたをフォローしました</p>
                    <p className="text-xs text-gray-500">4日前</p>
                  </div>
                </div>
                <div className="flex items-center p-2 hover:bg-gray-50 rounded-md">
                  <div className="flex-shrink-0 mr-3">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <i className="fas fa-calendar-check"></i>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-gray-800">明日の会議のリマインダー</p>
                    <p className="text-xs text-gray-500">5日前</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-center">
              <button className="text-sm text-gray-700 hover:text-gray-900 font-medium">
                過去の通知をもっと見る
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notifications
