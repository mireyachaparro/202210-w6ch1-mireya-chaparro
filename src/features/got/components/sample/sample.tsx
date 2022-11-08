import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rootState } from '../../../../infrastructure/store/store';
import * as ac from '../../reducer/action.creators';

export function Sample() {
    const characters = useSelector((state: rootState) => state.characters);

    const dispatcher = useDispatch();

    useEffect(() => {
        dispatcher(
            ac.loadActionCreate([
                {
                    name: 'pepe',
                    family: 'lopez',
                    age: 40,
                    state: false,
                },
            ])
        );
    }, [dispatcher]);

    return (
        <>
            <form>
                <h2>Añade tu personaje</h2>
                <div>
                    Name:
                    <input type="text" name="name" id="name" />
                </div>
                <div>
                    Family:
                    <input type="text" name="family" id="family" />
                </div>
                <div>
                    Age: <input type="text" name="age" id="age" />
                </div>
                <div>
                    <input type="submit" value="Enviar" />
                </div>
            </form>
            <h2>All Characters</h2>
            {characters.map((item) => (
                <>
                    <div className="card">
                        <p>Name: {item.name}</p>
                        <p>Family: {item.family}</p>
                        <p>Age: {item.age}</p>
                        <p>✖️</p>
                    </div>
                </>
            ))}
        </>
    );
}
