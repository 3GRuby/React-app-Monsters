import React, { ChangeEventHandler } from 'react';
import './search-box.styles.css';

interface IsearchBoxProps {
  className:string;
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

const SearchBox = ({ className, placeholder, onChangeHandler }: IsearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
