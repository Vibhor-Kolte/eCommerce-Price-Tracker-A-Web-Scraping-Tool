"use client"
import { FormEvent, useState } from "react";

  
// client side rendering, whereas other components are server side rendered
// refer - https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns

const isValidAmazonProductURL = (url: string) => {
    try {
      const parsedURL = new URL(url);
      const hostname = parsedURL.hostname;
  
      if(hostname.includes('amazon.com') || hostname.includes ('amazon.') || hostname.endsWith('amazon')) {
        return true;
      }
    } catch (error) {
      return false;
    }
  
    return false;
  }
  
const Searchbar = () => {
    // need to keep track of url that we submit
    const [searchPrompt, setSearchPrompt] = useState('');
    
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        const isValidLink = isValidAmazonProductURL(searchPrompt);
    
        alert(isValidLink ? 'Valid Link':'Please provide a valid Amazon link');
        // try:{https://amazon.com/mac}, {amazon.com/mac}
    }

  return (
    <form 
      className="flex flex-wrap gap-4 mt-12" 
      onSubmit={handleSubmit}   // onSubmit -> interactivity
    >
        <input 
            type="text"
            placeholder="Enter product link"
            className="searchbar-input"
            value={searchPrompt}
            onChange={(e) => setSearchPrompt(e.target.value)}   //keep track of our value within our state
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