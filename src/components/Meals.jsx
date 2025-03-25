import MealItem from './MealItem.jsx';
import useHttp from '../hooks/useHttp.js';

const requestConfig = {};

export default function Meals() {
    // pake param ketiiga [] sebagai initialData biar ga error di loadedMeals nya.
    // kalo req selesai dia akan buat lagi param kedua baru terus" an jd infinite loop
    // makanya harus dibuat jad global diset dulu biar kita selalu pake object / memory yang sama disini
    // untuk param kedua..
    const {
        data: loadedMeals,
        isLoading,
        error,
    } = useHttp('http://localhost:3000/meals', requestConfig, []);

    if (isLoading) {
        return <p>Fetching meals...</p>;
    }

    // if (!data) {
    //     return <p>No meals found.</p>;
    // }

    return (
        <ul id="meals">
            {loadedMeals.map((meal) => (
                <MealItem key={meal.id} meal={meal}/>
            ))}
        </ul>
    );
}