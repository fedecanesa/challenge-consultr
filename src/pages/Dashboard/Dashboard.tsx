import React, { FormEvent, useState } from 'react';
import {
    Filter,
    Header,
    LoadingIndicator,
    PokemonList,
    SearchBar,
    Title,
} from '../../components';
import { usePokemonsList, useInfiniteScroll } from '../../hooks';
import { useInView } from 'react-intersection-observer';
import './dashboard.scss';

const Dashboard: React.FC = () => {
    const { ref, inView } = useInView();
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        isSuccess,
        isError,
    } = usePokemonsList();

    const [search, setSearch] = useState('');
    const [selectedElement, setSelectedElement] = useState('all');

    const handleElementClick = (element: string) => {
        setSelectedElement(element);
    };

    const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (search) {
            setSearch(search);
        }
    };

    useInfiniteScroll({ inView, fetchNextPage });

    return (
        <main className='dashboard'>
            <Header />
            <Title />
            <SearchBar
                search={search}
                onSearch={handleSearch}
                setSearch={setSearch}
            />
            <Filter
                selectedElement={selectedElement}
                handleElementClick={handleElementClick}
            />

            <section className='dashboard__pokemons--container'>
                <PokemonList
                    search={search}
                    pokemons={data}
                    isSuccess={isSuccess}
                    isError={isError}
                    selectedElement={selectedElement}
                    fetchNextPage={fetchNextPage}
                />
            </section>
            {!search && (
                <button
                    ref={ref}
                    onClick={() => fetchNextPage()}
                    disabled={!hasNextPage || isFetchingNextPage}>
                    {isFetchingNextPage
                        ? 'Loading more...'
                        : hasNextPage
                        ? 'Load More'
                        : 'Nothing more to load'}
                </button>
            )}
            <LoadingIndicator show={isFetching && !isFetchingNextPage} />
        </main>
    );
};

export default Dashboard;
