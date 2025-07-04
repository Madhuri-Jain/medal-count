import type { MedalTableProps } from '../types';
import { ColumnHeader } from './ColumnHeader';
import { MedalRow } from './MedalRow';

export const MedalTable = ({ countries }: MedalTableProps) => {
    return (
        <table className="w-full border-collapserounded shadow">
            <ColumnHeader />
            <tbody>
                {countries.map((c, i) => {
                    return <MedalRow key={c.code} country={c} index={i} />;
                })}
            </tbody>
        </table>
    );
};
