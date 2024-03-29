import {useState, useEffect} from 'react';
import { apiCall } from '../Extras/one';
import {API_URL} from '../Constant/Link'
import { StyledLink } from '../components/StyledLinks.styles';




interface IState {
  names: string
}

export function Homepage() {
    const [names, setNames] = useState<IState[]>([])
    useEffect(() => {
      apiCall(API_URL.users)
        .then((data: any) => {
          const users = data.results
          let temp:any = []
          users.forEach((user:any) => {
            temp.push(user.name)
          });
          setNames(temp)
        });
    });
  
    return (
      <div className='App'>
        <h1>Characters</h1>
        {names.map((name:any) => {
        return (
          <div className='App'>
            <h3>
              <StyledLink to={'/'+(names.indexOf(name)+1)}>{name}</StyledLink>
            </h3>
          </div>
        )
      })}
      </div>
    );
  }