import {ReactSearchAutocomplete} from "react-search-autocomplete";
import {ACR_ARR} from "@/app/components/acro-data";
import {useState} from "react";
import styles from './acro-search.module.css';

function AcroSearch() {
    const items = ACR_ARR;
    const [arr, setArr] = useState([]);

    // function addItem(item) {
    //     const newItem = item;
    //     setArr([...arr, newItem]);
    // }

    const handleOnSearch = (string, results) => {
        // return results.filter(el => el.name === string)
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log('STRING-ITEM', string, 'RESULTS-ARR', results);
    }

    const handleOnHover = (result) => {
        // the item hovered
        // setArr([...arr, result]);
        // const newIt = {id: result.id, name: result.name, val: result.val};
        // setArr([...arr, result]);
        // console.log([...arr])
        // console.log(item)
        // console.log('RESULT', result)
    }

    const handleOnSelect = (item) => {
        // the item selected
        const newItem = {id: item.id, name: item.name, val: item.val};
        setArr([...arr, newItem]);
        // console.log([...arr])
        // console.log(item)
    }

    const handleOnFocus = () => {
        console.log('Focused')
    }

    const formatResult = (item) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left', fontWeight: '700' }}>{item.name.toUpperCase()}</span>
                <span style={{ display: 'block', textAlign: 'left' }}>{item.val}</span>
            </>
        )
    }

    // const areSelected = arr.length !== 1 ? 'arr' : 'task';
    const areSelected = arr.length;

    return (
        <div className="App">
            <header className="App-header">
                <div style={{ width: 400 }}>
                    <ReactSearchAutocomplete
                        items={items}
                        onSearch={handleOnSearch}
                        onHover={handleOnHover}
                        onSelect={handleOnSelect}
                        onFocus={handleOnFocus}
                        autoFocus
                        formatResult={formatResult}
                            fuseOptions={{ keys: ["name"], minMatchCharLength: 1, threshold: 0 }}
                            // necessary, otherwise the results will be blank
                            resultStringKeyName="val"

                    />
                </div>
            </header>
            <div>
                {arr.map(el => {
                    return <div key={el.id} className={styles.itemsel}>
                        <h2>{el.name}: </h2>
                        <spanb>{el.val}</spanb>
                    </div>
                })}
            </div>
        </div>
    )

}
export default AcroSearch;
