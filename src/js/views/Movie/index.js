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
    const url_id='https://mfwkweb-api.clarovideo.net/services/content/data?api_version=v5.82&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=tibhvq9f0aoh1v8ipdjpi0rml6&group_id='+id_movie+'&user_hash=NjMyMDg5NXwxNTI1NDA5NDE4fGQ3NjcwZDUyNzgwNTc3YzQxYTg1Y2FlZjIyMmEyNWI3MDcyZWI5MGZiM2FjMmQ5MDs';
    request.get(url_id)
    .end((err,res)=>{
      let movie=JSON.parse(res.text);

      let obj_movie=movie.response.group.common;

      this.setState({
        movie:obj_movie
      });


    });


  }
  
  getElement(a,key){
    var obj={};
    for(var x in a){
      if(x==key){
        obj=a[x];
      }
    }

    return obj;
  }

  toArray(a){
    var r=[];
    for(var x in a){
      for(var y in a[x]){
        r.push(a[x][y]);
      }
    }
    return r;
  }

  toArray_simple(a){
     var r=[];
    for(var x in a){
      r.push(a[x]);
    }
    return r;
  }

  toArray_category(a,category){
    var r=[];
    for(var x in a){
    if(a[x].desc===category){
      for(var y in a[x]){
            r.push(a[x][y]);
       }
      }
    }
    return r;
  }

  toArray_Object(a){
    var result;
    for(var x in a){
      var obj=a[x];
      if(typeof obj === "object"){
        result=obj;
      }
    }
    return obj;
  }


  render() {
    var mov=this.state.movie;
    var title=mov.title;
    var img=mov.image_large;

    var media=this.getElement(mov.extendedcommon,'media');
    var year=media.publishyear;
    var duration=media.duration;
    var pg='PG-13';
    var description=mov.large_description;
    var title_original=media.originaltitle;

    var genres=this.toArray(this.getElement(mov.extendedcommon,'genres'));
    var roles=this.toArray(this.getElement(mov.extendedcommon,'roles'));
    var a_roles_actor=this.toArray_category(roles,'Actor');
    var a_roles_director=this.toArray_category(roles,'Director');
    var a_roles_escritor=this.toArray_category(roles,'Escritor');
    var a_roles_productor=this.toArray_category(roles,'Productor');

    var generos=genres.map(function(g,x){
      return g.desc;
    }).join(',');

    var obj_actores=this.toArray_simple(this.getElement(this.toArray_Object(a_roles_actor),'talent'));

    var obj_director=this.toArray_simple(this.getElement(this.toArray_Object(a_roles_director),'talent'));

    var obj_escritor=this.toArray_simple(this.getElement(this.toArray_Object(a_roles_escritor),'talent'));

    var obj_productor=this.toArray_simple(this.getElement(this.toArray_Object(a_roles_productor),'talent'));

    var actores=obj_actores.map(function(actor,y){
      return  <button key={y} className="btn-border">{actor.fullname}</button>;
    });
    var director=obj_director.map(function(actor,y){
      return  <button key={y} className="btn-border">{actor.fullname}</button>;
    });

    var escritores=obj_escritor.map(function(actor,y){
      return  <button key={y} className="btn-border">{actor.fullname}</button>;
    });

    var productores=obj_productor.map(function(actor,y){
      return  <button key={y} className="btn-border">{actor.fullname}</button>;
    });




    
    
    

    



    return (
      <div>
        <header>
            <img src={logo} width="300" alt="Claro" className="header-logo" />
          </header>
          <section>
            <div className="row container">
                
              <div className="col3 div-movie-img">
                 <div className="col12 title-movie">
                  {title}
                 </div> 
                <img className="movie-img" src={img} />
              </div>
              <div className="col3">
                <div className="col12">
                   <b className="movie-year">
                        {title} ({year})
                   </b>
                   <b className="movie-year">
                        {duration}
                   </b>
                   <b className="movie-year">
                        {pg}
                   </b>
                </div>
                <div className="div-title col12">
                    {description}
                </div>
                <div className="div-genero col12 sin-padding">
                 <b>Género:</b> {generos}
                </div>
                <div className="div-actor col12 sin-padding">
                 <b>Actor:</b>
                {actores}
                </div>

                <div className="div-actor col12 sin-padding">
                 <b>Director:</b>
                 {director}
                </div>
                <div className="div-actor col12 sin-padding">
                 <b>Escritor:</b>
                 {escritores}
                </div>
                <div className="div-actor col12 sin-padding">
                 <b>Productor:</b>
                 {productores}
                </div>
                <div className="div-genero col12 sin-padding">
                 <b>Título Original:</b> {title_original}
                </div>
                <div className="div-buttons col12 sin-padding">
                  <button className="btn-action btn-action-left">
                    Por ver
                  </button>
                  <button className="btn-action">
                    Compartir
                  </button>
                </div>

              </div>
              <div className="col3">
              </div>
            </div>    
          </section>
      </div>
      )
  }

}