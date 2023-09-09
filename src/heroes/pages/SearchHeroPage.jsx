import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { Herocard } from "../components/Herocard"
import queryString from "query-string";
import { getHeroesByName } from "../helpers";


export const SearchHeroPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = ''} = queryString.parse(location.search)
  const heroes = getHeroesByName(q);

  const showSearch = q.length === 0;
  const showError = (q.length > 0) && heroes.length === 0;



  const {searchText, onInputChange} = useForm({
    searchText: ''
  });


  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;
    navigate(`?q=${ searchText }`)
  }

    return (
      <>
          <h1> Search Hero Page </h1>
          <div className="row">
            <div className="col-5">
              <h4>Searching</h4>
              <hr/>
              <form onSubmit={ onSearchSubmit }>
                <input
                  type="text"
                  placeholder="Search a hero"
                  className="form-control"
                  name="searchText"
                  autoComplete="off"
                  value={ searchText }
                  onChange={ onInputChange }
                />
                <button className="btn btn-outline-primary mt-2">Search</button>
              </form>
            </div>

            <div className="col-7">
              <h4>Results</h4>
              <hr/>
              
              <div className="alert alert-primary" style={{display: showSearch? '':'none'}}>Search a hero</div>
              <div className="alert alert-danger" style={{display: showError? '':'none'}}>There's a no results <b> { q }</b></div>
              { heroes.map ( hero => (
                  <Herocard key={hero.id} {...hero}/>
              ))}
            </div>
          </div>
      </>
    )
  }