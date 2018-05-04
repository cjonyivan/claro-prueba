import React, { Component } from 'react';
import logo from '../../../img/logo.svg';
import Styles from '../../../scss/_base.scss';
import request from 'superagent';


export default class extends Component {
  
  constructor(){
    super();

    this.state = {
      movie:'',
      b_movies:''
    };
  }

  



  
  componentDidMount(){
    request.get('https://mfwkweb-api.clarovideo.net//services/content/list?api_version=v5.82&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=tibhvq9f0aoh1v8ipdjpi0rml6&quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=9869')
    .end((err,res)=>{
      let movies=JSON.parse(res.text);
      this.setState({
        movies:movies.response.groups,
        b_movies:movies.response.groups
      });
    })
  }


onChangeHandler(e){
    var word=this.RemoveAccents(e.target.value);    
    var movies=this.state.b_movies;
    var filter=[];

    for(var x in movies){
      var movie=movies[x];
      if(this.RemoveAccents(movie.title).toLowerCase().indexOf(word.toLowerCase())!==-1){
        filter.push(movie);
      }
    }

    if(word===''){
        this.setState({
            movies:this.state.b_movies,
            b_movies:this.state.b_movies
        });      
    }else{
        this.setState({
            movies:filter,
            b_movies:this.state.b_movies
        });
    }
}


RemoveAccents (text) {
    var accents    = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž',
        accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz",
        textNoAccents = [];

    for (var i in text) { 
        var idx = accents.indexOf(text[i]);
        if (idx != -1)
            textNoAccents[i] = accentsOut.substr(idx, 1);
        else
            textNoAccents[i] = text[i];
    }

    return textNoAccents.join('');
}

  
  render() {
    var result=[];

    for(var x in  this.state.movies){
      var movie=this.state.movies[x];
      result.push(movie);
    }


      var movies=result.map(function(mov,x){
        mov.link="/movie/"+mov.title_uri+"/"+mov.id;

        return <div className="col4" key={x}><div><a href={mov.link}><img src={mov.image_small} /></a> </div></div>
      });

    return (
    <div>
      <header>
          <img src={logo} width="300" alt="Claro" className="header-logo" />
        </header>
        <section>
          <div className="div-search">
            <span className="span-title">BUSCAR</span>
            <input  className="input-search"  input value={this.state.input} type="text" onChange={this.onChangeHandler.bind(this)}/>
          </div>
          <div className="div-movies">
             {movies}
          </div>
        </section>
    </div>
    )
  }
    
}