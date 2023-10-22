import Image from 'next/image'
import MemberRegister from '@/components/siginUp'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='h-6'> hello there</h1>
      <MemberRegister />
    </main>
  )
}
