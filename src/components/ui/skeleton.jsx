import React from 'react'

export function Skeleton({ className = '' }) {
  return (
    <div
      className={`animate-pulse rounded-md bg-muted ${className}`}
    />
  )
}