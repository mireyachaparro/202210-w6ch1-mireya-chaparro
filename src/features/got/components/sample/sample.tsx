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
            {characters.map((item) => (
                <>
                    <p>Name: {item.name}</p>
                    <p>Family: {item.family}</p>
                    <p>Age: {item.age}</p>
                </>
            ))}
        </>
    );
}
