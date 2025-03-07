import { FC } from 'hono/jsx'

type DashboardProps = {
  login: boolean;
}

const Dashboard: FC<DashboardProps> = ({ login }) => {
  return (
    login ? (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">ダッシュボード</h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <i className="fas fa-download mr-2"></i>レポート
          </button>
          <button className="px-4 py-2 bg-indigo-600 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <i className="fas fa-plus mr-2"></i>新規作成
          </button>
        </div>
      </div>
      
      {/* 概要カード */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
              <i className="fas fa-users text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">ユーザー数</p>
              <p className="text-2xl font-semibold text-gray-900">1,482</p>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-green-500 font-medium flex items-center">
              <i className="fas fa-arrow-up mr-1"></i>12%
            </span>
            <span className="text-gray-500 ml-2">先月比</span>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <i className="fas fa-chart-line text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">売上高</p>
              <p className="text-2xl font-semibold text-gray-900">¥2,854,850</p>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-green-500 font-medium flex items-center">
              <i className="fas fa-arrow-up mr-1"></i>8.2%
            </span>
            <span className="text-gray-500 ml-2">先月比</span>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <i className="fas fa-shopping-cart text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">注文数</p>
              <p className="text-2xl font-semibold text-gray-900">384</p>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-red-500 font-medium flex items-center">
              <i className="fas fa-arrow-down mr-1"></i>3.8%
            </span>
            <span className="text-gray-500 ml-2">先月比</span>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600">
              <i className="fas fa-comments text-xl"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">問い合わせ</p>
              <p className="text-2xl font-semibold text-gray-900">42</p>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="text-green-500 font-medium flex items-center">
              <i className="fas fa-arrow-up mr-1"></i>24%
            </span>
            <span className="text-gray-500 ml-2">先月比</span>
          </div>
        </div>
      </div>
      
      {/* グラフとテーブル */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* グラフ */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">売上推移</h3>
          </div>
          <div className="p-6">
            {/* グラフの代わりに表示するダミー要素 */}
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <i className="fas fa-chart-bar text-4xl text-gray-400 mb-2"></i>
                <p className="text-gray-500">ここに売上グラフが表示されます</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-sm font-medium text-gray-500">今月の売上</p>
                <p className="text-lg font-semibold text-gray-900">¥1,254,300</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">平均注文額</p>
                <p className="text-lg font-semibold text-gray-900">¥12,480</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">コンバージョン率</p>
                <p className="text-lg font-semibold text-gray-900">3.2%</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* 最近のアクティビティ */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">最近のアクティビティ</h3>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <i className="fas fa-check-circle"></i>
                  </div>
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm text-gray-900">新規注文 #12345 が完了しました</p>
                  <p className="text-xs text-gray-500">30分前</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <i className="fas fa-user-plus"></i>
                  </div>
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm text-gray-900">新規ユーザー「田中太郎」が登録しました</p>
                  <p className="text-xs text-gray-500">2時間前</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
                    <i className="fas fa-exclamation-triangle"></i>
                  </div>
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm text-gray-900">在庫アラート: 商品ID #5678 の在庫が少なくなっています</p>
                  <p className="text-xs text-gray-500">5時間前</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                    <i className="fas fa-comment"></i>
                  </div>
                </div>
                <div className="ml-3 flex-1">
                  <p className="text-sm text-gray-900">新しい問い合わせが届きました</p>
                  <p className="text-xs text-gray-500">昨日</p>
                </div>
              </li>
            </ul>
            <div className="mt-4 text-center">
              <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                すべてのアクティビティを表示
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* 最近の注文 */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-lg font-medium text-gray-900">最近の注文</h3>
          <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
            すべての注文を表示
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  注文ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  顧客
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  日付
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  金額
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ステータス
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  アクション
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  #12345
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  佐藤一郎
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2023/06/15
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ¥24,800
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    完了
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">詳細</a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  #12344
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  鈴木花子
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2023/06/14
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ¥12,500
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    発送済み
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">詳細</a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  #12343
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  高橋次郎
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2023/06/14
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ¥8,700
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    処理中
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">詳細</a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  #12342
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  田中三郎
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2023/06/13
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ¥32,400
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    キャンセル
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">詳細</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <h1 className='text-2xl font-bold mb-6'>ログインが必要です</h1>
    </div>
  )
)}

export default Dashboard
