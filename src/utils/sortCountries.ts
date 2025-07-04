import type { CountryMedals, SortType } from '../types';

export function sortCountries(
    data: CountryMedals[],
    sortBy: SortType
): CountryMedals[] {
    return [...data].sort((a, b) => {
        const bTotal = b.gold + b.silver + b.bronze;
        const aTotal = a.gold + a.silver + a.bronze;
        if (sortBy === 'total') {
            return bTotal - aTotal || b.gold - a.gold;
        }
        if (sortBy === 'gold') return b.gold - a.gold || b.silver - a.silver;
        if (sortBy === 'silver') return b.silver - a.silver || b.gold - a.gold;
        if (sortBy === 'bronze') return b.bronze - a.bronze || b.gold - a.gold;
        return 0;
    });
}
