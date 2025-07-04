import type { MedalTableProps } from '../types';
import { sortCountries } from '../utils/sortCountries';
import { ColumnHeader } from './ColumnHeader';
import { MedalRow } from './MedalRow';

export const MedalTable = ({ countries, sortBy }: MedalTableProps) => {
    const sorted = sortCountries(countries, sortBy).slice(0, 10);

    return (
        <table className="w-full border-collapserounded shadow">
            <ColumnHeader />
            <tbody>
                {sorted.map((c, i) => {
                    return <MedalRow key={c.code} country={c} index={i} />;
                })}
            </tbody>
        </table>
    );
};
