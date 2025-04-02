export default function HeaderDetail({title, subtitle}: { title: string; subtitle: string }) {
    return (
        <header className="p-6 md:p-20 text-center">
          <h1 className="text-2xl mb-4 md:text-5xl">
              <span className="text-accent font-bold">
                {title}
              </span>
          </h1>
          <p className="text-base md:text-2xl">
              {subtitle} 
          </p>
        </header>
    )
}