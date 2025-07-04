import type { MedalRowProps } from '../types';

const FLAGHEIGHT = 17;

export const MedalRow = ({ country, index, flagIndex }: MedalRowProps) => {
    const total = country.gold + country.silver + country.bronze;
    const yOffset = flagIndex >= 0 ? -flagIndex * FLAGHEIGHT : 0;

    return (
        <tr className="hover:bg-gray-50 border-b transition">
            <td className="p-2 text-right">{index + 1}</td>
            <td className="p-2">
                <div
                    className="w-7 h-4 bg-no-repeat"
                    style={{
                        backgroundImage: `url('/flags.png')`,
                        backgroundPosition: `0px ${yOffset}px`,
                        backgroundSize: '100% auto',
                        transform: 'scale(1.5)', // slightly enlarge
                        transformOrigin: 'top left',
                    }}
                />
            </td>
            <td className="font-medium text-left ">{country.code}</td>
            <td className="p-2 text-yellow-600 font-semibold">
                {country.gold}
            </td>
            <td className="p-2  text-gray-500 dark:text-gray-200">
                {country.silver}
            </td>
            <td className="p-2  text-orange-600">{country.bronze}</td>
            <td className="p-2  font-bold">{total}</td>
        </tr>
    );
};
