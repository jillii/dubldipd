export default function Window(props) {
    const id = props.id
    const title = props.title
    const value = props.value
    const size = props.size
    const list = props.list
    const buttons = props.buttons
    const tableTitle = props.tableTitle
    const table = props.table
    const arr = new Array(20).fill(' ')

    return (        
        <div id={id} className="window-container" data-size={size}>
            {arr.map((x, index) =>
                <div key={index} className="window magnet-poetry">
                    <div className="title-bar">
                        <div className="title-bar-text">{title}</div>
                        <div className="title-bar-controls">
                            <button aria-label="Minimize"></button>
                            <button aria-label="Maximize"></button>
                            <button aria-label="Close"></button>
                        </div>
                    </div>
                    <div className="window-body">
                        {value &&
                            <p>{value}</p>
                        }
                        {list &&
                            <ul className="tree-view">
                                <li>
                                    <details open>
                                        <summary>With perfomances by:</summary>
                                        <ul>
                                            {list.map((item, index) =>
                                                <li key={index}>{item}</li>
                                            )}
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        }
                        {table &&
                            <div className="sunken-panel" style={{height: 160, width: 200}}>
                                <table className="interactive">
                                    <thead>
                                        <tr>
                                        <th>Type</th>
                                        <th>Value</th>
                                        <th>Comment</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Object.keys(table).map((key, index) => 
                                            <tr key={index}>
                                                <td>{key}</td>
                                                <td>{table[key]}</td>
                                                <td>n/a</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        }
                        {buttons &&
                            <section className="field-row" style={{justifyContent: "flex-end"}}>
                                {buttons.map((button, index) => <button key={index}>{button}</button>)}
                            </section>
                        }
                    </div>
                </div> 
            )}
        </div>
    );
}