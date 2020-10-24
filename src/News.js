import React from 'react';

const Titre = (props) => {
    return(
        <h4>{props.titre}</h4>
    );
}
Titre.defaultProps = {titre: "Vide"};


const Plignes = (props) => {
    return(
        <p>{props.paragraph}</p>
    );
}
Plignes.defaultProps = {paragraph: "Vide"};


const Liens = (props) => {
    return(
        <a href={props.lien} target="_blank">Lien vers l'article</a>
    );
}
Liens.defaultProps = {lien: "Vide"};


const Source = (props) => {
    return(
        <p>{props.source}</p>
    );
}
Source.defaultProps = {source: "Vide"};




class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            docs: []};
    }


    componentDidMount() {
        fetch("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Coronavirus&page=0&api-key=Z2j0pvwTVSWTK0QN13zZUlrLFffCbtt7")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                docs: result.response.docs
              });
            },
            
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

    render() {

        const { error, isLoaded, docs } = this.state;
        if (error) {
          return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Chargement des News…</div>;
        } else {


        return(
            <div>
            {docs.map(item => 
                <div id="elements">
                <Titre titre={item.snippet}/>
                <Plignes paragraph={item.lead_paragraph}/>
                <Liens lien={item.web_url}/>
                <Source source={item.source}/>
                </div>
            )
            }
            </div>
        );
        }
        
    }
}


export default News;