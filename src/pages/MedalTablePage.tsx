import { useEffect, useState } from 'react';
import { useMedalData } from '../hooks/useMedalData';
import type { SortType } from '../types';
import { MedalTable } from '../components/MedalTable';
import { useSearchParams } from 'react-router-dom';

export default function MedalTablePage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [sortBy, setSortBy] = useState<SortType>('gold');

    const { data, error, loading } = useMedalData();

    useEffect(() => {
        const sort = searchParams.get('sort') as SortType;
        const isValidSort = ['gold', 'silver', 'bronze', 'total'].includes(
            sort
        );

        if (isValidSort) {
            setSortBy(sort);
        } else {
            setSortBy('gold');
        }
    }, [searchParams]);

    const handleSortChange = (newSort: SortType) => {
        setSortBy(newSort); // update local state for immediate UI change
        setSearchParams({ sort: newSort }); // sync to URL
    };

    return (
        <>
            <h1 className="text-2xl font-bold mb-4 text-center">Medal Count</h1>
            <p className="text-center mb-4">
                Showing top 10 countries sorted by{' '}
                <span className="font-semibold">{sortBy}</span> medals.
            </p>
            {loading && (
                <p className="text-center text-gray-500">
                    Loading medal data...
                </p>
            )}
            {error && <p className="text-center text-red-500">{error}</p>}

            {!loading && !error && (
                <div className="max-w-2xl mx-auto px-2">
                    <MedalTable
                        countries={data}
                        sortBy={sortBy}
                        onSortChange={handleSortChange}
                    />
                </div>
            )}
        </>
    );
}
