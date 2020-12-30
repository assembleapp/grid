import logo from './logo.svg';
import './App.css';
import Grid from "react-data-grid"
import "./hierarch/grid.css"
import styled from "styled-components"

import Scope from "./hierarch/scope"

function App() {
  return (
    <Layout>
      <Scope
      source="https://assemble-opposed.herokuapp.com/v1/graphql"
      schema={{companies: { _: ['name', 'address'], danger: 'number?', labels: 'symbols?' }}}
      >
        {model => (
          <Grid
          columns={[
            {key: 'name', name: 'Name'},
            {key: 'address', name: 'Address'},
          ]}
          rows={model.companies.toJSON()}
          />
        )}
      </Scope>
    </Layout>
  );
}

const Layout = styled.div`
height: 100vh;
`

export default App;
