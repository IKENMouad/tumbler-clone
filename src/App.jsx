import React, {Component} from "react";

import Presentation from "./Presentation.jsx";

import reddit from "./reddit.json";
import uuid from "uuid";

class App extends Component{
    state = {
        data: []
    }

    componentDidMount(){
        // const url = "https://reddit.com/.json";
        // const options = {
        //     mode: "no-cors"
        // };
        // fetch(url, options)
        //     .then(res => {
        //         console.log(res.type);
        //         return res.json();
        //     })
        //     .then(data => {
        //         const less_data = data.children.map(item => {
        //             return {
        //                 author: item.author,
        //                 score: item.score,
        //                 title: item.title,
        //                 url: item.url,
        //                 date: item.created_utc
        //             };
        //         });
        //        this.setState({
        //             data: less_data
        //        });
        //     });             
        const less_data = reddit.data.children.map((item, index) => {
          return {
            key: index,
            id: uuid.v4(),
            author: item.data.author,
            score: item.data.thumbnail_width,
            title: item.data.title,
            url: item.data.url,
            date: item.data.created_utc,
            category: item.data.subreddit,
            image: item.data.preview.images[0].resolutions[1],
            gif: item.data.preview.images[0].variants["gif"],
            video: item.data.preview.images[0].variants.mp4,
          };
        });

        this.setState({
            data: less_data
        });
    }

    upvote = () => {
        this.setState(prevState => {
            return {
                ...prevState
            };
        });
    }

    render(){       
        return (
          <div style={{ marginTop:'3rem' }} >
            <Presentation content={this.state.data} />;
          </div>
        ); 
    }
}

export default App;