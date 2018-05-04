import React, { Component } from 'react';
import logo from '../../../img/logo.svg';
import Styles from '../../../scss/_base.scss';
import request from 'superagent';


export default class extends Component {
  
  constructor(){
    super();

    this.state = {
      movie:''
    };
  }

  



  
  componentDidMount(){
    request.get('https://mfwkweb-api.clarovideo.net//services/content/list?api_version=v5.82&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=tibhvq9f0aoh1v8ipdjpi0rml6&quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=9869')
    .end((err,res)=>{
      let movies=JSON.parse(res.text);
      this.setState({
        movies:movies.response.groups
      });
    })
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
            <input type="" name="" className="input-search" />
          </div>
          <div className="div-movies">
             {movies}
          </div>
        </section>
    </div>
    )
  }
    
}