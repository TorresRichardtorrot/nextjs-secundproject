import User from "@/components/user"

async function fetchUsers(){
  const res = await fetch(`https://reqres.in/api/users?page=1`)
  const userData = await res.json()
  return userData.data
}

async function HomePage() {
  const users = await fetchUsers()
  return (
    <User users={users}/>
  )
}

export default HomePage
