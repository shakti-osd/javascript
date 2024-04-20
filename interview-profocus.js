const data = [
  [{ id: 1 }, { id: 2 }],
  [{ name: "contract1" }, { name: "contract2" }],
  [{ status: "active" }, { status: "pending" }],
]

const users = [
  {
    name: "siva",
    email: "ss@gmail.com",
    role: { roleId: 1, roleName: "admin", contrcat: "contract1" },
    status: "active",
  },
  {
    name: "siva mohith",
    email: "sf@gmail.com",
    role: { roleId: 2, roleName: "manager", contrcat: "contract2" },
    status: "active",
  },
  {
    name: "veera",
    email: "sg@gmail.com",
    role: { roleId: 2, roleName: "manager", contrcat: "contract2" },
    status: "active",
  },
  {
    name: "sddlk",
    email: "sg@gmail.com",
    role: {
      roleId: 3,
      roleName: "cad",
      contrcat: "contract3",
      status: "pending",
    },
  },
]

function filteredData(data, users) {
  //console.log(data.length)
  let result = []
  for (let i = 0; i < data.length; i++) {
    for (let j in data[i]) {
      // console.log(data[i][j])
      let filteredUser = users.filter((user) => {
        return (
          user.role.roleId === data[i][j].id &&
          user.role.contrcat === data[i + 1][j].name &&
          user.role.status === data[i + 1][j].status
        )
      })
      result.push(filteredUser)
    }
  }

  return result
}
console.log(filteredData(data, users))

// ==================================================
const users = [
  { name: "siva", email: "ss@gmail.com", age: 25 },
  { name: "siva mohith", email: "sf@gmail.com", age: 35 },
  { name: "veera", email: "sg@gmail.com", age: 22 },
  { name: "sddlk", email: "sg@gmail.com", age: 24 },
]

let result = users
  .filter((item) => item.age > 23)
  .map((user) => {
    const updatedAge = user.age + 10
    return { ...user, age: updatedAge }
  })
console.log(result)
