import logo from './logo.svg';
import './App.css';
import Grid from "react-data-grid"
import "react-data-grid/dist/react-data-grid.css"

import Scope from "./hierarch/scope"

function App() {
  return (
    <div className="App">
      <header>
        <Scope
        source="https://assemble-opposed.herokuapp.com/v1/graphql"
        schema={{companies: { _: ['name', 'address'], danger: 'number?', labels: 'symbols?' }}}
        >
          {model => (
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
          )}
        </Scope>
      </header>
    </div>
  );
}

export default App;
