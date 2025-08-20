export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center">
      <div className="text-center">
        {/* DONGBA Logo */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-3">
              <div className="w-8 h-8 bg-blue-600 rounded"></div>
            </div>
            <span className="text-white text-2xl font-bold">DONGBA</span>
          </div>
        </div>

        {/* Loading Spinner */}
        <div className="mb-6">
          <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto"></div>
        </div>

        {/* Loading Text */}
        <p className="text-white/80 text-lg">Đang tải...</p>
      </div>
    </div>
  );
}
