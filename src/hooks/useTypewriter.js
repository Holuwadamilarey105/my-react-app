import { useState, useEffect } from 'react'

export function useTypewriter(roles, speed = 100, delayBetweenRoles = 2000) {
  const [displayText, setDisplayText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), delayBetweenRoles)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    } else {
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1)
        )
      }, speed)
    }

    return () => clearTimeout(timeout)
  }, [displayText, roleIndex, isDeleting, roles, speed, delayBetweenRoles])

  return displayText
}
