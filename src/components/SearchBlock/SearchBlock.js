import React from 'react';
import './SearchBlock.scss'

const SearchBlock = () => {
    return (
        <div className='search-section'>
            <form action='' method=''>
                <div className='search-section__fields'>
                    <input placeholder='Product SKU, Name…' className='search-section__input' type='search' name="heaeder-search"/>
                    <input className='search-section__button' type='submit' value=''/>
                </div>
            </form>
        </div>
    );
};

export default SearchBlock;