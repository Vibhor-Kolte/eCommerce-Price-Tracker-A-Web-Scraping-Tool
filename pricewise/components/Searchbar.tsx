"use client"
import { scrapeAndStoreProduct } from "@/lib/actions";
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
    // turn on loading when clicked
    const [isLoading, setIsLoading] = useState(false);
    
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        const isValidLink = isValidAmazonProductURL(searchPrompt);
    
        // try:{https://amazon.com/mac}, {amazon.com/mac}
        if(!isValidLink) return alert('Please provide a valid Amazon link')

        try {
            setIsLoading(true);
            // Scrape the product page
            const product = await scrapeAndStoreProduct(searchPrompt);

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
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
            disabled={searchPrompt === ''}  //disable search button when prompt is empty
        >
            {isLoading ? 'Searching...' : 'Search'}
        </button>
    </form>
  )
}

export default Searchbar