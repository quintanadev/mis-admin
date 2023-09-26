import Aside from '@/components/partials/aside'
import Footer from '@/components/partials/footer'
import Header from '@/components/partials/header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen">
      <Aside />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col">
          <div className="h-12 bg-gray-100 flex items-center px-2">TITULO DA PAGINA</div>
          <div className="flex-1 px-2 py-2">
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}