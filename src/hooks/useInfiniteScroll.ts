import { useEffect } from 'react';

interface UseInfiniteScrollProps {
    inView: boolean;
    fetchNextPage: () => void;
}

const useInfiniteScroll = ({
    inView,
    fetchNextPage,
}: UseInfiniteScrollProps) => {
    useEffect(() => {
        if (inView) {
            fetchNextPage();
        }
    }, [fetchNextPage, inView]);
};

export default useInfiniteScroll;
