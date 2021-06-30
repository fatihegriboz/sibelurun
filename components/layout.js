import Alert from '../components/alert'
import Footer from '../components/footer'
import Header from '../components/header'
export default function Layout({ preview, children }) {
  return (
    <>
      <div className="site-header">
        {/* col-sm */}
        <Header />
      </div>
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main className="overflow-hidden">{children}</main>
      </div>
      <Footer />
    </>
  )
}
