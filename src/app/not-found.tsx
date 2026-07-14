import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <span className="text-8xl font-bold text-primary/20 select-none">404</span>
      <h1 className="text-2xl font-bold mt-4 mb-2">Page Not Found</h1>
      <p className="text-muted-foreground mb-8 max-w-sm">
        Halaman yang kamu cari ga ada. Mungkin udah dipindahin atau dihapus.
      </p>
      <Link
        href="/home"
        className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm hover:opacity-90 transition-opacity"
      >
        Back to Home
      </Link>
    </div>
  )
}
