import Link from 'next/link'
function User({users}) {
  return (
    
  <ul>
  {
    users.map(user=> (
        <Link key={user.key} href={`/users/${user.id}`}>
        <li 
        className="bg-slate-400 mb-2 p-4 rounded-md text-black flex justify-between"
        >
        <div>
          <h5 className="font-bold">{user.id} {user.first_name}  {user.last_name}</h5>
            <p className="text-slate-100">
              email: {user.email}
            </p>
           
            {/* <Image src={user.avatar}  alt={ "imagen de " + user.first_name}/> */}
        </div>
        <img src={user.avatar} className="rounded-full w-20"></img>
      </li>
      </Link>
    ))
  }
</ul>
  )
}

export default User
