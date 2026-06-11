import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';
import './css/ShopCategory.css'; // Reusing ShopCategory styles

const Search = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const { all_product } = useContext(ShopContext);
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (query && all_product) {
            const lowerQuery = query.toLowerCase();
            const filtered = all_product.filter(item => 
                item.name.toLowerCase().includes(lowerQuery) || 
                item.category.toLowerCase().includes(lowerQuery)
            );
            setResults(filtered);
        } else {
            setResults([]);
        }
    }, [query, all_product]);

    return (
        <div className="shop-category">
            <h1 style={{ textAlign: 'center', margin: '40px 0', fontSize: '28px' }}>
                Search Results for "{query}"
            </h1>
            
            <div className="shopcategory-indexSort" style={{ justifyContent: 'center' }}>
                <p>
                    <span>Showing {results.length}</span> products found
                </p>
            </div>

            {results.length > 0 ? (
                <div className="shopcategory-products">
                    {results.map((item, i) => (
                        <Item 
                            key={i} 
                            id={item.id} 
                            name={item.name} 
                            image={item.image} 
                            new_price={item.new_price} 
                            old_price={item.old_price}
                        />
                    ))}
                </div>
            ) : (
                <div style={{ textAlign: 'center', marginTop: '50px', marginBottom: '100px' }}>
                    <h2>No products found matching your search.</h2>
                    <p style={{ color: '#666' }}>Try searching for a different keyword or category (e.g. 'shirt', 'men').</p>
                </div>
            )}
        </div>
    );
};

export default Search;
