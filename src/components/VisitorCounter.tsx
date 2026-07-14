"use client"

import { useEffect, useState } from "react"
import { Eye } from "lucide-react"

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    fetch("/api/visitors", { method: "POST" })
      .then((r) => r.json())
      .then((d) => setCount(d.count))
      .catch(() => setCount(0))
  }, [])

  if (count === null) return null

  return (
    <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground/50">
      <Eye className="h-3 w-3" />
      <span>{count.toLocaleString()}</span>
    </div>
  )
}
