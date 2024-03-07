"use server"
import Product from "../models/product.model";
// runs only on server
import { connectToDB } from "../mongoose";

import { scrapeAmazonProduct } from "../scraper";

export async function scrapeAndStoreProduct(productUrl: string) {
    if(!productUrl) return;
  
    try {
    connectToDB();
    
    // Scrape the amazon product
    const scrapedProduct = await scrapeAmazonProduct(productUrl);

    if(!scrapedProduct) return;

    let product = scrapedProduct;

    const existingProduct = await Product.findOne({ url: scrapedProduct.url });

    if(existingProduct) {
      const updatedPriceHistory: any = [
        ...existingProduct.priceHistory,
        { price: scrapedProduct.currentPrice }
      ]

      product = {
        ...scrapedProduct,
        priceHistory: updatedPriceHistory,
        lowestPrice: getLowestPrice(updatedPriceHistory),
        highestPrice: getHighestPrice(updatedPriceHistory),
        averagePrice: getAveragePrice(updatedPriceHistory),
      }
    }

    } catch (error: any) {
      throw new Error(`Failed to create/update product: ${error.message}`)
    }
  }