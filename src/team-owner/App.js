import React from 'react';
import Table from './Table';

class App extends React.Component{
    render(){
        return(
          <div className="team-owner_page">
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="team-owner_container">

                            <div className="team-owner_row-top">
                                <h3>Team</h3>
                                <div className="team-owner_search-group">
                                    <input type="text" />
                                        <i className="waves-effect waves-light waves-input-wrapper"><input type="submit" value="Invite People" className="waves-button-input"/></i>
                                </div>
                            </div>

                            <div className="team-owner_row-table">
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
