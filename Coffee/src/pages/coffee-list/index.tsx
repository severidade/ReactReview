import { Link } from 'react-router-dom';
import { coffeeList } from '../../data';


function CoffeeList() {
  return (
    <>
      <h1>CoffeeList page</h1>
      <main>
      <ul>
        {
          coffeeList.map((coffee) => (
            <Link to={ `/coffees/${coffee.slug}` } key={ coffee.id }>
              <li>{ coffee.title }</li>
            </Link>
          ))
        }
      </ul>
      </main>
    </>
  )
}

export default CoffeeList;