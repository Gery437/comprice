export default function LoadingSpinner({ size = 'md', text = 'טוען...' }) {
  const sizes = { sm: 'w-5 h-5', md: 'w-10 h-10', lg: 'w-16 h-16' }
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-10">
      <div className={`${sizes[size]} border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin`} />
      {text && <p className="text-emerald-700 font-medium">{text}</p>}
    </div>
  )
}
