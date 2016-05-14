import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTsearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBiNtcPGPgkdLUag-hOy8ttBKhbuSAV3mk';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTsearch({key: API_KEY, term:'react redux'}, (videos) => {
      this.setState({ videos });
      console.log(videos);
    });

  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector('.container'));
