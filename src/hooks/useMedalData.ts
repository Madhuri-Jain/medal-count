import { useEffect, useState } from 'react';
import type { CountryMedals } from '../types';

export function useMedalData() {
    const [data, setData] = useState<CountryMedals[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchMedals() {
            try {
                setLoading(true);
                const response = await fetch('/api/medals.json');
                if (response.status >= 400) {
                    throw new Error(`Server responded with ${response.status}`);
                }
                const medalsData = await response.json();
                setData(medalsData);
            } catch (error) {
                const message =
                    error instanceof Error ? error.message : 'Unexpected error';
                setError(`Failed to load medal data: ${message}`);
            } finally {
                setLoading(false);
            }
        }

        fetchMedals();
    }, []);

    return { data, loading, error };
}
