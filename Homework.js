class SearchSuggestionSystem {
  constructor(products) {
    
    this.products = products.sort();
  }

  getSuggestions(searchWord) {
    const result = [];
    let prefix = "";

    for (let char of searchWord) {
      prefix += char;
      const matches = [];

      for (let product of this.products) {
        if (product.startsWith(prefix)) {
          matches.push(product);
          if (matches.length === 3) break; 
        }
      }

      result.push(matches);
    }

    return result;
  }
}
