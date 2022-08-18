import AuthButton from './auth-button'

export default function Navbar() {
  return (
    <nav className="sticky w-full top-0 flex justify-end items-center h-20 border border-b-1 border-b-neutral-200 bg-white px-4">
      <AuthButton />
    </nav>
  )
}
