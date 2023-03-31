import {ReactSearchAutocomplete} from "react-search-autocomplete";
import {ACR_ARR} from "@/app/components/acro-data";

function AcroSearch() {
    const koo = 1;
    const items = ACR_ARR;
    // const items = [
    //     {
    //         id: 0,
    //         name: 'Cobol'
    //     },
    //     {
    //         id: 1,
    //         name: 'JavaScript'
    //     },
    //     {
    //         id: 2,
    //         name: 'Basic'
    //     },
    //     {
    //         id: 3,
    //         name: 'PHP'
    //     },
    //     {
    //         id: 4,
    //         name: 'Java'
    //     }
    // ]

    const handleOnSearch = (string, results) => {
        return results.filter(el => el.name === string)
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        // console.log(string, results)
    }

    const handleOnHover = (result) => {
        // the item hovered
        console.log(result)
    }

    const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
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
                            fuseOptions={{ keys: ["id"] }}
                            // necessary, otherwise the results will be blank
                            resultStringKeyName="id"
                    />
                </div>
            </header>
        </div>
    )

}
export default AcroSearch;
