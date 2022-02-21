import useFetchData from './useFetchData'

function Users() {
  const { data } = useFetchData('https://jsonplaceholder.typicode.com/users')  

  return (
    <div>
      {data && (data.map((user) => {
        const { id, name, email, address } = user;
        return (                    
          <div key={id} className='user-detail'>
            <h3>{name}</h3>
            <h4>{email}</h4>
            <h5>{address.city}</h5>
          </div>           
        )
      }))
      }
        
          </div>          
  )
}

export default Users;