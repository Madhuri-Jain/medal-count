import { useMemo } from 'react';
import type { MedalTableProps } from '../types';
import { sortCountries } from '../utils/sortCountries';
import { ColumnHeader } from './ColumnHeader';
import { MedalRow } from './MedalRow';
import { getFlagCodeOrder } from '../utils/getFlagCodeOrder';

export const MedalTable = ({
    countries,
    sortBy,
    onSortChange,
}: MedalTableProps) => {
    const sorted = sortCountries(countries, sortBy).slice(0, 10);

    //calculating the index of country to set offset on given flag image for corresponding country
    const flagCodeOrder = useMemo(
        () => getFlagCodeOrder(countries),
        [countries]
    );

    return (
        <table className="w-full border-collapserounded shadow">
            <ColumnHeader sortBy={sortBy} onSortChange={onSortChange} />
            <tbody>
                {sorted.map((c, i) => {
                    const flagIndex = flagCodeOrder.indexOf(
                        c.code.toUpperCase()
                    );
                    return (
                        <MedalRow
                            key={c.code}
                            country={c}
                            index={i}
                            flagIndex={flagIndex}
                        />
                    );
                })}
            </tbody>
        </table>
    );
};
