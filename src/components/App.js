import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component{

    state = {images:[]};
     onSearchSubmit = async (term)=>{
     const response = await axios.get ('https://api.unsplash.com/search/photos',{
            params : {query:term},
            headers:{
                Autorization: 'Client-ID mAhnD0zmAAaoAJ24dyekrr-9lEx3nGozO-0iSsd2tlY'
            }

        });

        this.setState({images: response.data.results});
    }

        
    render(){
        return( <div className="ui container" style={{marginTop: '10px'}}><SearchBar onSubmit = {this.onSearchSubmit}/>
        Found: {this.state.images.length} images</div>);
    }
    

}
export default App;

