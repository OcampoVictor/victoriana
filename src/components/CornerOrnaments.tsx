export default function CornerOrnaments() {
  return (
    <>
      <div className="fixed top-4 left-4 w-32 h-32 pointer-events-none z-50 opacity-60">
        <svg className="w-full h-full fill-secondary rotate-0" viewBox="0 0 100 100">
          <path d="M0,0 L40,0 C20,0 10,10 10,30 L10,100 L0,100 Z" opacity="0.5"></path>
          <path d="M5,5 Q30,5 30,30 L5,30 Z" fill="none" stroke="currentColor" strokeWidth="2"></path>
        </svg>
      </div>
      <div className="fixed top-4 right-4 w-32 h-32 pointer-events-none z-50 opacity-60 rotate-90">
        <svg className="w-full h-full fill-secondary" viewBox="0 0 100 100">
          <path d="M0,0 L40,0 C20,0 10,10 10,30 L10,100 L0,100 Z" opacity="0.5"></path>
          <path d="M5,5 Q30,5 30,30 L5,30 Z" fill="none" stroke="currentColor" strokeWidth="2"></path>
        </svg>
      </div>
      <div className="fixed bottom-4 left-4 w-32 h-32 pointer-events-none z-50 opacity-60 -rotate-90">
        <svg className="w-full h-full fill-secondary" viewBox="0 0 100 100">
          <path d="M0,0 L40,0 C20,0 10,10 10,30 L10,100 L0,100 Z" opacity="0.5"></path>
          <path d="M5,5 Q30,5 30,30 L5,30 Z" fill="none" stroke="currentColor" strokeWidth="2"></path>
        </svg>
      </div>
      <div className="fixed bottom-4 right-4 w-32 h-32 pointer-events-none z-50 opacity-60 rotate-180">
        <svg className="w-full h-full fill-secondary" viewBox="0 0 100 100">
          <path d="M0,0 L40,0 C20,0 10,10 10,30 L10,100 L0,100 Z" opacity="0.5"></path>
          <path d="M5,5 Q30,5 30,30 L5,30 Z" fill="none" stroke="currentColor" strokeWidth="2"></path>
        </svg>
      </div>
    </>
  );
}
