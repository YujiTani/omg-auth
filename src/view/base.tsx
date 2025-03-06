import { Context, Next } from 'hono'

declare module 'hono' {
  interface ContextRenderer {
    (
      content: string | Promise<string>,
      head: { login: boolean }
    ): Response | Promise<Response>
  }
}

const baseHTML = async (c: Context, next: Next) => {
    c.setRenderer((context, {login}) => {
        return c.html(
        <html lang="ja">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>OMG_AUTH</title>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
            <style>{`
              body {
                font-family: 'Inter', sans-serif;
                background-color: #f5f7fa;
              }
              .sidebar {
                transition: all 0.3s ease;
              }
              @media (max-width: 768px) {
                .sidebar {
                  transform: translateX(-100%);
                }
                .sidebar.active {
                  transform: translateX(0);
                }
              }
              .sidebar-disabled {
                pointer-events: none;
                opacity: 0.6;
                filter: grayscale(50%);
              }
            `}</style>
          </head>
          <body class="min-h-screen bg-gray-50 flex flex-col">
            {/* ヘッダー */}
            <header class="bg-white shadow-sm z-10">
              <div class="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                  <div class="flex items-center">
                    <button id="sidebar-toggle" class="md:hidden mr-2 text-gray-500 hover:text-gray-700">
                      <i class="fas fa-bars text-xl"></i>
                    </button>
                    <div class="flex-shrink-0 flex items-center">
                      <span class="text-xl font-bold text-indigo-600">OMG_AUTH</span>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <div class="ml-4 flex items-center md:ml-6">
                      <a href="/notifications" class="p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <i class="fas fa-bell"></i>
                      </a>
                      <div class="ml-3 relative">
                        <a href="/profile" class="flex items-center focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-full">
                          <div class="h-8 w-8 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-600 font-semibold">
                            U
                          </div>
                          <span class="ml-2 text-sm font-medium text-gray-700 hidden md:block">ユーザー</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <div class="flex flex-1 overflow-hidden">
              {/* サイドバー */}
              <aside id="sidebar" class="sidebar sidebar-disabled bg-white shadow-md w-64 md:block fixed md:relative h-full z-10">
                <div class="h-full flex flex-col py-4">
                  <div class="px-4 mb-6">
                    <div class="relative">
                      <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                        <i class="fas fa-search"></i>
                      </span>
                      <input type="text" class="block w-full pl-10 pr-3 py-2 rounded-md bg-gray-100 border-transparent focus:bg-white focus:border-gray-300 focus:ring-0 text-sm" placeholder="検索..." />
                    </div>
                  </div>
                  <div class="px-4 mb-4 text-center">
                    {
                      !login && (
                        <span class="text-sm text-red-500">ログインが必要です</span>
                      )
                    }
                  </div>
                  <nav class="flex-1 px-2 space-y-1">
                    <a href="/dashboard" class="group flex items-center px-2 py-2 text-sm font-medium rounded-md bg-indigo-100 text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <i class="fas fa-home mr-3 text-indigo-500"></i>
                      ダッシュボード
                    </a>
                    <a href="/profile" class="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <i class="fas fa-user-circle mr-3 text-gray-500"></i>
                      プロフィール
                    </a>
                    <a href="/settings" class="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <i class="fas fa-cog mr-3 text-gray-500"></i>
                      設定
                    </a>
                    <a href="/logout" class="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <i class="fas fa-sign-out-alt mr-3 text-gray-500"></i>
                      ログアウト
                    </a>
                  </nav>
                </div>
              </aside>

              {/* メインコンテンツ */}
              <main class="flex-1 overflow-auto p-4 md:p-6">
                <div class="max-w-7xl mx-auto">
                  <div class="bg-white shadow-sm rounded-lg p-6">
                    {context}
                  </div>
                </div>
              </main>
            </div>

            {/* モバイルサイドバー用JavaScript */}
            <script dangerouslySetInnerHTML={{__html: `
              document.addEventListener('DOMContentLoaded', function() {
                const sidebarToggle = document.getElementById('sidebar-toggle');
                const sidebar = document.getElementById('sidebar');
                
                if (sidebarToggle && sidebar) {
                  sidebarToggle.addEventListener('click', function() {
                    sidebar.classList.toggle('active');
                  });
                }
              });
            `}}>
            </script>

            {login && (
              <script dangerouslySetInnerHTML={{__html: `
                document.addEventListener('DOMContentLoaded', function() {
                  const sidebar = document.getElementById('sidebar');
                  if (sidebar) {
                    sidebar.classList.remove('sidebar-disabled');
                  }
                });
              `}}></script>
            )}
          </body>
        </html>
        )
    })
    await next()
}

export default baseHTML