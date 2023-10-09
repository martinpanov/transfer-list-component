import { useState } from 'react';
import './App.css';
import Buttons from './components/Buttons/Buttons';
import LeftContainer from './components/LeftContainer/LeftContainer';
import RightContainer from './components/RightContainer/RightContainer';
import { ListItemsContext } from './components/context/ListItemsContext';


function App() {
    const [leftContainerItems, setLeftContainerItems] = useState<string[]>(['one', 'two', 'three', 'four', 'five']);
    const [rightContainerItems, setRightContainerItems] = useState<string[]>([]);
    const [leftSelectedItems, setLeftSelectedItems] = useState<string[]>([]);
    const [rightSelectedItems, setRightSelectedItems] = useState<string[]>([]);

    return (
        <ListItemsContext.Provider value={{ leftSelectedItems, setLeftSelectedItems, rightSelectedItems, setRightSelectedItems, leftContainerItems, setLeftContainerItems, rightContainerItems, setRightContainerItems }}>
            <LeftContainer />
            <Buttons />
            <RightContainer />
        </ListItemsContext.Provider>
    );
}

export default App;
