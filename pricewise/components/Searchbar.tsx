"use client"  
// client side rendering, whereas other components are server side rendered
// refer - https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns

const handleSubmit = () => {}

const Searchbar = () => {
  return (
    <form 
      className="flex flex-wrap gap-4 mt-12" 
      onSubmit={handleSubmit}   // onSubmit -> interactivity
    >
        <input 
            type="text"
            placeholder="Enter product link"
            className="searchbar-input"
        />

        <button 
            type="submit" 
            className="searchbar-btn"
        >
        </button>
    </form>
  )
}

export default Searchbar