import { FormEvent } from 'react';
import SearchIcon from '../../assets/images/search.png';
import './searchBar.scss';

interface SearchBarProps {
    search: string;
    onSearch: (e: FormEvent<HTMLFormElement>) => void;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({
    search,
    setSearch,
    onSearch,
}) => (
    <form className='searchForm' onSubmit={onSearch}>
        <input
            type='text'
            placeholder='Quick Search'
            className='searchForm__input'
            value={search}
            onChange={e => setSearch(e.target.value.toLowerCase())}
        />
        <button className='searchForm__button' type='submit'>
            <img src={SearchIcon} alt='' />
        </button>
    </form>
);

export default SearchBar;
