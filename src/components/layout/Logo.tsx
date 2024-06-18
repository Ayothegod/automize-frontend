import { Link } from "react-router-dom"

export default function Logo({
  logo,
  className,
}: {
  logo: any
  className: string
}) {
  const user = false

  return (
    <Link to={user ? '/dashboard' : '/'}>
      <img src={logo} alt="svg" className={`h-10 w-10 ${className}`} />
    </Link>
  )
}
