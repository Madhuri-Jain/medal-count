import { useState } from 'react';
import { useMedalData } from '../hooks/useMedalData';
import type { SortType } from '../types';

export default function MedalTablePage() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [sortBy, setSortBy] = useState<SortType>('gold');
    const { data, error, loading } = useMedalData();

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

            {!loading && !error && <p>{JSON.stringify(data)}</p>}
        </>
    );
}
