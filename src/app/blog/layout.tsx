import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal Blog | Law Offices of Chris Noriega',
  description: 'Expert legal insights, updates, and resources from experienced criminal defense attorneys in La Puente.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-slate-900">
      <main className="container mx-auto px-4 py-16">
        {children}
      </main>
    </div>
  )
}