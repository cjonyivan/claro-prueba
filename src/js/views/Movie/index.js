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
      const {match} = this.props
      const name = match.params.name;
      //Para la busqueda de la pelicula
      const id_movie=match.params.id;

      //Concatenando el id de la pelicula con el endpoint
      const url_id='https://mfwkweb-api.clarovideo.net/services/content/data?api_version=v5.82&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=tibhvq9f0aoh1v8ipdjpi0rml6&group_id='+id_movie+'&user_hash=NjMyMDg5NXwxNTI1NDA3NTc5fDIxYTU2NjM2YjJlMzQxYjY4M2FhOWUwMWY1NmVkMWQ2N2VmZjA0MmMyMmQ4YjhmYTM3';
    request.get(url_id)
    .end((err,res)=>{
      let movie=JSON.parse(res.text);
      let obj_movie=movie.response.group.common;

      this.setState({
        movies:movies.response.groups
      });


    });


  }

  
  render() {
    return (
    <div>
      <header>
          <img src={logo} width="300" alt="Claro" className="header-logo" />
        </header>
        <section>
        </section>
    </div>
    )
  }
    
}