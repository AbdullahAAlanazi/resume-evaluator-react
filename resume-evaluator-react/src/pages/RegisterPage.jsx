import { useState } from "react"
import { Link } from "react-router-dom"

function RegisterPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    console.log(email)
    console.log(password)
    console.log(confirmPassword)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button type="submit">Register</button>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  )
}

export default RegisterPage