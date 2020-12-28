import logo from './logo.svg';
import './App.css';
import Grid from "react-data-grid"
import "react-data-grid/dist/react-data-grid.css"

function App() {
  return (
    <div className="App">
      <header>
        <Source
        source="https://assemble-opposed.herokuapp.com/v1/graphql"
        schema={{companies: { _: ['name', 'address'], danger: 'number?', labels: 'symbols?' }}}
        >
          {/* {model => ( */}
            <Grid
            columns={[
              {key: 'id', name: 'ID'},
              {key: 'title', name: 'Title'},
            ]}
            rows={[
              { id: 0, title: 'Example'},
              { id: 1, title: 'Demo'},
            ]}
            />
          {/* )} */}
        </Source>
      </header>
    </div>
  );
}

const Source = ({children}) => <div>{children}</div>

export default App;
