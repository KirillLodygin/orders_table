export const getNumberWithSpaces = (num) => {
  const str = num.toString().replace(/\s/g, '')
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export const getClientsName = (client) => {
  return `${client.firstname} ${client.lastname}`
}

export const getStatusStyle = (statusId) => {
  switch (statusId) {
    case 4:
      return '#008080'

    case 6:
      return '#02b421'

    case 5:
      return '#ba2508'

    default:
      return '#2c3e50'
  }
}
