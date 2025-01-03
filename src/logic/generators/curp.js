const getFirstVowel = (name) => {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for (let i = 1; i < name.length; i++) {
    if (vowels.includes(name[i])) {
      return name[i]
    }
  }
  return 'X'
}

const getFirstInnerConstant = (name) => {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for (let i = 1; i < name.length; i++) {
    if (!vowels.includes(name[i])) {
      return name[i]
    }
  }
  return ''
}

const getStateCode = (state) => {
  const codes = {
    aguascalientes: 'AS',
    'baja california': 'BC',
    'baja california sur': 'BS',
    campeche: 'CC',
    'coahuila de zaragoza': 'CL',
    colima: 'CM',
    chiapas: 'CS',
    chihuahua: 'CH',
    'distrito federal': 'DF',
    durango: 'DG',
    guanajuato: 'GT',
    guerrero: 'GR',
    hidalgo: 'HG',
    jalisco: 'JC',
    mexico: 'MC',
    michoacan: 'MN',
    morelos: 'MS',
    nayarit: 'NT',
    'nuevo leon': 'NL',
    oaxaca: 'OC',
    puebla: 'PL',
    queretaro: 'QT',
    'quintana roo': 'QR',
    'san luis potosí': 'SP',
    sinaloa: 'SL',
    sonora: 'SR',
    tabasco: 'TC',
    tamaulipas: 'TS',
    tlaxcala: 'TL',
    veracruz: 'VZ',
    yucatan: 'YN',
    zacatecas: 'ZS',
    'estado de mexico': 'MC',
    'nacido en el extranjero': 'NE'
  }
  return codes[state.toLowerCase() || 'XX']
}

export const curpGenerator = (name, fathersName, mothersName, birthday, gender, state) => {
  // birthday = '1999-12-31'

  let curp = ''
  curp += fathersName[0] // Primera letra del primer apellido
  curp += getFirstVowel(fathersName) // Primera vocal interna del primer apellido
  curp += mothersName[0] // Primera letra del segundo apellido
  curp += name[0] // Primera letra del nombre
  curp += birthday.substring(2, 4) // Año de nacimiento
  curp += birthday.substring(5, 7) // Mes de nacimiento
  curp += birthday.substring(8, 10) // Día de nacimiento
  curp += gender[0] // Sexo
  curp += getStateCode(
    state
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
  ) // Estado de nacimiento
  curp += getFirstInnerConstant(fathersName) // Primera consonante interna del primer apellido
  curp += getFirstInnerConstant(mothersName) // Primera consonante interna del segundo apellido
  curp += getFirstInnerConstant(name) // Primera consonante interna del nombre
  curp += '0A' // Dígito verificador
  return curp.toUpperCase().replace('Ñ', 'X')
}
