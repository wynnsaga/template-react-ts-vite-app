import '@/styles/app.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

function App() {

  return (
    <div className="app">
      {/* Header 组件 */}
      <Header />

      {/* 页面主要内容 */}
      <main className="main-content">
        <h2>Welcome to My Website</h2>
        <p>This is the main content of the page.</p>
      </main>

      {/* Footer 组件 */}
      <Footer />
    </div>
  )
}

export default App
