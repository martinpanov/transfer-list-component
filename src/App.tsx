import { useState } from 'react';
import './App.css';
import Buttons from './components/Buttons/Buttons';
import LeftContainer from './components/LeftContainer/LeftContainer';
import RightContainer from './components/RightContainer/RightContainer';
import { ListItemsContext } from './components/context/ListItemsContext';


function App() {
    const [leftContainerItems, setLeftContainerItems] = useState<number[]>([1, 2, 3, 4, 5]);
    const [rightContainerItems, setRightContainerItems] = useState<number[]>([]);
    const [leftSelectedItems, setLeftSelectedItems] = useState<number[]>([]);
    const [rightSelectedItems, setRightSelectedItems] = useState<number[]>([]);

    return (
        <ListItemsContext.Provider value={{ leftSelectedItems, setLeftSelectedItems, rightSelectedItems, setRightSelectedItems, leftContainerItems, setLeftContainerItems, rightContainerItems, setRightContainerItems }}>
            <LeftContainer />
            <Buttons />
            <RightContainer />
        </ListItemsContext.Provider>
    );
}

export default App;
