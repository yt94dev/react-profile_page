import React from 'react';
import Table from './Table';

class App extends React.Component{
    render(){
        return(
          <div className="team_page">
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="team_container">

                            <div className="team_row-top">
                                <h3>Team</h3>
                            </div>

                            <div className="team_row-table">
                                <Table />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}

export default App
