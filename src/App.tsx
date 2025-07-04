import { useMedalData } from './hooks/useMedalData';

function App() {
    const { data, error, loading } = useMedalData();
    return (
        <>
            <h1 className="text-red-200 dark:text-amber-300">Medal Count</h1>
            {/* testing data load */}
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <p>{JSON.stringify(data)}</p>
            )}
        </>
    );
}

export default App;
